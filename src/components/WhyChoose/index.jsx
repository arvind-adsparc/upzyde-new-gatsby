import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const WhyChoose = () => {
  return (
    <section className="choose-container ">
      <div className="inner-container">
        <h2>
          Why Choose Upzyde’s <span>In-Game Monetization</span>{" "}
          <span>Solution?</span>{" "}
        </h2>

        <div className="content">
          <div className="card">
            <div className="card-img">
              <StaticImage
                src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655095285/Upzyde/why_choose_upzyde_bg-icon-W-1_wco63e.webp"
                alt=""
                placeholder="none"
                width={60}
              />
            </div>

            <div className="card-txt">
              <div className="txt-head">Solution Specific</div>
              <div className="txt-para">
                Non-disruptive. <span>Blend native ad</span> formats
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <StaticImage
                src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655095283/Upzyde/why_choose_upzyde_bg-icon-W-2_aqwqyp.webp"
                alt=""
                placeholder="none"
                width={60}
              />
            </div>

            <div className="card-txt">
              <div className="txt-head">Monetize More</div>
              <div className="txt-para">
                Higher revenue with a non-intrusive monetization solution.
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <StaticImage
                src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655095281/Upzyde/why_choose_upzyde_bg-icon-W-3_uvyt4a.webp"
                alt=""
                placeholder="none"
                width={60}
              />
            </div>

            <div className="card-txt">
              <div className="txt-head">Adaptive Approach</div>
              <div className="txt-para">
                Post Relevant Ad Messaging. Reach your audience in real-time
                with first-party data updates & data signals.
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <StaticImage
                src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655095280/Upzyde/why_choose_upzyde_bg-icon-W-4_sm7jna.webp"
                alt=""
                placeholder="none"
                width={60}
              />
            </div>

            <div className="card-txt">
              <div className="txt-head">Realistic Retention</div>
              <div className="txt-para">
                Enhance realism in the gaming world via real-world ad campaigns
                and enjoy higher retention.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <StaticImage
                src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655095279/Upzyde/why_choose_upzyde_bg-icon-W-5_fwvjx8.webp"
                alt=""
                placeholder="none"
                width={60}
              />
            </div>

            <div className="card-txt">
              <div className="txt-head">Tech Advancement</div>
              <div className="txt-para">
                Earn more with the most advanced in-game ad tech. Maximize the
                value of every impression.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
