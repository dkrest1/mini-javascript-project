// select all element with key class from the dom
const keys = document.querySelectorAll('.key');
const keysArray = Array.from(keys);



// eventlistener on window
window.addEventListener('keydown', playSolfa);
// eventlistener on keyArray
keysArray.forEach(key => {
    key.addEventListener('transitionend', endAnimation)
})


// play solfa
function playSolfa(e) {
    // get audio from the dom
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // get key from the dom
    const key =  document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return; //prevent other keys from playing

    audio.currentTime = 0;

    // add and element playing for animation
    key.classList.toggle('playing')

    audio.play()

}

// end animation 
function endAnimation(e) {
 if(e.propertyName !== 'border-bottom-width' && e.propertyName !== 'border-top-width' && e.propertyName !== 'border-right-width') return;
  e.target.classList.remove('playing')

}


