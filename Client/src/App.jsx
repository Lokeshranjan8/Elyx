


import './index.css';
import Header from './Header';
import Dashboard from './Dashboard';
import Communication from './Communication';
import Profile from './Profile';
import Metrics from './Metrics';
import Footer from './Footer';
import { useState } from 'react';

const TABS = [
  { name: 'Dashboard', component: <Dashboard /> },
  { name: 'Communication', component: <Communication /> },
  { name: 'Profile', component: <Profile /> },
  { name: 'Metrics', component: <Metrics /> },
];

function App() {
  const [selectedTab, setSelectedTab] = useState('Dashboard');

  const CurrentComponent = TABS.find(tab => tab.name === selectedTab)?.component;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-200 flex flex-col">
        <div className="max-w-5xl mx-auto pt-10 pb-16 w-full">
          <nav className="mb-8 flex gap-4 justify-center">
            {TABS.map(tab => (
              <button
                key={tab.name}
                className={`px-6 py-2 rounded-xl font-bold shadow transition-all backdrop-blur-lg border-2 ${selectedTab === tab.name ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-purple-400 scale-105' : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-50 hover:scale-105'}`}
                onClick={() => setSelectedTab(tab.name)}
              >
                {tab.name}
              </button>
            ))}
          </nav>
          <div className="rounded-2xl shadow-xl p-8 bg-white/80 backdrop-blur-lg border border-purple-100">
            {CurrentComponent}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
