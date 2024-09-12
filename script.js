
// For header 

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

// for window scroll 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

}


window.onload = () =>{
  if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
  }else{
      document.querySelector('.header').classList.remove('active');
  }
}

// for home pages 

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  });

//   for feature section 

var swiper = new Swiper(".feature-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });


  //   for trainers section 

var swiper = new Swiper(".trainer-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

    //   for blogs section 

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 20,
  loop:true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// Get elements
let openSignupBtn = document.getElementById('open-signup-btn');
let signupModal = document.getElementById('signup-modal');
let closeSignupBtn = document.getElementById('close-signup-btn');

// Open the modal when the "Become a Member" button is clicked
openSignupBtn.onclick = () => {
  signupModal.style.display = 'flex';
};

// Close the modal when the "X" button is clicked
closeSignupBtn.onclick = () => {
  signupModal.style.display = 'none';
};

// Close the modal when clicking outside the modal content
window.onclick = (e) => {
  if (e.target == signupModal) {
    signupModal.style.display = 'none';
  }
};

// Form validation (same as before)
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value.trim();
  let confirmPassword = document.getElementById('confirm-password').value.trim();

  // Validate name
  if (name === "") {
    alert("Please enter your name");
    return;
  }

  // Validate email
  if (!validateEmail(email)) {
    alert("Please enter a valid email");
    return;
  }

  // Validate password and confirm password
  if (password === "" || password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // If all validations pass
  alert("Signup successful");
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}