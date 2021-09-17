export default function Scroll(id, block) {
    document.getElementById(id).scrollIntoView({ //https://www.javascripttutorial.net/javascript-dom/javascript-scrollintoview/
      behavior: "smooth",
      block: block ? block : "nearest"
    })
  }