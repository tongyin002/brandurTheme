import React from "react";
import { Helmet } from "react-helmet";
import indexImg from "../images/large.jpg";

export default function About() {
  return (
    <div id="container" className="max-w-full">
      <Helmet
        bodyAttributes={{
          class: "font-default leading-outer antialiased align-baseline",
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <div className="flex flex-col md:flex-row">
        <section
          id="flag"
          className="hidden md:overflow-hidden md:w-px10 md: md:block"
        ></section>
        <div
          id="nav"
          className="h-24 order-4 w-21/25 my-px20 mx-2/25 md:ml-px40 md:mr-px10 md:mt-px150 md:mb-px50 md:w-px100 md:min-w-px100 md:order-none md:h-auto"
        >
          <div
            id="nav-inner"
            className="mx-auto text-center w-auto md:overflow-auto md:top-px50 md:sticky md:w-px100 md:mx-0"
          >
            <nav className="inline-block font-helvetica text-nav font-bold text-right uppercase md:block md:text-block">
              <ul className="list-none leading-navul mx-auto md:mx-0">
                <li className="float-left leading-navli mx-px5 md:mt-0 md:mb-px8 md:mx-0 md:float-none md:leading-none">
                  <a href="#" title="Home">
                    △
                  </a>
                </li>
                <li className="float-left leading-navli mx-px5 md:my-px8 md:mx-0 md:float-none md:leading-none">
                  <a href="#" title="Longform articles">
                    Articles
                  </a>
                </li>
                <li className="float-left leading-navli mx-px5 md:my-px8 md:mx-0 md:float-none md:leading-none">
                  <a href="#" title="Email newsletters I publish">
                    Newsletters
                  </a>
                </li>
                <li className="float-left leading-navli mx-px5 md:my-px8 md:mx-0 md:float-none md:leading-none">
                  <a href="#" title="Fragments (short articles)">
                    Fragments
                  </a>
                </li>
                <li className="float-left leading-navli mx-px5 md:my-px8 md:mx-0 md:float-none md:leading-none">
                  <a href="#" title="Photography">
                    Photos
                  </a>
                </li>
                <li className="float-left leading-navli mx-px5 md:my-px8 md:mx-0 md:float-none md:leading-none">
                  <a href="" title="What I'm doing now">
                    Now
                  </a>
                </li>
                <li className="float-left leading-navli mx-px5 md:my-px8 md:mx-0 md:float-none md:leading-none">
                  <a href="#" title="About me &amp; this site">
                    About
                  </a>
                </li>
                <li className="float-left leading-navli mx-px5 md:my-px8 md:mx-0 md:float-none md:leading-none">
                  <a href="#">
                    <span title="Sitemap">☰</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <section
          id="toc-index"
          className="hidden lg:min-w-px100 lg:w-px100 lg:mx-px10 lg:mt-px150 lg:mb-px50 lg:block"
        ></section>
        <section
          id="content"
          className="mx-2/25 w-21/25 overflow-hidden flex-1 md:m-px50"
        >
          <div
            id="content-inner-standard"
            className="max-w-full md:max-w-px550"
          >
            <div id="title">
              <h1 className="mt-px20 mb-px30 font-helvetica font-normal text-title tracking-xtight leading-navul md:text-xtitle">
                About
              </h1>
            </div>
            <div id="about">
              <p className="my-px20">
                <img
                  src={indexImg}
                  alt=""
                  className="max-w-full overflow-auto h-auto my-px20"
                />
              </p>
              <p className="my-px20">
                I&apos;m an engineer at Stripe where I help design, build, and
                run our API and maintain our public-facing developer tooling.
              </p>
              <p className="my-px20">
                I recently spent quite a few years at Heroku where I helped
                create our V3 API and refine and operate its central supporting
                services. I&apos;m still a strong believer that developers at
                every product company shouldn&apos;t be spending too much time
                thinking about infrastructure, and have access to a deployment
                mechanism as easy as <code>git push heroku master</code>.
              </p>
              <p className="my-px20">
                Having written software professionally for many years now,
                I&apos;m convinced that the default result given our modern
                processes and tools are products with undesirable levels of
                fragility. These days I&apos;m especially interested in ways to
                improve the robustness and longevity of software, and reduce
                toil in operating it. I have little doubt that powerfully
                type-safe languages which expose more problems at compile time
                are the future. Though nascent today, I think that soon the most
                pragmatic option will be Rust.
              </p>
              <p className="my-px20">
                My favorite movie is Sofia Coppola&apos;s{" "}
                <em>Lost in Translation</em>. My favorite book is Michael
                Crichton&apos;s <em>Rising Sun</em> (although I like{" "}
                <a href="#">a lot of others</a>). I also like running,
                photography, history, meditation, urban design, and metal.
              </p>
              <p className="my-px20">
                A few times a year I publish a newsletter called{" "}
                <em>Passages &amp; Glass</em>. If you liked some of the other
                content here, you should <a href="#">consider subscribing</a>.
              </p>
              <h2 className="text-2xl tracking-stight mt-px30 -mb-px10 font-helvetica font-normal">
                Technology
              </h2>
              <p className="my-px20">
                This site is a static set of HTML, JS, CSS, and image files
                built using a{" "}
                <a
                  href="https://github.com/brandur/sorg"
                  className="hvr-underline-to-center underline-black"
                >
                  custom Go executable
                </a>
                , stored on S3, and served by a number of worldwide edge
                locations by CloudFront to help ensure great performance around
                the globe. It&apos;s deployed automatically by CI as code lands
                in its master branch on GitHub. The architecture is based on the
                idea of{" "}
                <a
                  href="/aws-intrinsic-static"
                  className="hvr-underline-to-center underline-black"
                >
                  the Intrinsic Static Site
                </a>
                .
              </p>
              <p className="my-px20">
                It was previously running{" "}
                <a href="https://github.com/brandur/org">Ruby/Sinatra stack</a>,
                hosted on Heroku, and using CloudFlare as a CDN.
              </p>
              <h2 className="text-2xl tracking-stight mt-px30 -mb-px10 font-helvetica font-normal">
                Design
              </h2>
              <p className="my-px20">
                The responsive design aims to improve readability and emphasize
                content through typography, whitespace, and clean lines compared{" "}
                <a href="https://mutelight.org">
                  to earlier incarnations of my work
                </a>
                . It wouldn&apos;t have been possible without the timeless
                beauty of{" "}
                <a href="http://en.wikipedia.org/wiki/Helvetica_(film)">
                  Helvetica
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
