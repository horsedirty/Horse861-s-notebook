import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LandingPage } from './components/LandingPage';
import { COURSE_CHAPTERS as ROBOTICS_CHAPTERS } from './constants';
import { MAO_ZHONG_TE_CHAPTERS } from './constants_maozhongte';
import { MAO_ZHONG_TE_QUIZ } from './constants_maozhongte_quiz';

type View = 'home' | 'robotics' | 'maozhongte';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  if (currentView === 'home') {
    return <LandingPage onEnterCourse={(courseId) => setCurrentView(courseId)} />;
  }

  if (currentView === 'robotics') {
    return (
      <Dashboard 
        title="Robotics Pro" 
        chapters={ROBOTICS_CHAPTERS} 
        onBack={() => setCurrentView('home')} 
      />
    );
  }

  if (currentView === 'maozhongte') {
    return (
      <Dashboard 
        title="毛中特概论" 
        chapters={MAO_ZHONG_TE_CHAPTERS}
        quizChapters={MAO_ZHONG_TE_QUIZ}
        onBack={() => setCurrentView('home')}
        themeColor="text-red-500" 
      />
    );
  }

  return null;
}

export default App;