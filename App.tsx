import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LandingPage } from './components/LandingPage';

type View = 'home' | 'robotics';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  if (currentView === 'home') {
    return <LandingPage onEnterCourse={() => setCurrentView('robotics')} />;
  }

  return (
    <Dashboard onBack={() => setCurrentView('home')} />
  );
}

export default App;