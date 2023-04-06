var imgList = document.querySelectorAll('.item img');     //doesn't work !!!
var lightBoxContainer = document.querySelector('.lightBoxContainer');
var lightBox = document.querySelector('.lightBox');
var exitBtn = document.querySelector('#exit');
var nextBtn = document.querySelector('#next');
var prevBtn = document.querySelector('#prev');

for (var i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener('click', function (e) {
        imgSrc = e.target.getAttribute('src');
        lightBox.style.backgroundImage = `url(${imgSrc})`;
        lightBoxContainer.classList.replace('d-none', 'd-flex');
    });
}
exitBtn.addEventListener('click', function () {
    lightBoxContainer.classList.replace('d-flex', 'd-none');
})
nextBtn.addEventListener('click', function () {
    //Don't know
})
prevBtn.addEventListener('click', function () {
    //Don't know
})