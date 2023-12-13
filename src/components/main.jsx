import React from 'react';
import classNames from 'classnames';
import epl from '../images/EPL_Manager_Of_The_Season_(1).webp';
import cr from '../images/GOAL_-_Blank_WEB_-_Facebook_(1).webp';
import ars from '../images/Loane_Arsenal.webp';
import city from '../images/Lauren_Hemp_Manchester_City_2023-24_(2).webp';

export const Main = ({ open }) => {
  return (
    <section className={classNames('main', { 'main-hidden': open })}>
      <div className="news">
        <div className="news-main">
          <div className="image-container">
            <img src={epl} alt="managers" className="news-photo" />
            <p className="image-description">
              EPL Managers
            </p>
          </div>
          <p className="news-title">
            EPL Manager of the Season: Emery up to No.1; Ten Hag slides
          </p>
        </div>
        <div className="news-container">
          <div className="news-minor">
            <img src={cr} alt="cr7" className="news-photo" />
            <p className="news-title">
              CR7 brings up half-century as Al-Nassr reach King Cup semis
            </p>
          </div>
          <div className="news-minor">
            <img src={ars} alt="arsenal" className="news-photo" />
            <p className="news-title">
              Arsenal loanees: More misery for Tierney as Okonkwo shines
            </p>
          </div>
          <div className="news-minor">
            <img src={city} alt="man city" className="news-photo" />
            <p className="news-title">
              Lionesses star Hemp keeping Man City’s WSL title hopes alive
            </p>
          </div>

          <a className="news-all">See All Breaking News -></a>
        </div>
      </div>


      <p className="main-title">FIXTURES & RESULTS</p>

      <div className="matches">
        <p className="matches-date">WEDNESDAY 29 NOVEMBER</p>
        <div className="match">
          <p>Real Sociedad</p>
          <p>0 - 0</p>
          <p>Salzburg</p>
        </div>
        <div className="match">
          <p>Benfica</p>
          <p>3 - 3</p>
          <p>Inter</p>
        </div>
        <div className="match">
          <p>Real Madrid</p>
          <p>5 - 2</p>
          <p>Union</p>
        </div>
        <p className="matches-date">TUESDAY 12 DECEMBER</p>
        <div className="match">
          <p>Lens</p>
          <p>19:45</p>
          <p>Sevilla</p>
        </div>
        <div className="match">
          <p>PSV</p>
          <p>19:45</p>
          <p>Arsenal</p>
        </div>
        <div className="match">
          <p>Man United</p>
          <p>22:00</p>
          <p>Bayern Munich</p>
        </div>
      </div>

      <div className="read">
        <p className="read-title">MOST READ</p>
        <div className="read-container">
          <div className="read-item">
            <p className="read-number">1</p>
            <p className="read-text">Explained: Why Bayern would pay €100m Kane fee...</p>
          </div>
          <div className="read-item">
            <p className="read-number">2</p>
            <p className="read-text">'Can’t continue' – Rooney responds to Birmingham...</p>
          </div>
          <div className="read-item">
            <p className="read-number">3</p>
            <p className="read-text">WSL's first married couple Turner & James open up on...</p>
          </div>
          <div className="read-item">
            <p className="read-number">4</p>
            <p className="read-text">Meaningless trophies & no PL record: Wrong move by Kane?</p>
          </div>
          <div className="read-item">
            <p className="read-number">5</p>
            <p className="read-text">WATCH: Mourinho sends tactical note to Patricio via...</p>
          </div>
          <div className="read-item">
            <p className="read-number">6</p>
            <p className="read-text">The Last Dance is happening! Date set for Messi vs Ronaldo</p>
          </div>
        </div>
      </div>
    </section>
  );
};
