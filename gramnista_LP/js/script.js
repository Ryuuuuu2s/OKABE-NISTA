
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


$(document).ready(function () {
    $("#form").validate({
        rules: {
            name: {
                required: true,
            },
            hiragana: {
                required: true,
            },
            tel: {
                required:true,
                // required: false,   
            },
            mail: {
                required: true,
                email: true,
            },
            xt: {
                required: true,
            },
            agreement: {
                required: true
            },
        },
        messages: {
            name: {
                required: "お名前を入力してください"
            },
            hiragana: {
                required: "ふりがなを入力してください"
            },
            tel: {
                required:"電話番号を入力してください",
                number: "電話番号を正しく入力してください"
            },
            mail: {
                required: "メールアドレスを入力してください",
                email: "メールアドレスを正しく入力してください"
            },
            xt: {
                required: "お問い合わせ内容を入力してください"
            },
            agreement: {
                required: "プライバシーポリシーに同意してください"
            }

        },

        

        errorClass: "err",
        errorElement: "p",
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());
        },
    })

});

