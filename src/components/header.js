import * as React from "react"

import "./header.css"

const navlinks = [
  {
    text: "About",
    url: "#about",
  },
  {
    text: "Projects",
    url: "#project",
  },
  {
    text: "Contact",
    url: "#contact",
  },
]

const Header = () => (
  <>
    <header>
      <div className="header-con">
        <div className="link-con">
          <span>{/*siteTitle*/}</span>
          {navlinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <a href={link.url}>{link.text}</a>
              <span>{i < navlinks.length - 1 && <> / </> /* spacer */}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  </>
)

export default Header
