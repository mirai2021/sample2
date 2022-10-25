$(function() {
  $(".slider01").slick({
    autoplay: true, // 自動再生
    fade: true, // スライドをフェードイン・フェードアウト
    autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    infinite: true, // 無限スライド
    speed: 2000, // フェードアニメーションの速度設定
  });


  $('.slider02').slick({
    
    responsive: [
      {
        breakpoint: 768, // 399px以下のサイズに適用
        settings: {
          dots:true,
          centerMode: true,// 前後スライドを部分表示
          centerPadding: '15%',// 両端の見切れるスライド幅
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.slider01').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider01').slick('slickPlay');
  });
});
