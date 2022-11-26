import { Link } from "gatsby";
import * as React from "react";
import gsap from "gsap";

const pillsAnimation = () => {
  gsap.to(".gsap-pills > div", {
    x: "-200px",
    repeat: -1,
    duration: 20,
    yoyo: true,
  });
};

const FractionSection = () => {
  React.useEffect(() => {
    pillsAnimation();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24 overflow-hidden">
      <div className="flex flex-col gap-4 items-center justify-center h-min max-w-[560px] text-white">
        <div>
          <p className="uppercase font-extrabold text-gray-300">
            Fraction template
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-white">Build a website that performs better.</h2>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <div className="flex item-center justify-center py-3 px-5 bg-white rounded-md">
            <Link to="/">
              <p className="text-[18px] text-gray-800 font-semibold">
                Use Template
              </p>
            </Link>
          </div>
          <div>
            <div
              className="py-3 px-5 rounded-md"
              style={{
                backgroundColor: "rgb(69, 18, 151)",
              }}
            >
              <p className="font-semibold">Watch Video</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white svg-h4-white">
        <div className="gsap-pills h-10 flex flex-row gap-4">
          <div
            className="rounded-[100px] flex flex-row items-center justify-center gap-4 py-2 px-4"
            style={{
              backgroundColor: "rgba(25, 21, 78, 0.2)",
            }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
              >
                <g
                  color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
                  weight="fill"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                </g>
              </svg>
            </div>
            <div>
              <h4>25+ Prebuilt Pages</h4>
            </div>
          </div>

          <div
            className="rounded-[100px] flex flex-row items-center justify-center gap-4 py-2 px-4"
            style={{
              backgroundColor: "rgba(25, 21, 78, 0.2)",
            }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
              >
                <g
                  color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
                  weight="fill"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                </g>
              </svg>
            </div>
            <div>
              <h4>60+ Sections</h4>
            </div>
          </div>

          <div
            className="rounded-[100px] flex flex-row items-center justify-center gap-4 py-2 px-4"
            style={{
              backgroundColor: "rgba(25, 21, 78, 0.2)",
            }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
              >
                <g
                  color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
                  weight="fill"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                </g>
              </svg>
            </div>
            <div>
              <h4>80 Design Assets</h4>
            </div>
          </div>

          <div
            className="rounded-[100px] flex flex-row items-center justify-center gap-4 py-2 px-4"
            style={{
              backgroundColor: "rgba(25, 21, 78, 0.2)",
            }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
              >
                <g
                  color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
                  weight="fill"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                </g>
              </svg>
            </div>
            <div>
              <h4>Optimized for SEO</h4>
            </div>
          </div>

          <div
            className="rounded-[100px] flex flex-row items-center justify-center gap-4 py-2 px-4"
            style={{
              backgroundColor: "rgba(25, 21, 78, 0.2)",
            }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
              >
                <g
                  color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
                  weight="fill"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                </g>
              </svg>
            </div>
            <div>
              <h4>Integrations</h4>
            </div>
          </div>

          <div
            className="rounded-[100px] flex flex-row items-center justify-center gap-4 py-2 px-4"
            style={{
              backgroundColor: "rgba(25, 21, 78, 0.2)",
            }}
          >
            <div data-projection-id="263">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
              >
                <g
                  color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
                  weight="fill"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                </g>
              </svg>
            </div>
            <div>
              <h4>CMS</h4>
            </div>
          </div>

          <div
            className="rounded-[100px] flex flex-row items-center justify-center gap-4 py-2 px-4"
            style={{
              backgroundColor: "rgba(25, 21, 78, 0.2)",
            }}
          >
            <div data-projection-id="270">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
              >
                <g
                  color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
                  weight="fill"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                </g>
              </svg>
            </div>
            <div>
              <h4>Animations &amp; Effects</h4>
            </div>
          </div>

          <div
            className="rounded-[100px] flex flex-row items-center justify-center gap-4 py-2 px-4"
            style={{
              backgroundColor: "rgba(25, 21, 78, 0.2)",
            }}
          >
            <div data-projection-id="278">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
              >
                <g
                  color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
                  weight="fill"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                </g>
              </svg>
            </div>
            <div>
              <h4>25+ Prebuilt Pages</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FractionSection;
