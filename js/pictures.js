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
  return Math.floor(Math.random() * commentsArr.length); /* тут получаем рандомный индекс*/
}
for (var i=0; i < 25; i++) {
  picturesDescriptions[i] = {
  'url': 'photos/'+i+'.jpg',
  'likes': getRandomLike(15, 200), /* преобразовать к промежутку*/
  'comments': getRandomComment(),  /* преобразовать к промежутку*/
  } 
}

console.log(picturesDescriptions);


var picturesTemplate = document.getElementById('picture-template');
 for (var i=0; i < 25; i++) {
  var clonedNode = picturesTemplate.clone(true);
  clonedNode.querySelector('img').setAttribute('src', picturesDescriptions[i].url); /*заменяем src из img на url в объекте массива */
  clonedNode.querySelector('.picture-comments').textContent(picturesDescriptions[i].comments); /*и так с likes и comments */
  clonedNode.querySelector('.picture-likes').textContent(picturesDescriptions[i].likes);
}


var fragment = document.createDocumentFragment();
for (var i=0; i<25, i++) {
  fragment.appendChild(picturesDescriptions[i]);
}
div.pictures.appendChild(fragment);


var hideOverlay = document.querySelector('.upload-overlay');
hideOverlay.classList.add('invisible');


var showGalleryOverlay = document.querySelector('.gallery-overlay');
showGalleryOverlay.classList.remove('invisible');
for (var i=0; i < 25; i++) {
   document.querySelector('.gallery-overlay-image').setAttribute('src', picturesDescriptions[i].url);
   document.querySelector('.gallery-overlay-controls-like').textContent(picturesDescriptions[i].likes);
   document.querySelector('.gallery-overlay-controls-comments').textContent(picturesDescriptions[i].comments);
}
