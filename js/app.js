//アコーディオンをクリックした時の動作
$('.acc_title').on('click', function () {//タイトル要素をクリックしたら
    var findElm = $(this).next(".acc_box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作

    if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去し
    } else {//それ以外は
        $(this).addClass('close');//クラス名closeを付与
    }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function () {
    $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
    $(".open").each(function (index, element) {	//openクラスを取得
        var Title = $(element).children('.acc_title');	//openクラスの子要素のtitleクラスを取得
        $(Title).addClass('close');				//タイトルにクラス名closeを付与し
        var Box = $(element).children('.acc_box');	//openクラスの子要素boxクラスを取得
        $(Box).slideDown(500);					//アコーディオンを開く
    });
});

var navPos = jQuery('#global-nav').offset().top; // グローバルメニューの位置
var navHeight = jQuery('#global-nav').outerHeight(); // グローバルメニューの高さ
jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > navPos) {
        jQuery('body').css('padding-top', navHeight);
        jQuery('#global-nav').addClass('m_fixed');
    } else {
        jQuery('body').css('padding-top', 0);
        jQuery('#global-nav').removeClass('m_fixed');
    }
});

$('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
});