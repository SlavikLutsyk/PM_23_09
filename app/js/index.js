$(function(){
  var arrow_profile=$('.show-hide');
  var path_profile=$('.show-hide path');
  var dropdown_profile=$('.dropdown-profile');
  var arrow_main=$('.show-hide-main');
  var path_main=$('.show-hide-main path');
  var dropdown_main=$('.dropdown-main');
  var arrow_tools=$('.show-hide-tools');
  var path_tools=$('.show-hide-tools path');
  var dropdown_tools=$('.dropdown-tools');
  var arrow_info=$('.show-hide-info');
  var path_info=$('.show-hide-info path');
  var dropdown_info=$('.dropdown-info');
  var arrow_channels=$('.show-hide-channels');
  var path_channels=$('.show-hide-channels path');
  var dropdown_channels=$('.dropdown-channels');
  var up='bi-chevron-up';
  var down='bi-chevron-down';
  var d_up='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z';
  var d_down='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z';
  var footer=$('.sidebar-footer');
  arrow_profile.click(function(){
    dropdown_profile.slideToggle(500,function(){
      if(arrow_profile.hasClass(up)){
        footer.css('margin-top','+=205px');
        arrow_profile.removeClass(up).addClass(down);
        path_profile.attr("d",d_down);
      }
      else{
        footer.css('margin-top','-=205px');
        arrow_profile.removeClass(down).addClass(up);
        path_profile.attr("d",d_up);
      }
    });
  });

  arrow_main.click(function(){
    dropdown_main.slideToggle(500,function(){
      if(arrow_main.hasClass(up)){
        footer.css('margin-top','+=34.4px');
        arrow_main.removeClass(up).addClass(down);
        path_main.attr("d",d_down);
      }
      else{
        footer.css('margin-top','-=34.4px');
        dropdown_main.css('display','block');
        arrow_main.removeClass(down).addClass(up);
        path_main.attr("d",d_up);
      }
    });
  });

  arrow_tools.click(function(){
    dropdown_tools.slideToggle(500,function(){
      if(arrow_tools.hasClass(up)){
        footer.css('margin-top','+=34.4px');
        arrow_tools.removeClass(up).addClass(down);
        path_tools.attr("d",d_down);
      }
      else{
        footer.css('margin-top','-=34.4px');
        dropdown_tools.css('display','block');
        arrow_tools.removeClass(down).addClass(up);
        path_tools.attr("d",d_up);
      }
    });
  });

  arrow_info.click(function(){
    dropdown_info.slideToggle(500,function(){
      if(arrow_info.hasClass(up)){
        footer.css('margin-top','+=34.4px');
        arrow_info.removeClass(up).addClass(down);
        path_info.attr("d",d_down);
      }
      else{
        footer.css('margin-top','-=34.4px');
        dropdown_info.css('display','block');
        arrow_info.removeClass(down).addClass(up);
        path_info.attr("d",d_up);
      }
    });
  });

  arrow_channels.click(function(){
    dropdown_channels.slideToggle(500,function(){
      if(arrow_channels.hasClass(up)){
        footer.css('margin-top','+=34.4px');
        arrow_channels.removeClass(up).addClass(down);
        path_channels.attr("d",d_down);
      }
      else{
        footer.css('margin-top','-=34.4px');
        dropdown_channels.css('display','block');
        arrow_channels.removeClass(down).addClass(up);
        path_channels.attr("d",d_up);
      }
    });
  });
  setTimeout(function(){
    //alert("Hnativ invite you to lesson.");
    var alert = $('.alert');
    var lesson = $('.lesson');
    alert.css('visibility','visible');
    setTimeout(function(){
      lesson.fadeIn(500,function(){
      $('.lesson-request-num').text('(1)');
      lesson.css('display','inline-flex');
      lesson.mouseup(function(){
        location.replace('https://meet.google.com/vrt-dged-atg');
      });
    });
    },2000);
  },5000);
})

$(document).mouseup(function(){
//  var sort = $('#sort');
//  var all = $('.all-sort');
  var footer = $('.sidebar-footer');
//  sort.change(function(){
//   console.log(sort.prop('selectedIndex'));
//   if(sort.prop('selectedIndex') == 1){
//      all.fadeOut(200);
//     //  setTimeout(function(){
//     //   footer.css('margin-top','-=46px');
//     //  },100);
//   } 
//   else{
//      all.fadeIn(200);
//     //  setTimeout(function(){
//     //   footer.css('margin-top','+=46px');
//     //  },100);
//   }
//  });

 var friendDaryna = $('.main-sidebar-Daryna');
 var confirmDaryna = $('.confirm-Daryna');
 var friendNastya = $('.main-sidebar-Nastya');
 var confirmNastya = $('.confirm-Nastya');
 var numRequest = $('.request-num');
 var countReq = 2;
 var checksvg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>'
 confirmDaryna.click(function(){
  confirmDaryna.text('Friend added'); 
  confirmDaryna.append(checksvg);
  setTimeout(function(){
    friendDaryna.fadeOut(500,function(){
      numRequest.text(--countReq);
    });
  },1000);
 });
 confirmNastya.click(function(){
  confirmNastya.text('Friend added'); 
  confirmNastya.append(checksvg);
  setTimeout(function(){
    friendNastya.fadeOut(500,function(){
      countReq-=1;
      numRequest.text(0);
    });
  },1000);
 });

 var like = $('.inter-like');
 var like_counter = $('.inter-like-span span');
 var like_Bodya = $('.inter-Bodya-like');
 var like_counter_Bodya = $('.inter-Bodya-like-span span');
 var interLikeNum = 499;
 var BodyaLikeNum = 705;
 like.click(function(){
   if(like.hasClass('red-like')){
     like.removeClass('red-like');
     like.addClass('grey-like');
     like.attr('fill','#9a98ab');
     //interLikeNum -=1;
     like_counter.text(499);
   }
   else if(like.hasClass('grey-like')){
     like.removeClass('grey-like');
     like.addClass('red-like');
     like.attr('fill','#c6697f');
     //interLikeNum +=1;
     like_counter.text(500);
   }
 });

 like_Bodya.click(function(){
   if(like_Bodya.hasClass('red-like')){
     like_Bodya.removeClass('red-like');
     like_Bodya.addClass('grey-like');
     like_Bodya.attr('fill','#9a98ab');
     //BodyaLikeNum -=1;
     like_counter_Bodya.text(705);
   }
   else if(like_Bodya.hasClass('grey-like')){
     like_Bodya.removeClass('grey-like');
     like_Bodya.addClass('red-like');
     like_Bodya.attr('fill','#c6697f');
     //BodyaLikeNum +=1;
     like_counter_Bodya.text(706);
   }
 });

 var comment = $('.tweet-friend-comment textarea');
 var comment_button = $('.tweet-friend-comment svg');
 var comment_div = $('.tweet-friend-comments');
 var com_num = $('.comment-num');
 var count_com = 0;
 comment_button.click(function(){
  console.log(comment.val());
  if(comment.val()){
    comment_div.append( '<div class="mycomment">' + comment.val() + '</div>');
    com_num.text(++count_com);
    comment.val('');
    footer.css('margin-top', '+=38.5px');
  }
 })
})