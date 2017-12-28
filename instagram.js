setTimeout(function keepRun() {
  setTimeout(keepRun, 1000);
  
  var a = document.querySelector('video');

  if(a) {
    a.setAttribute("controls","controls");
    var el = a.parentElement.parentElement.parentElement.parentElement
    if (el.children.length > 1) {
      el.removeChild(el.children[1]);
      el.removeChild(el.children[1]);
    }
  }
}, 1000);