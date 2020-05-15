import React from "react";
import { Helmet } from "react-helmet";
import LayouWhite from "../components/layoutWhite";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export default function Now() {
  const data = useStaticQuery(graphql`
    query GetNow {
      file(relativePath: { eq: "metaInfo/now.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, quality: 100, webpQuality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
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
      <LayouWhite>
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
                What I&apos;m Doing Now
              </h1>
            </div>
            <div id="about">
              <p className="my-px20">
                <Img fluid={data.file.childImageSharp.fluid}></Img>
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
      </LayouWhite>
    </>
  );
}
