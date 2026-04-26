import {
  ArrowRightLeft,
  BarChart3,
  Bell,
  Calendar,
  CheckCircle2,
  CircleDollarSign,
  Clock,
  History,
  MessageSquare,
  Phone,
  PhoneCall,
  Star,
  Target as TargetIcon,
  Timer,
  TrendingUp,
  UserPlus,
  Users,
} from 'lucide-react';

const ICON_SIZE = 18;

const SIDEBAR_ITEMS = [
  { id: 'lead-list', icon: Users, label: 'Lead List', count: 23 },
  { id: 'click-to-call', icon: PhoneCall, label: 'Click-to-Call' },
  { id: 'follow-ups', icon: Calendar, label: 'Follow-ups', count: 8 },
  { id: 'call-notes', icon: MessageSquare, label: 'Call Notes' },
  { id: 'transfer-leads', icon: ArrowRightLeft, label: 'Transfer Leads' },
  { id: 'onboarding', icon: UserPlus, label: 'Onboarding' },
  { id: 'payment-follow-up', icon: CircleDollarSign, label: 'Payment Follow-up', count: 5 },
  { id: 'call-history', icon: History, label: 'Call History' },
  { id: 'performance', icon: BarChart3, label: 'Performance', active: true },
];

const HERO_STATS = [
  { id: 'total-calls', label: 'Total Calls', value: '45', icon: Phone },
  { id: 'connected', label: 'Connected', value: '32', icon: PhoneCall },
  { id: 'interested', label: 'Interested', value: '12' },
  { id: 'follow-ups', label: 'Follow-Ups', value: '8', icon: Calendar },
  { id: 'converted', label: 'Converted', value: '3', icon: CheckCircle2 },
];

const BOTTOM_STATS = [
  {
    id: 'success-rate',
    icon: TrendingUp,
    iconClassName: 'text-green-600',
    label: 'Success Rate',
    value: '71%',
    sub: 'Connected vs Total',
    iconBg: 'bg-green-100',
  },
  {
    id: 'call-duration',
    icon: Timer,
    iconClassName: 'text-pink-600',
    label: 'Call Duration',
    value: '180 min',
    sub: 'Total Today',
    iconBg: 'bg-pink-100',
  },
  {
    id: 'conversion',
    icon: TargetIcon,
    iconClassName: 'text-orange-600',
    label: 'Conversion',
    value: '25%',
    sub: 'Interested to Closed',
    iconBg: 'bg-orange-100',
  },
  {
    id: 'rating',
    icon: Star,
    iconClassName: 'text-blue-600 fill-blue-600',
    label: 'Rating',
    value: '4.8',
    sub: 'Customer Feedback',
    iconBg: 'bg-blue-100',
    isRating: true,
  },
];

function App() {

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 lg:flex">
      <aside className="w-full border-b border-slate-200 bg-white py-4 lg:w-64 lg:border-r lg:border-b-0 lg:py-6">
        <div className="mb-4 flex items-center gap-2 px-4 sm:px-6 lg:mb-8">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <Phone className="text-white" size={24} />
          </div>
          <h1 className="text-lg font-bold text-indigo-900 sm:text-xl">Telecaller Dashboard</h1>
        </div>

        <div className="mb-3 px-4 sm:mb-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">Welcome, Priya Sharma</p>
        </div>

        <nav className="grid grid-cols-1 gap-1 px-2 pb-1 sm:grid-cols-2 lg:grid-cols-1 lg:px-0">
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarNavItem key={item.id} item={item} />
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <header className="mb-6 flex flex-wrap items-center justify-end gap-3 sm:gap-4 lg:mb-8 lg:gap-6">
          <div className="flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <span className="text-sm font-semibold">Active</span>
          </div>
          
          <div className="flex items-center gap-2 text-slate-500">
            <Clock size={18} />
            <span className="font-mono font-medium">15:44:27</span>
          </div>

          <div className="relative">
            <Bell size={20} className="text-slate-500" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              12
            </span>
          </div>

          <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
            P
          </div>
        </header>

        <section className="relative mb-6 overflow-hidden rounded-2xl bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 p-4 text-white shadow-xl sm:mb-8 sm:rounded-3xl sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="mb-1 text-xl font-bold sm:text-2xl">Today's Performance</h2>
              <p className="text-indigo-100 text-sm opacity-80">Thursday 27 November, 2025</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-xs uppercase opacity-80 tracking-wider">Target Progress</p>
              <p className="text-3xl font-black sm:text-4xl">64%</p>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {HERO_STATS.map((stat) => (
              <PerformanceStat key={stat.id} stat={stat} />
            ))}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span>Daily Target: 32 / 50 calls</span>
              <span>64%</span>
            </div>
            <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
              <div className="bg-white h-full rounded-full" style={{ width: '64%' }} />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {BOTTOM_STATS.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </section>
      </main>
    </div>
  );
}

const SidebarNavItem = ({ item }) => {
  const ItemIcon = item.icon;

  return (
    <button
      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition-colors sm:px-4 lg:rounded-none lg:px-6 lg:py-3 ${
        item.active
          ? 'text-indigo-600 bg-indigo-50 border-r-4 border-indigo-600'
          : 'text-slate-500 hover:bg-slate-50'
      }`}
      type="button"
    >
      <div className="flex items-center gap-3">
        <ItemIcon size={ICON_SIZE} />
        <span className="font-medium text-sm">{item.label}</span>
      </div>
      {item.count ? (
        <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
          {item.count}
        </span>
      ) : null}
    </button>
  );
};

const PerformanceStat = ({ stat }) => {
  const StatIcon = stat.icon;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md sm:p-4">
      <div className="flex items-center gap-2 mb-2 opacity-80">
        {StatIcon ? <StatIcon size={ICON_SIZE} /> : null}
        <span className="text-xs font-medium uppercase tracking-tight">{stat.label}</span>
      </div>
      <p className="text-2xl font-bold sm:text-3xl">{stat.value}</p>
    </div>
  );
};

const StatCard = ({ icon: Icon, iconClassName, label, value, sub, iconBg, isRating = false }) => (
  <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5 lg:p-6">
    <div className="flex items-center gap-3 mb-4">
      <div className={`${iconBg} p-2.5 rounded-xl`}>
        <Icon className={iconClassName} size={ICON_SIZE} />
      </div>
      <span className="text-slate-500 font-medium text-sm">{label}</span>
    </div>
    <div className="flex items-center gap-1">
      <h3 className="text-xl font-bold text-slate-800 sm:text-2xl">{value}</h3>
      {isRating ? <Star size={16} className="text-yellow-400 fill-yellow-400" /> : null}
    </div>
    <p className="text-slate-400 text-xs mt-1">{sub}</p>
  </div>
);

export default App;