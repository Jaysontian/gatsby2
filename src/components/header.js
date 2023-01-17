import * as React from "react"

import "./header.css"

const navlinks = [
  {
    text: "Home",
    url: "#home",
    id: 1,
  },
  {
    text: "About",
    url: "#about",
    id: 2,
  },
  {
    text: "Projects",
    url: "#project",
    id: 3,
  },
  {
    text: "Connect",
    url: "#contact",
    id: 4,
  },
]
const connectlinks = [
  {
    text: "Email",
    url: "mailto:jaysontian@ucla.edu",
    id: 5,
  },
  {
    text: "LinkedIn",
    url: "linkedIn.com/Jaysontian",
    id: 6,
  },
]

function activateLink(id) {
  var links = document.getElementsByClassName("link")
  var i
  for (i = 0; i < links.length; i++) {
    links[i].classList.remove("active")
  }
  document.getElementById(id).classList.add("active")
}

const Header = () => (
  <>
    <header>
      <div className="header-con">
        <div className="link-con">
          <span>{/*siteTitle*/}</span>
          {navlinks.map((link, i) => (
            <div id={link.id} key={link.id} className="link">
              <a
                href={link.url}
                onClick={() => {
                  activateLink(link.id)
                }}
              >
                {link.text}
              </a>
              <span>{i < navlinks.length - 1 && <> / </> /* spacer */}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  </>
)

export default Header
