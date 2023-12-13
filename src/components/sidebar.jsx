import React from 'react';
import classNames from 'classnames';
import france from '../images/france-flag-circular-17753.svg';
import italy from '../images/italy-flag-circular-17751.svg';
import germany from '../images/germany-flag-circular-17755.svg';
import england from '../images/england-flag-circular-17767.svg';
import spain from '../images/spain-flag-circular-17884.svg';
import usa from '../images/usa-flag-circular-17882.svg';
import world from '../images/earth-globe-12154.svg';
import europe from '../images/european-union-flag-circular-17759.svg';
import saudi from '../images/united-arab-emirates-flag-circular-17754.svg';

const tournaments = [
  {
    title: 'National Championship',
    items: [
      {
        title: 'Premier League',
        icon: england,
      },
      {
        title: 'La Liga',
        icon: spain,
      },
      {
        title: 'MLS',
        icon: usa,
      },
      {
        title: 'Serie A',
        icon: italy,
      },
      {
        title: 'Bundesliga',
        icon: germany,
      },
      {
        title: 'Ligue 1',
        icon: france,
      },
    ],
  },
  {
    title: 'Cups',
    items: [
      {
        title: 'FIFA World Cup',
        icon: world,
      },
      {
        title: 'Champions League UEFA',
        icon: europe,
      },
      {
        title: 'UEFA Europa league',
        icon: europe,
      },
      {
        title: 'UAE League',
        icon: saudi,
      },
    ]
  },
  {
    title: 'Clubs',
    items: [
      {
        title: 'Real Madrid',
        icon: spain,
      },
      {
        title: 'Barcelona',
        icon: spain,
      },
      {
        title: 'Atletico Madrid',
        icon: spain,
      },
      {
        title: 'Inter Miami',
        icon: usa,
      },
      {
        title: 'Manchester United',
        icon: england,
      },
      {
        title: 'Manchester City',
        icon: england,
      },
      {
        title: 'Arsenal',
        icon: england,
      },
      {
        title: 'Liverpool',
        icon: england,
      },
      {
        title: 'Bayern Munich',
        icon: germany,
      },
      {
        title: 'Borussia Dortmund',
        icon: germany,
      },
      {
        title: 'Juventus',
        icon: italy,
      },
      {
        title: 'PSG',
        icon: france,
      },
      {
        title: 'Al-Nassr',
        icon: saudi,
      },
    ]
  },
]

export const Sidebar = ({ open }) => {
  return (
    <section
      className={classNames('sidebar', {
        'sidebar-hidden': !open
      })}
    >

      <div className="buttons mobile">
        <button className="button">
          Sing up
        </button>
        <button className="button">
          Login
        </button>
      </div>

      <div className="sidebar-content">
        {tournaments.map((tournament) => (
          <div className="sidebar-section">
            <p className="sidebar-title">{tournament.title}</p>
            {tournament.items.map((item) => (
              <div className="sidebar-item">
                <img src={item.icon} alt={item.title} className="sidebar-icon" />
                <p className="sidebar-name">{item.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

    </section>
  );
};
