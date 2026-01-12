import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Moon, Sun, Book } from 'lucide-react';
import { COURSE_CHAPTERS } from '../constants';
import { ChapterCard } from './ChapterCard';

export const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeChapter, setActiveChapter] = useState(COURSE_CHAPTERS[0].id);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Scroll spy to update active chapter
  useEffect(() => {
    const handleScroll = () => {
      const chapters = COURSE_CHAPTERS.map(c => document.getElementById(c.id));
      const scrollPosition = window.scrollY + 150; // Offset

      for (let i = chapters.length - 1; i >= 0; i--) {
        const section = chapters[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveChapter(COURSE_CHAPTERS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredChapters = COURSE_CHAPTERS.filter(ch => 
    ch.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    ch.keyPoints.some(kp => 
      kp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      kp.sections.some(s => s.text.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );

  return (
    <div className="min-h-screen font-sans selection:bg-[#0071e3] selection:text-white">
      {/* Navbar (Mobile) */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-white/80 dark:bg-[#1D1D1F]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 px-4 py-3 flex items-center justify-between">
        <span className="font-semibold text-lg tracking-tight">Robotics Pro</span>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div className="flex">
        {/* Sidebar (Desktop + Mobile Drawer) */}
        <aside className={`
          fixed inset-y-0 left-0 z-40 w-72 bg-[#F5F5F7]/90 dark:bg-[#000000]/90 backdrop-blur-xl border-r border-gray-200 dark:border-white/10
          transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) md:translate-x-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="h-full flex flex-col p-6">
            <div className="hidden md:flex items-center gap-2 mb-10 px-2">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black">
                <Book size={18} strokeWidth={3} />
              </div>
              <span className="text-xl font-bold tracking-tight">Robotics Pro</span>
            </div>

            <div className="mb-6 relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-white dark:bg-[#1C1C1E] rounded-xl py-2 pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-[#0071e3]/50 transition-all shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <nav className="flex-1 overflow-y-auto space-y-1 pr-2 no-scrollbar">
              {COURSE_CHAPTERS.map((ch) => (
                <a
                  key={ch.id}
                  href={`#${ch.id}`}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                    ${activeChapter === ch.id 
                      ? 'bg-white dark:bg-[#1C1C1E] text-[#0071e3] shadow-sm' 
                      : 'text-gray-500 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'}
                  `}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-5 text-center text-xs font-bold opacity-60`}>0{ch.number}</span>
                    {ch.title.split(' ')[0]}
                  </span>
                  {activeChapter === ch.id && <div className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-white/10">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-[#1C1C1E] transition-all"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:pl-72 w-full">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 py-20 md:py-12">
            
            {/* Hero Section */}
            <div className="mb-16 md:mb-24 text-center md:text-left animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Robotics <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071e3] to-[#40a0ff]">
                  Exam Review
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
                Comprehensive notes covering Kinematics, Dynamics, and SLAM. 
                Featuring detailed mathematical derivations and core concepts.
              </p>
            </div>

            {/* Chapters Feed */}
            <div className="space-y-12">
              {filteredChapters.map((chapter) => (
                <ChapterCard key={chapter.id} chapter={chapter} />
              ))}
              
              {filteredChapters.length === 0 && (
                <div className="py-20 text-center">
                  <p className="text-gray-400 text-lg">No topics found matching your search.</p>
                </div>
              )}
            </div>

            <footer className="mt-24 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-gray-400 text-sm">
              <p>Designed for Robotics Course Exam Preparation.</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};