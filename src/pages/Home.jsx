import "../styles/page-css/Home.css";
import { Helmet } from "react-helmet-async";
import logoFlipped from "../assets/logo-flipped.png";
import { NavLink } from "react-router-dom";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="home-container">
      <Helmet>
        <title>LyOPix Coding | Custom Web Solutions</title>
        <meta name="description" content="Building tools, sites, and experiments for developers—use them, explore the code, and see what's possible. Everything's open to try, tweak, and learn from." />
        <link rel="canonical" href="https://lyopix.com/" />
        <meta property="og:title" content="LyOPix Coding - Experiments For Developers To Use And Explore" />
        <meta property="og:description" content="Building tools, sites, and experiments for developers—use them, explore the code, and see what's possible. Everything's open to try, tweak, and learn from." />
        <meta property="og:url" content="https://lyopix.com/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="hero">
        <img src={logoFlipped} alt="LyOPix Logo" />
        <div>
          <h1>Hey, I'm LyOPix!</h1>
          <p>
            I'm a software developer specializing in tools and sites for
            developers. I'm always up to chat, you can contact me anytime if you
            have questions.
          </p>
          <NavLink className="button" to="/contact">
            Contact Me
          </NavLink>
        </div>
      </div>
      <div className="difference">
        <div className="difference-content">
          <h1>The LyOPix Way</h1>
          <div className="differencecards">
            <div className="differencecard">
              <h3>Built for Developers</h3>
              <p>
                All of LyOPix tools and sites were made for developers, by a
                developer.
              </p>
            </div>
            <div className="differencecard">
              <h3>Built for Learning</h3>
              <p>
                Every project is an experiment. They each started as an idea and
                turned into multiple ideas put into one project.
              </p>
            </div>
            <div className="differencecard">
              <h3>Built for Exploring</h3>
              <p>
                Everything is meant to be explored. Every line of code is built
                for your viewing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="latestsites">
        <div>
          <h1>Latest Sites</h1>
          <p>
            Here is a list of apps and sites that i have been experimenting on
            recently. Feel free to check out the tools and sites, and you can
            check the code too.
          </p>
        </div>
        <Carousel
          slides={[
            {
              content: (
                <Card
                  title="Hiii"
                  subtitle="Site"
                  content="How is everyone"
                  tags={["React.js", "Vue.js"]}
                />
              ),
            },
            {
              content: (
                <Card
                  title="Hiii"
                  subtitle="Tool"
                  content="How is everyone"
                  tags={["React.js", "Vue.js"]}
                />
              ),
            },
          ]}
          className="latestcarousel"
        />
      </div>
      <div className="latesttools">
        <Carousel
          slides={[
            {
              content: (
                <Card
                  title="Hiii"
                  subtitle="Tool"
                  content="How is everyone"
                  tags={["React.js", "Vue.js"]}
                />
              ),
            },
            {
              content: (
                <Card
                  title="Hiii"
                  subtitle="Tool"
                  content="How is everyone"
                  tags={["React.js", "Vue.js"]}
                />
              ),
            },
            {
              content: (
                <Card
                  title="Hiii"
                  subtitle="Tool"
                  content="How is everyone"
                  tags={["React.js", "Vue.js"]}
                />
              ),
            },
            {
              content: (
                <Card
                  title="Hiii"
                  subtitle="Tool"
                  content="How is everyone"
                  tags={["React.js", "Vue.js"]}
                />
              ),
            },
            {
              content: (
                <Card
                  title="Hiii"
                  subtitle="Tool"
                  content="How is everyone"
                  tags={["React.js", "Vue.js"]}
                />
              ),
            },
            {
              content: (
                <Card
                  title="Hiii"
                  subtitle="Tool"
                  content="How is everyone"
                  tags={["React.js", "Vue.js"]}
                />
              ),
            },
            {
              content: (
                <Card
                  title="Hiii"
                  subtitle="Tool"
                  content="How is everyone"
                  tags={["React.js", "Vue.js"]}
                />
              ),
            },
            {
              content: (
                <Card
                  title="Hiii"
                  subtitle="Tool"
                  content="How is everyone"
                  tags={["React.js", "Vue.js"]}
                />
              ),
            },
            {
              content: (
                <Card
                  title="Hiii"
                  subtitle="Tool"
                  content="How is everyone"
                  tags={["React.js", "Vue.js"]}
                />
              ),
            },
            {
              content: (
                <Card
                  title="Hiii"
                  subtitle="Tool"
                  content="How is everyone"
                  tags={["React.js", "Vue.js"]}
                />
              ),
            },
            {
              content: (
                <Card
                  title="Hiii"
                  subtitle="Tool"
                  content="How is everyone"
                  tags={["React.js", "Vue.js"]}
                />
              ),
            },
          ]}
        />
        <div>
          <h1>Latest Tools</h1>
          <p>
            This is a list of tools that i have made and expiremented on
            recently. Feel free to take a peek at the code, or the tool, or
            both!{" "}
          </p>
        </div>
      </div>
      <div className="quotes">
        <div className="quote-content">
          <span className="quote-mark open">"</span>
          <span className="quote">
            Programs must be written for people to read, and only incidentally
            for machines to execute.
          </span>
          <span className="quote-mark close">"</span>
          <div className="author">— Harold Abelson</div>
        </div>
      </div>
    </div>
  );
}