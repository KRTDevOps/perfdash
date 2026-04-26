import {
  ArrowRightLeft,
  BarChart3,
  Calendar,
  CircleDollarSign,
  History,
  MessageSquare,
  PhoneCall,
  UserPlus,
  Users,
} from 'lucide-react';
import './Sidebar.css';

const ICON_SIZE = 18;

const SIDEBAR_ITEMS = [
  { id: 'lead-list', icon: Users, label: 'Lead List', count: 23, countTone: 'blue' },
  { id: 'click-to-call', icon: PhoneCall, label: 'Click-to-Call' },
  { id: 'follow-ups', icon: Calendar, label: 'Follow-ups', count: 8, countTone: 'purple' },
  { id: 'call-notes', icon: MessageSquare, label: 'Call Notes' },
  { id: 'transfer-leads', icon: ArrowRightLeft, label: 'Transfer Leads' },
  { id: 'onboarding', icon: UserPlus, label: 'Onboarding' },
  { id: 'payment-follow-up', icon: CircleDollarSign, label: 'Payment Follow-up', count: 5, countTone: 'green' },
  { id: 'call-history', icon: History, label: 'Call History' },
  { id: 'performance', icon: BarChart3, label: 'Performance', active: true },
];

function SidebarNavItem({ item }) {
  const ItemIcon = item.icon;

  return (
    <button
      className={`sidebar__nav-item ${item.active ? 'sidebar__nav-item--active' : 'sidebar__nav-item--idle'}`}
      type="button"
    >
      <div className="sidebar__nav-item-content">
        <span className="sidebar__nav-item-icon-wrap">
          <ItemIcon className="sidebar__nav-item-icon" size={ICON_SIZE - 3} />
        </span>
        <span className="sidebar__nav-item-label">{item.label}</span>
      </div>
      {item.count ? (
        <span className={`sidebar__nav-item-count sidebar__nav-item-count--${item.countTone || 'blue'}`}>
          {item.count}
        </span>
      ) : null}
    </button>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarNavItem key={item.id} item={item} />
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
