'use strict';

 var picturesDescriptions = [];
 var commentsArr = [
 'Все отлично',
 'В целом всё неплохо. Но не всё',
 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально',
 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
 ]
var getRandomLike = function(min, max) {
  return Math.floor(Math.random() * (max-min+1)) + min;
};
var getRandomComment = function() {
  var indexArr = Math.floor(Math.random() * commentsArr.length);
  return commentsArr[indexArr]; // тут получаем рандомный индекс
}
for (var i=0; i < 25; i++) {
  picturesDescriptions[i] = {
  'url': 'photos/'+(i+1)+'.jpg',
  'likes': getRandomLike(15, 200), // преобразовать к промежутку
  'comments': getRandomComment(),  // преобразовать к промежутку
  }
}




var picturesTemplate = document.getElementById('picture-template').content;
var fragment = document.createDocumentFragment();
 for (var i=0; i < 25; i++) {
  var clonedNode = picturesTemplate.cloneNode(true);
  clonedNode.querySelector('img').setAttribute('src', picturesDescriptions[i].url); //заменяем src из img на url в объекте массива
  clonedNode.querySelector('.picture-comments').textContent = picturesDescriptions[i].comments.length; //и так с likes и comments
  clonedNode.querySelector('.picture-likes').textContent = picturesDescriptions[i].likes;
  fragment.appendChild(clonedNode);
}

 document.querySelector('.pictures').appendChild(fragment);

//4
var hideOverlay = document.querySelector('.upload-overlay');
hideOverlay.classList.add('invisible');

// 5
var showGalleryOverlay = document.querySelector('.gallery-overlay');
showGalleryOverlay.classList.remove('invisible');

   document.querySelector('.gallery-overlay-image').setAttribute('src', picturesDescriptions[0].url);
   document.querySelector('.gallery-overlay-controls-like').textContent = picturesDescriptions[0].likes;
   document.querySelector('.gallery-overlay-controls-comments').textContent = picturesDescriptions[0].comments;



// 2 задание

/*picturesTemplate.addEvent Listener('click', functin(event) {
  event.preventDefault();
  showGalleryOverlay.classList.remove('invisible');
}); */
var openPictures = document.querySelector('.pictures');
  openPictures.addEventListener('click', function(event) {
   event.preventDefault();
   var target = event.target;
   if (target.className = 'picture') {
   showGalleryOverlay.classList.remove('invisible');
   }
  });

var closePicture = document.querySelector('.gallery-overlay-close');
  closePicture.addEventListener('click', function(event) {
  event.preventDefault();
  showGalleryOverlay.classList.add('invisible');
});

document.addEventListener('keydown', function(event){
  if (event.keyCode === 27) {
  showGalleryOverlay.classList.add('invisible');
}
});
/*
var ENTER_KEY_CODE = 13;
var isActivationEvent === ENTER_KEY_CODE;
*/

/*
var hideUploadForm = document.querySelector('.upload-form-cancel');
var uploadOverlay = document.querySelector('.upload-overlay');
hideUploadForm.addEventListener('click', function (event) {
  event.preventDefault();
  uploadOverlay.classList.add('upload-overlay-close');
});*/

// 3 задание
