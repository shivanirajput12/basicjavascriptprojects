const carouselInner = document.querySelector('#carouselInner');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer =  document.querySelector('#dotsContainer');


//get all images
const slides =  document.querySelectorAll('.carousel-inner img');
const totalSlides = slides.length;

//current slide index
let currentIndex = 0;

//create dots dynamically
slides.forEach((_, index)=>{
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if(index === 0) dot.classList.add('active');
    //click on dots goes to that slide
    dot.addEventListener('click',()=>{
        goToSlide(index);
    })
    dotsContainer.appendChild(dot);
})

//Get all dots
const dots = document.querySelectorAll('.dot');

//function to update carousel position
function updateCarousel(){
    //move the carousel inner to show current slide
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;

    //update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

}


//go to specific slide
function goToSlide(index){
    currentIndex = index;
    updateCarousel();
}

//next slide 
function nextSlide(){
    currentIndex = (currentIndex + 1) % totalSlides; //loop back to 0
    updateCarousel();
}

//previous slide
function prevSlide(){
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; //loop back to last slide(loop to end)
    updateCarousel();
}

// event listeners for buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


//Auto-play 
let autoPlayInterval = setInterval(nextSlide, 3000); //change slide every 3 seconds

//pause on hover 
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

carousel.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(nextSlide, 3000);
});

//keyboard navigation
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowRight'){
        nextSlide();
    } else if(e.key === 'ArrowLeft'){
        prevSlide();
    }
});

//mobile swipe support
let startX = 0;

carousel.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        nextSlide(); // swipe left
    }

    if (endX - startX > 50) {
        prevSlide(); // swipe right
    }
});

// Optional: Add thumbnail navigation
const thumbnailContainer = document.querySelector('#thumbnailContainer');

slides.forEach((slide, index) => {
    const thumb = document.createElement('img');
    thumb.src = slide.src;
    thumb.classList.add('thumbnail');

    if(index === 0) thumb.classList.add('active');

    thumb.addEventListener('click', () => {
        goToSlide(index);
    });

    thumbnailContainer.appendChild(thumb);
});

// Update thumbnail active state
function updateCarousel(){
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
    });
}
