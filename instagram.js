// I updated this script as the previous approach of trying to select and operate only on the current <video> element being looked at
// was in reality not working. In fact it had the problem that it kept referencing an already gone-off-screen video element, 
// having no effect on the current "focused" video element.
// My approch to fix it was to select and operate on all video elements at once. Not so elegant, but it works.

setTimeout(function keepRun() {
  setTimeout(keepRun, 1000);
   
  var arr = document.querySelectorAll('video');
  
  arr.forEach(function(videoel) {
    videoel.setAttribute("controls","controls");
    var containerel = videoel.parentElement.parentElement.parentElement.parentElement;
    if (containerel.children.length > 1) {
      containerel.removeChild(containerel.lastChild); 
    }
    
    // We also need to not displaying the img element right after <video>.
    // It can't just be deleted or there will be a cross-origin error
    videoel.nextSibling.style.display = 'none';
    
    // just a quick volume "fix" (better this way than always starting videos at full volume)
    videoel.volume = 0.07; 
    
  });
  
}, 1000);
