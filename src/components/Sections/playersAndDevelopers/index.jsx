import React from "react";
import { Link } from "gatsby";
import "./styles.scss";

const PlayersAndDevelopers = () => {
  return (
    <section className="player-dev-container">
      <div className="card-group inner-container">
        <div className="card player">
          <div className="card-head">Players Play On</div>
          <div className="card-content">
            <p>Intrusive and poor-quality ads lower the gaming experience.</p>
            <div className="divider"></div>
            <p>
              Upzyde’s goal is to empower gamers with the gaming first approach.
            </p>

            <div className="divider"></div>
            <p>
              We encourage an in-game ad experience that doesn’t disrupt the
              gameplay.
            </p>

            <div className="cta">
              <Link to="/advertisers">
                <button className="btn">Learn More</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card developer">
          <div className="card-head">Developers are the new-gen kingmakers</div>
          <div className="card-content">
            <p>
              Get inspired with Upzyde’s advanced tech and generate high
              revenues with non-intrusive in-game advertising.
            </p>
            <div className="divider"></div>
            <p>
              Opt for native ad placements that don’t disrupt the gaming
              experience but enhance it.
            </p>

            <div className="divider"></div>
            <p>Monetize your game and create reliable income streams now.</p>
            <div className="cta">
              <Link to="/developers">
                <button className="btn">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayersAndDevelopers;
