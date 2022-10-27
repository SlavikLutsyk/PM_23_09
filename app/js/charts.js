var user;
window.onload = function(){
   var xhttp = new XMLHttpRequest();
xhttp.open('GET','js/data.json', true);
xhttp.send();
xhttp.onload = function(){
   if(this.status==200){
    user = JSON.parse(this.responseText);
   }
}
}
window.onmouseup=function(){
    Chart.pluginService.register({//  w   w  w  .  d  e m  o  2  s   .   c o  m 
  afterUpdate: function (chart) {
     if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
        var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
        arc.round = {
           x: (chart.chartArea.left + chart.chartArea.right) / 2,
           y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
           radius: (chart.outerRadius + chart.innerRadius) / 2,
           thickness: (chart.outerRadius - chart.innerRadius) / 2 - 1,
           backgroundColor: arc._model.backgroundColor
        }
     }
  },
  afterDraw: function (chart) {
     if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
        var ctx = chart.chart.ctx;
        var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
        var startAngle = Math.PI / 2 - arc._view.startAngle;
        var endAngle = Math.PI / 2 - arc._view.endAngle;
        ctx.save();
        ctx.translate(arc.round.x, arc.round.y);
        //console.log(arc.round.startAngle)
        ctx.fillStyle = arc.round.backgroundColor;
        ctx.beginPath();
        ctx.arc(arc.round.radius * Math.sin(startAngle), arc.round.radius * Math.cos(startAngle), arc.round.thickness, 0, 2 * Math.PI);
        ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
     }
  },
});
//write text plugin
Chart.pluginService.register({
  afterUpdate: function (chart) {
     if (chart.config.options.elements.center) {
        var helpers = Chart.helpers;
        var centerConfig = chart.config.options.elements.center;
        var globalConfig = Chart.defaults.global;
        var ctx = chart.chart.ctx;
        var fontStyle = helpers.getValueOrDefault(centerConfig.fontStyle, globalConfig.defaultFontStyle);
        var fontFamily = helpers.getValueOrDefault(centerConfig.fontFamily, globalConfig.defaultFontFamily);
        if (centerConfig.fontSize)
           var fontSize = centerConfig.fontSize;
           // figure out the best font size, if one is not specified
        else {
           ctx.save();
           var fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
           var maxFontSize = helpers.getValueOrDefault(centerConfig.maxFontSize, 256);
           var maxText = helpers.getValueOrDefault(centerConfig.maxText, centerConfig.text);
           do {
              ctx.font = helpers.fontString(fontSize, fontStyle, fontFamily);
              var textWidth = ctx.measureText(maxText).width;
              // check if it fits, is within configured limits and that we are not simply toggling back and forth
              if (textWidth < chart.innerRadius * 2 && fontSize < maxFontSize)
                 fontSize += 1;
              else {
                 // reverse last step
                 fontSize -= 1;
                 break;
              }
           } while (true)
           ctx.restore();
        }
        // save properties
        chart.center = {
           font: helpers.fontString(fontSize, fontStyle, fontFamily),
           fillStyle: helpers.getValueOrDefault(centerConfig.fontColor, globalConfig.defaultFontColor)
        };
     }
  },
  afterDraw: function (chart) {
     if (chart.center) {
        var centerConfig = chart.config.options.elements.center;
        var ctx = chart.chart.ctx;
        ctx.save();
        ctx.font = chart.center.font;
        ctx.fillStyle = chart.center.fillStyle;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
        ctx.fillText(centerConfig.text, centerX, centerY);
        ctx.restore();
     }
  },
})
var ctx = document.getElementById('myPieChart').getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 400)
gradient.addColorStop(0, '#7385f8')
gradient.addColorStop(1, '#803ce2')
    var data={
      labels:
      ['1','2'],
  datasets:[{
      label: '',
      data: [75,25],
      backgroundColor: [gradient, '#373555'],
      borderWidth: 0.1
  }]
}

const centerText={
    id:'centerText',
    afterDatasetsDraw(chart, args, options){
        const {ctx, chartArea:{left, right, top, bottom, width, height}}=chart;
        ctx.save();
        console.log('px');
        console.log(right);
        ctx.font = 'bolder 30px Arial';
        ctx.fillStyle = 'rgba(255,26,104,1)';
        ctx.textAlign = 'right';
        ctx.fillText('75%',width / 2, height / 2 + top);
        ctx.restore();

        ctx.font = 'bolder 30px Arial';
        ctx.fillStyle = 'rgba(54,162,235,1)';
        ctx.textAlign = 'left';
        ctx.fillText('Completed',width / 2, height / 2 + top);
        ctx.restore();
    }
}

var config={
  type: 'doughnut',
  data: data,
  options: {
      responsive:true,
      cutoutPercentage:90,
      legend:{
        display: false
      },
      elements: {
        arc: {
           roundedCornersFor: 0
        },
        center: {
           // the longest text that could appear in the center
           maxText: '100%',
           text: user.percent,
           fontColor: '#8d88bd',
           fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
           fontStyle: 'normal',
           // fontSize: 12,
           // if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
           // if these are not specified either, we default to 1 and 256
           minFontSize: 1,
           maxFontSize: 24,
        }
     }
    }
};
const myChart = new Chart(ctx,config);

data = {
   labels:['1','2','3','4','5','6','7','8','9','10'],
datasets:[{
   label: 'Line',
   backgroundColor:"#992ed7",
   borderColor:"#992ed7",
   pointRadius:0,
   borderWidth: 2,
   fill:false,
  data: [0,1,3,2,5,7,3,6,5,9],
  tension: 0.6
}]
};
config={
type: 'line',
data: data,
options:{
   responsive:true,
  legend:{
      display: false
  },
  scales:{
   yAxes:[{
       display:false,
       
     ticks:{
       display:false
     }
   }],
   xAxes:[{
     ticks:{
       display:false
     }
   }]
  }
}
}
const ctxl=document.getElementById('myLineChart').getContext('2d');
const myLineChart = new Chart(ctxl,config);
}