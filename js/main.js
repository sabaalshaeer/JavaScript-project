// get slider items / Array.form 
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

//get number of sliders
var slidesCount = sliderImages.length;

//set current slide
var currentSlide = 1;

//slide number element
var slideNumberElement = document.getElementById('slide-number');

//previous and next buttons
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');

//handle click on previous and next buttons
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

//create the main UL element
var paginationElement = document.createElement('ul');

//set id on created ul element
paginationElement.setAttribute('id', 'pagination-ul');

//create list items based on slides count
for (var i = 1; i<= slidesCount ; i++) {
    //create the li
    var paginationItem = document.createElement('li');

    //set custom attribute
    paginationItem.setAttribute('data-index', i);

    //set item content
    paginationItem.appendChild(document.createTextNode(i));

    //append items to the mail ul list
    paginationElement.appendChild(paginationItem);

}

//add the created UL element to the page 
document.getElementById('indicators').appendChild(paginationElement);

//get the new created ul
var paginationCreatedUl = document.getElementById('pagination-ul');

// get Pagination items / Array.form 
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

//loop through all bullets items
for (var i = 0; i < paginationsBullets.length; i++) {

    paginationsBullets[i].onclick = function () {
  
        currentSlide = parseInt(this.getAttribute('data-index'));
  
        theChecker();
  
    }
  
  }

//trigger the checker function
theChecker();

// previous slide function
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        //Do nothing
        return false;
    }else {
        currentSlide--;
        theChecker();
    }
}
// next slide function
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        //Do nothing
        return false;
    }else {
        currentSlide++;
        theChecker();
    }
}

//create the checker function
function theChecker() {

    //set the slide number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    //remove all active classes
    removeAllAction()

    //set active classs on current slide
    sliderImages[currentSlide - 1].classList.add('active');

    //set active class on current pagination item
    paginationCreatedUl.children[currentSlide -1].classList.add('active');

    //check if current slide is the first
    if (currentSlide == 1) {

        //add disable class on previous button
        prevButton.classList.add('disabled');

    }else {

        //remove disable class from previous button
        prevButton.classList.remove('disabled');
    }

    //check if current slide is the last
    if (currentSlide == slidesCount) {

        //add disable class on next button
        nextButton.classList.add('disabled');

    }else {

        //remove disable class from next button
        nextButton.classList.remove('disabled');
    }

}

//remove all active class from images and pagination bullets
function removeAllAction() {

    //loop through images
    sliderImages.forEach(function (img) {
        img.classList.remove('active');

    });

    //loop through pagination bullets
    paginationsBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    });

}