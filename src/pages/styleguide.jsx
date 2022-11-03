import React, { useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/index.scss";
import "./styleguide.scss";

import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FontDemo = () => {
  React.useEffect(() => {
    const scrollableElements = document.querySelectorAll(".scrollable");

    let tmLine = gsap.timeline();

    gsap.utils.toArray(scrollableElements).forEach((element, index) => {
      tmLine.from(element, { opacity: 0 }, "+=0.5");
    });

    const colorBlockList = document.querySelectorAll(".color-block");

	  colorBlockList.forEach((block, index) => {
		 
		  const h3 = block.querySelector("div:nth-child(2) > h3");
		  const color = h3.innerHTML;
		  block.style.backgroundColor = color;
		  h3.style.color = color === '#FFFFFF' ? 'black' : 'grey';
    });
  }, []);
  return (
    <div>
      <Navbar />
      <main className="items-center">
        {/* style-guide  */}
        <div>
          <div className="scrollable style-guide relative">
            <div>
              <h1>Styleguide</h1>
            </div>
            <div className="h-auto relative whitespace-pre-wrap break-words w-[500px] text-center">
              <p>
                A reference guide for text styles, color palette and shadows.
              </p>
            </div>
          </div>
        </div>
        {/* font-list  */}
        <div className="py-10 flex items-center  justify-center flex-col gap-3">
          <div className="w-[600px] font-list scrollable flex flex-col items-start gap-5">
            <div>
              <h5 className="uppercase left-0 text-gray-500">Text styles</h5>
            </div>
            <div className="note">
              <p>Note</p>
              Any edits of the Text Styles will apply to all reflective elements
              across the site.
            </div>
            <div>
              <h1>Heading 1</h1>
            </div>
            <div>
              <h2>Heading 2</h2>
            </div>
            <div>
              <h3>Heading 3</h3>
            </div>
            <div>
              <h4>Heading 4</h4>
            </div>
            <div>
              <h5>Heading 5</h5>
            </div>
            <div>
              <h6>Heading 6</h6>
            </div>
            <div className="text-gray-500 flex gap-2.5 flex-col">
              <h5 className="text-base uppercase text-purple-600">Feature</h5>
              <p className="text-xs font-thin">Paragraph small</p>
              <p className="text-base font-thin">Paragraph standard</p>
              <p className="text-lg font-thin">Paragraph large</p>
            </div>
          </div>
        </div>
        {/* color-list */}
        <div className="py-10 flex items-center justify-center flex-col gap-3">
          <div className="w-[600px] scrollable color-list scrollable flex flex-col items-start gap-5">
            <div>
              <p>colors</p>
            </div>
            <div>
              <div>
                <div className="note">
                  <div>
                    <h3>Note</h3>
                  </div>
                  <div>
                    <p>
                      You can change colors in the Shared Colors found in the
                      property panel on the right side of the canvas. When you
                      update a shared color, it will update everywhere on your
                      canvas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="color-list-block-wrapper">
              <div className="color-block">
                <div>
                  <h3>Text Light</h3>
                </div>
                <div>
                  <h3>#8800FF</h3>
                </div>
              </div>
              <div className="color-block">
                <div>
                  <h3>Text Light</h3>
                </div>
                <div>
                  <h3>#1300FF</h3>
                </div>
              </div>
              <div className="color-block">
                <div>
                  <h3>Text Light</h3>
                </div>
                <div>
                  <h3>#8800FF</h3>
                </div>
              </div>
              <div className="color-block">
                <div>
                  <h3>Text Light</h3>
                </div>
                <div>
                  <h3>#7DEDAA</h3>
                </div>
              </div>
              <div className="color-block">
                <div>
                  <h3>Text Light</h3>
                </div>
                <div>
                  <h3>#F56687</h3>
                </div>
              </div>
              <div className="color-block">
                <div>
                  <h3>Text Light</h3>
                </div>
                <div>
                  <h3>#FDD963</h3>
                </div>
              </div>
              <div className="color-block">
                <div>
                  <h3>Text Light</h3>
                </div>
                <div>
                  <h3>#FFFFFF</h3>
                </div>
              </div>
              <div className="color-block">
                <div>
                  <h3>Text Light</h3>
                </div>
                <div>
                  <h3>#000000</h3>
                </div>
              </div>
              <div className="color-block">
                <div>
                  <h3>Text Light</h3>
                </div>
                <div>
                  <h3>#19154E</h3>
                </div>
              </div>
              <div className="color-block">
                <div>
                  <h3>Text Light</h3>
                </div>
                <div>
                  <h3>#5B5E76</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer extraStyles="footer scrollable" />
    </div>
  );
};

export default FontDemo;