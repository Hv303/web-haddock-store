import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import "../style/CardsOwner.css"; // Import CSS untuk styling tambahan

function CardsOwner() {
  return (
    <div className="bg">
      <div className="cards-section container">
        <h2 className="section-title">Owner</h2>
        <div className="row justify-content-center">
          {/* Profile Card 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <article className="profile">
              <div className="profile-image">
                <img
                  src="https://cdn.discordapp.com/avatars/803283448243421274/66a1e363afc02d8b24a45e5e1fb6cdc7.png?size=4096&ignore=true"
                  alt="_ikn"
                />
              </div>
              <h2 className="profile-username">_ikn</h2>
              <small className="profile-user-handle">@_ikn</small>
              <p className="card-text"></p>
              <div className="profile-actions">
                <button className="btn btn--primary">Follow</button>
              </div>
              <div className="profile-links">
                <a href="#" className="link link--icon">
                <FontAwesomeIcon icon={faYoutube} className="icons"/>
                </a>
                <a href="#" className="link link--icon">
                <FontAwesomeIcon icon={faInstagram} className="icons"/>
                </a>
                <a href="#" className="link link--icon">
                 <FontAwesomeIcon icon={faDiscord} className="icons"/>
                </a>
              </div>
            </article>
          </div>

          {/* Profile Card 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <article className="profile">
              <div className="profile-image">
                <img
                  src="https://cdn.discordapp.com/avatars/961253890748203088/e301d7975043be65af2b54983b23ddc2.png?size=4096&ignore=true"
                  alt="rill_hv"
                />
              </div>
              <h2 className="profile-username">rill_hv</h2>
              <small className="profile-user-handle">@rill_hv</small>
              <p className="card-text"></p>
              <div className="profile-actions">
                <button className="btn btn--primary">Follow</button>
              </div>
              <div className="profile-links">
                <a href="#" className="link link--icon">
                <FontAwesomeIcon icon={faYoutube} className="icons"/>
                </a>
                <a href="#" className="link link--icon">
                <FontAwesomeIcon icon={faInstagram} className="icons"/>
                </a>
                <a href="#" className="link link--icon">
                 <FontAwesomeIcon icon={faDiscord} className="icons"/>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsOwner;
