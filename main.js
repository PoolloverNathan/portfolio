const imgs = Array.from(document.getElementsByTagName("img"));

for (let img of imgs) {
  img.addEventListener("contextmenu", (e) => {
    img.requestFullscreen();
    img.focus();
    e.preventDefault();
  })
}

for (var i = shufCont.children.length; i >= 0; i--) {
  shufCont.appendChild(shufCont.children[Math.random() * i | 0]);
}

for (let inj of document.getElementsByClassName("inject-placekitten")) {
  inj.src = `https://placekitten.com/g/300/200?date=${Date.now()}&rand=${Math.random()}`
}

document.addEventListener("keydown", e => {
  if (e.key == "s" && e.ctrlKey) {
    if (document.fullscreenElement instanceof HTMLImageElement) {
      e.preventDefault();
      const downloadA = document.createElement("a");
      downloadA.href = downloadA.download = document.fullscreenElement.src;
      if (downloadA.href.includes("placekiteen")) {
        alert("Placeholder kittens cannot be downloaded at this time.")
      } else {
        window.requestAnimationFrame(() => {
          downloadA.click();
          downloadA.remove();
        });
      }
    }
  }
})