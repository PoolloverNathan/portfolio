const imgs = Array.from(document.getElementsByTagName("img"));

for (let img of imgs) {
  img.addEventListener("auxclick", (e) => {
  if (e && (e.which == 2 || e.button == 4 )) {
    img.requestFullscreen();
    e.preventDefault();
  }
  })
}

for (var i = shufCont.children.length; i >= 0; i--) {
    shufCont.appendChild(shufCont.children[Math.random() * i | 0]);
}