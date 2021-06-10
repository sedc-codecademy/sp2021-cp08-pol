$(document).ready(function (e) {

  /*=== Main Page Card Carosel ==*/
  $("#recipeCarousel").carousel({
    interval: 8000,
  });

  $(".carousel .carousel-item").each(function () {
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next.children(":first-child").clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(":first");
      }

      next.children(":first-child").clone().appendTo($(this));
    }
  });

  /*=== Search bar ==*/
  $(".search-panel .dropdown-menu")
    .find("a")
    .click(function (e) {
      e.preventDefault();
      var param = $(this).attr("href").replace("#", "");
      var concept = $(this).text();
      $(".search-panel span#search_concept").text(concept);
      $(".input-group #search_param").val(param);
    });

// Sticky navbar
/*
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  */
  /*==== Start Sing up Page ===*/

  let switchCtn = document.querySelector("#switch-cnt");
  let switchC1 = document.querySelector("#switch-c1");
  let switchC2 = document.querySelector("#switch-c2");
  let switchCircle = document.querySelectorAll(".switch__circle");
  let switchBtn = document.querySelectorAll(".switch-btn");
  let aContainer = document.querySelector("#a-container");
  let bContainer = document.querySelector("#b-container");
  let allButtons = document.querySelectorAll(".submit");

  let getButtons = (e) => e.preventDefault();

  let changeForm = (e) => {
    switchCtn.classList.add("is-gx");
    setTimeout(function () {
      switchCtn.classList.remove("is-gx");
    }, 1500);

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
  };

  let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
      allButtons[i].addEventListener("click", getButtons);
    for (var i = 0; i < switchBtn.length; i++)
      switchBtn[i].addEventListener("click", changeForm);
  };

  window.addEventListener("load", mainF);

  /*==== End Sing up Page ===*/
});
