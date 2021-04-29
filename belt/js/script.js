$(document).ready(function() {
  //slides
  $(".bestOffers__slider").slick();
  if (window.matchMedia("(max-width: 800px)").matches) {
    $(".popularGoods__items").slick({
      slidesToShow: 1,
      slidesToScroll: 1
    });
  } else {
    $(".popularGoods__items").slick({
      slidesToShow: 3,
      slidesToScroll: 1
    });
  }

  if (window.matchMedia("(max-width: 600px)").matches) {
    $(".brands__items").slick({
      slidesToShow: 1,
      slidesToScroll: 1
    });
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
    $(".brands__items").slick({
      slidesToShow: 2,
      slidesToScroll: 1
    });
  } else {
    $(".brands__items").slick({
      slidesToShow: 4,
      slidesToScroll: 1
    });
  }
  //tabs

  $(".faq__item").click(function() {
    $(this)
      .find(".faq__answer")
      .slideToggle({
        complete: function() {}
      });
    let isOpen = $(this)
      .find(".fa-plus")
      .css("display");
    if (isOpen == "block") {
      $(this)
        .find(".fa-plus")
        .hide();
      $(this)
        .find(".fa-minus")
        .fadeIn();
    } else {
      $(this)
        .find(".fa-minus")
        .hide();
      $(this)
        .find(".fa-plus")
        .fadeIn();
    }
  });
});

//catalog menu

$(".catalog-open").click(function() {
  $(".catalog").slideToggle();
  $(this).hide();
  $(".catalog-close").show();
});
$(".catalog-close").click(function() {
  $(".catalog").slideToggle();
  $(this).hide();
  $(".catalog-open").show();
});

$(".catalog__items")
  .not($(".catalog__items").eq(0))
  .hide();
$(document).ready(function() {
  touchHover();
});
if (window.matchMedia("(max-width: 800px)").matches) {
  $(".catalog__down").on("touchstart", function() {
    $(".catalog__items").hide();
    let id = $(this).index(".catalog__down");
    $(".catalog__items")
      .eq(id)
      .fadeIn();
  });
} else {
  $(".catalog__funct").hover(function() {
    $(".catalog__items").hide();
    let id = $(this).index(".catalog__funct");
    $(".catalog__items")
      .eq(id)
      .show();
  });
}
// main menu
$(".main__menu-2")
  .find(".main__arrow")
  .hide();

$(".main__menu-3")
  .parent(".main__menu-2")
  .find(".main__arrow")
  .show();

$(".main__menu-3")
  .find(".main__arrow")
  .hide();

$(".main__menu-4")
  .parent(".main__menu-3")
  .find(".main__arrow")
  .show();

$(".main__open-item")
  .find(".fa-chevron-down")
  .eq(0)
  .toggleClass("main__open-chevron");

$(".main__arrow-1").click(function() {
  $(this)
    .parent(".main__funct")
    .parent("li")
    .find(".main__menu-2")
    .slideToggle();
  $(this)
    .find(".fa-chevron-down")
    .toggleClass("main__open-chevron");
});

$(".main__arrow-2").click(function() {
  $(this)
    .parent("li")
    .parent(".main__menu-2")
    .find(".main__menu-3")
    .slideToggle();
  $(this)
    .find(".fa-chevron-down")
    .toggleClass("main__open-chevron");
});

$(".main__arrow-3").click(function() {
  $(this)
    .parent("li")
    .parent(".main__menu-3")
    .find(".main__menu-4")
    .slideToggle();
  $(this)
    .find(".fa-chevron-down")
    .toggleClass("main__open-chevron");
});

//grid
$(".main__lines").click(function() {
  $(".item").addClass("item-2");
  $(".item-img").addClass("item-img-2");
  $(".item-brand").addClass("item-brand-2");
  $(".item-price").addClass("item-price-2");
  $(".item-btn").addClass("item-btn-2");
  $(".items").addClass("items-2");
  $(".item-info").show();
  $(".item-nal").show();
});
$(".main__grid").click(function() {
  $(".item").removeClass("item-2");
  $(".item-img").removeClass("item-img-2");
  $(".item-brand").removeClass("item-brand-2");
  $(".item-price").removeClass("item-price-2");
  $(".item-btn").removeClass("item-btn-2");
  $(".items").removeClass("items-2");
  $(".item-info").hide();
  $(".item-nal").hide();
});

//anchor
$('a[href^="#"]').click(function() {
  let anchor = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(anchor).offset().top
    },
    600
  );
});
