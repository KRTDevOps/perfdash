import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Performancedashboard from './component/Performancedashboard';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-content">
        <Sidebar />
        <main className="app-main">
          <Performancedashboard />
        </main>
      </div>
    </div>
  );
}

export default App;