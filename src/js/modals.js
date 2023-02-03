import {DESKTOP_HEIGHT, OVERLAYS} from '../../src/js/variables';
let overlaySideContent = document.querySelector('.overlaySideContent');
let overlayFeedback = document.querySelector('.overlayFeedback');
let overlayCall = document.querySelector('.overlayCall');
let centralContent = document.querySelector('.central-content');
if (window.innerWidth < DESKTOP_HEIGHT) {
    overlaySideContent.classList.add('invisible');
}
let closeModals = function () {
    if (window.innerWidth < DESKTOP_HEIGHT) {
        overlaySideContent.classList.add('invisible');
    }
    overlayFeedback.classList.add('invisible');
    overlayCall.classList.add('invisible');
    centralContent.classList.remove('blur');
    overlaySideContent.classList.remove('overlay-modal');
    overlayFeedback.classList.remove('overlay-modal');
    overlayCall.classList.remove('overlay-modal');
    overlaySideContent.classList.remove('blur');
}
let buttonItemBurger = document.querySelector('.item-burger');
buttonItemBurger.addEventListener('click', function() {
    centralContent.classList.add('blur');
    overlaySideContent.classList.add('overlay-modal');
    overlaySideContent.classList.remove('invisible');
});
let buttonItemChat = document.querySelectorAll('.item-chat');
for (let i = 0; i < buttonItemChat.length; i++) {
    buttonItemChat[i].addEventListener('click', function() {
        closeModals();
        centralContent.classList.add('blur');
        overlayFeedback.classList.add('overlay-modal');
        overlayFeedback.classList.remove('invisible');
        overlaySideContent.classList.add('blur');
    });
}
let buttonItemCall = document.querySelectorAll('.item-call');
for (let i = 0; i < buttonItemCall.length; i++) {
    buttonItemCall[i].addEventListener('click', function() {
        closeModals();
        centralContent.classList.add('blur');
        overlayCall.classList.add('overlay-modal');
        overlayCall.classList.remove('invisible');
        overlaySideContent.classList.add('blur');
    });
}
let closeSideContent = document.querySelectorAll('.item-close');
for (let i = 0; i < closeSideContent.length; i++) {
    closeSideContent[i].addEventListener('click', function () {
        closeModals();
    });
}
window.addEventListener('click', function(evt) {
  console.log(evt.target);
  let clickedElement = evt.target.classList[0]
  if (OVERLAYS.includes(clickedElement)) {
    closeModals();
  }
});

