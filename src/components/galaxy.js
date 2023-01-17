import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import layer1 from "../images/layer1.jpg"
import layer2 from "../images/layer2.png"
import layer3 from "../images/layer3.png"
import layer4 from "../images/layer4.png"
import layer5 from "../images/layer5.png"

import "./galaxy.css"

const Galaxy = () => (
  <div className="galaxy-wrapper">
    <div className="galaxy-con">
      <div className="galaxy-frame">
        <img src={layer1} />
        <img src={layer2} data-speed="6" className="layer" />
        <img src={layer3} data-speed="-5" className="layer screen" />
        <img src={layer4} data-speed="12" className="layer" />
        <img src={layer5} className="lighten" />
      </div>
    </div>
  </div>
)

if (typeof document !== `undefined`) {
  document.addEventListener("mousemove", parallax)
  document.addEventListener("mouseleave", restore)
  function parallax(e) {
    this.querySelectorAll(".layer").forEach(layer => {
      var speed = layer.getAttribute("data-speed")
      var x = (window.innerWidth - e.pageX * speed) / 100
      var y = (window.innerHeight - e.pageY * speed) / 100
      //console.log(x, y)

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  }
  function restore() {
    this.querySelectorAll(".layer").forEach(layer => {
      layer.transition = "transform 0.6s ease-in-out"
      layer.style.transform = `translateX(0px) translateY(0px)`
    })
  }
}

export default Galaxy
