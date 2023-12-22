(function () {
  "use strict";

  let body = document.querySelector('body'),
    language = document.querySelectorAll('.language'),
    languageList = document.querySelectorAll('.language-list'),
    rotateArrow = document.querySelectorAll('.rotate'),
    sidebarBtn = document.querySelector('.sidebar-btn'),
    sidebar = document.querySelector('.sidebar'),
    typeOfCars = document.querySelectorAll('.type-of-cars'),
    card = document.querySelectorAll('.registration .card')
    // carDescription = document.querySelectorAll('.car-description')

  language.forEach(e => {
    e.addEventListener('click', () => {
      e.querySelector('.language-list').classList.toggle('d-none')
    })
  })

  languageList.forEach(e => {
    e.addEventListener('click', (e1) => {
      body.className = e1.target.innerText.toLowerCase()

      if (body.classList.contains('persion')) {
        rotateArrow.forEach(e2 => {
          e2.style.transform = 'rotateY(180deg)'
        })
      } else {
        rotateArrow.forEach(e2 => {
          e2.style.transform = 'rotateY(0deg)'
        })
      }
    })
  })

  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('d-none')
  })

  typeOfCars.forEach(e => {
    e.addEventListener('click', (e1) => {
      if (!e1.currentTarget.classList.contains('active')) {
        typeOfCars.forEach(e2 => {
          e2.classList.remove('active')
        })
        e1.currentTarget.classList.add('active')
      }
    })
  })

  new Swiper(".cars .swiper", {
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        centeredSlides: true,
      },
      500: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 5,
      },
    },
  });

  card.forEach(e=>{
    if(e.querySelector('.card-back').clientHeight > e.querySelector('.card-front').clientHeight) {
      e.style.minHeight = e.querySelector('.card-back').clientHeight + 'px'
      e.querySelector('.card-front').style.minHeight = e.querySelector('.card-back').clientHeight + 'px'
    }else {
      e.style.minHeight = e.querySelector('.card-front').clientHeight + 'px'
    }
  })

  $(function () {
    $(".twentytwenty-container").twentytwenty({
      default_offset_pct: 0.5, // How much of the before image is visible when the page loads
      orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
      before_label: 'January 2017', // Set a custom before label
      after_label: 'March 2017', // Set a custom after label
      no_overlay: true, //Do not show the overlay with before and after
      move_slider_on_hover: false, // Move slider on mouse hover?
      move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
      click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
    });
  });

  // carDescription.forEach(e =>{
  //   e.addEventListener('mouseenter',(e)=>{
  //     if (e.currentTarget.classList.contains('active')) {
  //       e.currentTarget.classList.remove('active')
  //     } else {
  //       carDescription.forEach(e =>{
  //         e.classList.remove('active')
  //       })

  //       e.currentTarget.classList.add('active')
  //     }

  //   })
  // })
  
  new Swiper(".news .swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }, 
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      576: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });


})()