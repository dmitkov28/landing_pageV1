//smooth scroll

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1700
});


//modal
const button = document.querySelectorAll('.cta');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
const modalContent = document.querySelector('.modal');

button.forEach((button)=>{
   button.addEventListener('click', ()=>{
       modalBg.classList.add('modal-visible');
       document.querySelector('body').style.position = 'fixed';
       modalContent.style.animation = 'modalanimation 400ms ease-in';
   })
})

modalClose.addEventListener('click', ()=>{
    modalBg.classList.remove('modal-visible');
    document.querySelector('body').style.position = 'static';
    modalContent.style.animation = '';
})


//slider

new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '.dots',
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

 

