import {DESKTOP_HEIGHT, OVERLAYS} from '../../src/js/variables';
let overlayContent1 = document.querySelector('.overlay1');
let overlayContent2 = document.querySelector('.overlay2');
let overlayContent3 = document.querySelector('.overlay3');
let centralContent = document.querySelector('.central-content');
if (window.innerWidth < DESKTOP_HEIGHT) {
    overlayContent1.classList.add('invisible');
}
let closeModals = function () {
    if (window.innerWidth < DESKTOP_HEIGHT) {
        overlayContent1.classList.add('invisible');
    }
    overlayContent2.classList.add('invisible');
    overlayContent3.classList.add('invisible');
    centralContent.classList.remove('blur');
    overlayContent1.classList.remove('overlay-modal');
    overlayContent2.classList.remove('overlay-modal');
    overlayContent3.classList.remove('overlay-modal');
    overlayContent1.classList.remove('blur');
}
let buttonItemBurger = document.querySelector('.item-burger');
buttonItemBurger.addEventListener('click', function() {
    centralContent.classList.add('blur');
    overlayContent1.classList.add('overlay-modal');
    overlayContent1.classList.remove('invisible');
});
let buttonItemChat = document.querySelectorAll('.item-chat');
for (let i = 0; i < buttonItemChat.length; i++) {
    buttonItemChat[i].addEventListener('click', function() {
        closeModals();
        centralContent.classList.add('blur');
        overlayContent2.classList.add('overlay-modal');
        overlayContent2.classList.remove('invisible');
        overlayContent1.classList.add('blur');
    });
}
let buttonItemCall = document.querySelectorAll('.item-call');
for (let i = 0; i < buttonItemCall.length; i++) {
    buttonItemCall[i].addEventListener('click', function() {
        closeModals();
        centralContent.classList.add('blur');
        overlayContent3.classList.add('overlay-modal');
        overlayContent3.classList.remove('invisible');
        overlayContent1.classList.add('blur');
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

