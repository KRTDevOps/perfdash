import { Bell, Clock, Phone } from 'lucide-react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__brand-icon-wrap">
          <Phone className="header__brand-icon" size={22} />
        </div>
        <div className="header__brand-copy">
          <h1 className="header__brand-title">Telecaller Dashboard</h1>
          <p className="header__brand-subtitle">Welcome, Priya Sharma</p>
        </div>
      </div>

      <div className="header__actions">
        <div className="header__status">
          <div className="header__status-dot" />
          <span className="header__status-text">Active</span>
        </div>

        <div className="header__time">
          <Clock size={18} />
          <span className="header__time-value">15:44:27</span>
        </div>

        <div className="header__notification">
          <Bell size={20} className="header__notification-icon" />
          <span className="header__notification-badge">
            12
          </span>
        </div>

        <div className="header__avatar">
          P
        </div>
      </div>
    </header>
  );
}

export default Header;
