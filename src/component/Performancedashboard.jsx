import {
  Calendar,
  CheckCircle2,
  Phone,
  PhoneCall,
  Star,
  Target as TargetIcon,
  Timer,
  TrendingUp,
} from 'lucide-react';
import './Performancedashboard.css';

const ICON_SIZE = 18;

const HERO_STATS = [
  { id: 'total-calls', label: 'Total calls', value: '45', icon: Phone },
  { id: 'connected', label: 'Connected', value: '32', icon: PhoneCall },
  { id: 'interested', label: 'Intersted', value: '12' },
  { id: 'follow-ups', label: 'Follow-Ups', value: '8', icon: Calendar },
  { id: 'converted', label: 'Converted', value: '3', icon: CheckCircle2 },
];

const BOTTOM_STATS = [
  {
    id: 'success-rate',
    icon: TrendingUp,
    iconClassName: 'performance-dashboard__card-icon-svg--success',
    label: 'Success Rate',
    value: '71%',
    sub: 'Connected vs Total',
    iconBg: 'performance-dashboard__card-icon--success',
  },
  {
    id: 'call-duration',
    icon: Timer,
    iconClassName: 'performance-dashboard__card-icon-svg--duration',
    label: 'Call Duration',
    value: '180 min',
    sub: 'Total Today',
    iconBg: 'performance-dashboard__card-icon--duration',
  },
  {
    id: 'conversion',
    icon: TargetIcon,
    iconClassName: 'performance-dashboard__card-icon-svg--conversion',
    label: 'Conversion',
    value: '25%',
    sub: 'Intersted to Closed',
    iconBg: 'performance-dashboard__card-icon--conversion',
  },
  {
    id: 'rating',
    icon: Star,
    iconClassName: 'performance-dashboard__card-icon-svg--rating',
    label: 'Rating',
    value: '4.8',
    sub: 'Customer Feedback',
    iconBg: 'performance-dashboard__card-icon--rating',
    isRating: true,
  },
];

function PerformanceStat({ stat }) {
  const StatIcon = stat.icon;

  return (
    <div className="performance-dashboard__stat">
      <div className="performance-dashboard__stat-head">
        {StatIcon ? <StatIcon size={ICON_SIZE} /> : null}
        <span className="performance-dashboard__stat-label">{stat.label}</span>
      </div>
      <p className="performance-dashboard__stat-value">{stat.value}</p>
    </div>
  );
}

function StatCard({ icon: Icon, iconClassName, label, value, sub, iconBg, isRating = false }) {
  return (
    <div className="performance-dashboard__card">
      <div className="performance-dashboard__card-head">
        <div className={`performance-dashboard__card-icon ${iconBg}`}>
          <Icon className={iconClassName} size={ICON_SIZE} />
        </div>
        <span className="performance-dashboard__card-label">{label}</span>
      </div>
      <div className="performance-dashboard__card-value-wrap">
        <h3 className="performance-dashboard__card-value">{value}</h3>
        {isRating ? <Star size={16} className="performance-dashboard__rating-star" /> : null}
      </div>
      <p className="performance-dashboard__card-sub">{sub}</p>
    </div>
  );
}

function Performancedashboard() {
  return (
    <>
      <section className="performance-dashboard__hero">
        <div className="performance-dashboard__hero-top">
          <div>
            <h2 className="performance-dashboard__hero-title">Today&apos;s Performance</h2>
            <p className="performance-dashboard__hero-date">Thursday 27 November, 2025</p>
          </div>
          <div className="performance-dashboard__hero-progress-wrap">
            <p className="performance-dashboard__hero-progress-label">Target Progress</p>
            <p className="performance-dashboard__hero-progress-value">64%</p>
          </div>
        </div>

        <div className="performance-dashboard__hero-stats-grid">
          {HERO_STATS.map((stat) => (
            <PerformanceStat key={stat.id} stat={stat} />
          ))}
        </div>

        <div className="performance-dashboard__hero-target">
          <div className="performance-dashboard__hero-target-row">
            <span>Daily Target: 32 / 50 calls</span>
            <span>64%</span>
          </div>
          <div className="performance-dashboard__hero-target-bar">
            <div className="performance-dashboard__hero-target-fill" style={{ width: '64%' }} />
          </div>
        </div>
      </section>

      <section className="performance-dashboard__cards-grid">
        {BOTTOM_STATS.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </section>
    </>
  );
}

export default Performancedashboard;
