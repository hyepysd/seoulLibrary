$(function(){
    setInterval(slide,3000);
    
    function slide(){
        $('.slideImg ul').stop().animate({marginTop:-600},1000,slideNext);
    }
    
    function slideNext(){
        $('.slideImg ul li').eq(0).appendTo('.slideImg ul')
        $('.slideImg ul').stop().animate({marginTop:0},0);
    }
}) // 메인슬라이드
    
$(function(){
    $('.lnb li').mouseover(function(){
        $('.subM').stop().slideDown(300);
        $('.navBg').stop().slideDown(250);
    }).mouseout(function(){
        $('.subM').stop().slideUp(300);
        $('.navBg').stop().slideUp(300);
    })
}); // 메뉴

$(function(){
    setInterval(slide,3000);
    
    function slide(){
        $('.notice_left ul').stop().animate({marginTop:-20},1000,slideNext);
        $('.notice_right ul').stop().animate({marginTop:-20},1000,slideNext);
    }
    
    function slideNext(){
        $('.notice_left ul li').eq(0).appendTo('.notice_left ul')
        $('.notice_left ul').stop().animate({marginTop:0},0);
        $('.notice_right ul li').eq(0).appendTo('.notice_right ul')
        $('.notice_right ul').stop().animate({marginTop:0},0);
    }
}) // 공지사항슬라이드

$(document).ready(function () {
    $('.regular').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4, // 몇개 보이게 할건지
        slidesToScroll: 4 // 몇개씩 넘어가게 할건지
        });
}); // 책 슬라이드