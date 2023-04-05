import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Galaxy from "../components/galaxy"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import profileImage from "../images/pfp.webp"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Galaxy></Galaxy>
    <h1 className={styles.titletext}>
      Hi! This is Jayson <span className={styles.wave}>👋</span>
    </h1>
    <div className={styles.galaxysource}>
      → How I made this interactive piece
    </div>
    <div className={styles.titlecaption}>
      <p>
        I am a UCLA student, software developer, artist, coffee barista, and
        neuroscience geek.
      </p>
    </div>
    <div
      className={styles.nextslide}
      onClick={() => {
        window.location.href = "#about"
      }}
    >
      <div>
        <p>Learn more</p>
        <p>↓</p>
      </div>
    </div>
    <div></div>
    <div
      className={styles.aboutcon}
      id="about"
      style={{
        height: `100vh`,
        paddingTop: `100px`,
        scrollSnapAlign: `start`,
      }}
    >
      <h1>About</h1>
      <div className={styles.flexcon}>
        <p>
          Hey there! I'm currently a first year student studying cognitive
          science and computer science at UCLA. I am specifically interested in
          exploring the intersection between machines, software, and human
          behaviour.
          <br></br>
          <br></br>I’m passionate about education, arts & culture, and
          entrepreneurship. In my downtime, I like to research, build, and
          create very questionable things that vary in subject matter – I write
          a blog, publish a webcomic, design neuroscience experiments, compose
          music, and I particularly enjoy developing apps (and websites like
          this). In addition, I'm a coffee and boba fanatic and a blossoming
          barista.
          <br></br>
          <br></br>
          Don't hesitate to reach out, I'm always down to chat! <br></br>(or
          discuss creative drink ideas!)
        </p>
        <img src={profileImage}></img>
      </div>
    </div>
    {/*
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text}
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}

     */}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
