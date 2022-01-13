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
      const imgSrc = document.fullscreenElement.src;
      if (imgSrc.includes("placekitten")) {
        alert("Placeholder kittens cannot be downloaded at this time.");
        downloadA.remove()
      } else {
        const downloadA = document.createElement("a");
        const splitHref = (downloadA.href = imgSrc).split("/");
        const [name, ext] = splitHref[splitHref.length-1].split(".")
        downloadA.download = `NK-${name}#${Math.floor(Math.random() * 1000)}.${ext}`;
        window.requestAnimationFrame(() => {
          downloadA.click();
          downloadA.remove();
        });
      }
    }
  }
})