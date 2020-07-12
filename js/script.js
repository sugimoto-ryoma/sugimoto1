$(function () {




    $('.btn').click(function () {
        //$('#gnav').slideToggle(700,"swing");
        $('.gnav-right').slideToggle(700, "swing");
        $('.gnav-left').slideToggle(700, "swing");
        // $('.gnav-right').toggleClass('show');
        $('.btn').toggleClass('is-active');
    });

    $("gnav ul a").click(function () {
        $("#gnav").slideToggle();
        $("btn").removeClass("is-active")
    })

    

});


$('.QA-list').on('click', function () {
    var $answer = $(this).siblings('.A');
    if ($answer.hasClass('open')) {
        $answer.removeClass('open');

        $answer.slideUp(200);


        $(this).find('i').addClass('.fa fa-chevron-down').removeClass('.fa fa-chevron-up');

    } else {
        $answer.addClass('open');

        $answer.slideDown(200);


        $(this).find('i').addClass('.fa fa-chevron-up');
    }
});

$(function(){
    var effect_pos = -150; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
});

 $(function () {
  $('.animation').css('visibility', 'hidden');
  $(window).scroll(function () {
    var windowHeight = $(window).height(),
      topWindow = $(window).scrollTop();
    $('.animation').each(function () {
      var targetPosition = $(this).offset().top;
      if (topWindow > targetPosition - windowHeight + 100) {
        $(this).addClass("fadeInDown");
      }
    });
  });

  $('.animation2').css('visibility', 'hidden');
  $(window).scroll(function () {
    var windowHeight = $(window).height(),
      topWindow = $(window).scrollTop();
    $('.animation2').each(function () {
      var targetPosition = $(this).offset().top;
      if (topWindow > targetPosition - windowHeight + 100) {
        $(this).addClass("rotate");
      }
    });
  });

});
