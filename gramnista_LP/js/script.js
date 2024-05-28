
// let windowSize = $(window).height(); //<- 画面の縦幅

// // スクロールされるたびに発火する
// $(window).scroll(function () {
//     // 以下の処理で、現在のスクロール位置を求める
//     let scrollPosition = $(this).scrollTop();
//     // .offset().topでその要素がある位置を求めます。
//     if (scrollPosition > $('.onayami--logo').offset().top - windowHeight) {
//         // スクロール位置がアニメーションしたい要素の位置を超えたタイミングで、発火！
//         $('onayami--logo').addClass('toUp , delay05 , duration01');
//     }
// });



$(window).scroll(function () {
    
    $('.toUp ,.toDown ,.leftUp ,.slideLeft ,.slideRight').each(function () {

            let scrollPosition = $(window).scrollTop();
            let windowHeight = $(window).height();
            let elementTopPosition = $(this).offset().top;

        if (scrollPosition + windowHeight > elementTopPosition) {
            $(this).addClass('show');
        }

    });
});