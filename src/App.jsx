import React, { useState, useEffect } from 'react';
import ProfileScreen from './components/ProfileScreen';
import TrainingListScreen from './components/TrainingListScreen';
import TrainingDetailScreen from './components/TrainingDetailScreen';
import './index.css';

function App() {
  // State initialization with localStorage persistence check would go here in a real app
  // For now, initializing with defaults
  const [activeScreen, setActiveScreen] = useState('profile'); // 'profile', 'list', 'detail'
  const [selectedTrainingId, setSelectedTrainingId] = useState(null);

  const [userBio, setUserBio] = useState(() => localStorage.getItem('userBio') || '');
  const [fontSize, setFontSize] = useState(() => parseFloat(localStorage.getItem('fontSize')) || 1);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('isDarkMode') === 'true');
  const [currentTheme, setCurrentTheme] = useState(() => localStorage.getItem('currentTheme') || '#E53935');

  // Apply Theme & Font Size Side Effects
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', currentTheme);
    localStorage.setItem('currentTheme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-multiplier', fontSize);
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('userBio', userBio);
  }, [userBio]);


  // Navigation Handlers
  const goHome = () => setActiveScreen('profile');
  const goToList = () => setActiveScreen('list');
  const goToDetail = (id) => {
    setSelectedTrainingId(id);
    setActiveScreen('detail');
  };

  // For this demo, we can toggle between Profile and List using a simple mechanism
  // The design shows a "Home" icon which presumably goes to a dashboard or profile.
  // The 'Profil' screen in the design seems to be the main settings/profile area.
  // The 'Eğitimlerim' list is another main section.

  // Let's add a bottom navigation or just a way to switch for testing.
  // The prompt implies we are building these specific screens. 
  // I will make the 'Profil' screen the default home.
  // And maybe add a button on the Profile screen to go to "Trainings" for demonstration flow,
  // OR, since the prompt asks for specific screens, I will provide a simple nav bar at bottom to switch between Profile and Trainings.

  const handleDeleteData = () => {
    if (confirm('Tüm verileri silmek istediğinize emin misiniz?')) {
      setUserBio('');
      setFontSize(1);
      setIsDarkMode(false);
      setCurrentTheme('#E53935');
      localStorage.clear();
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', paddingBottom: '60px' }}>

      {activeScreen === 'profile' && (
        <ProfileScreen
          userBio={userBio}
          setUserBio={setUserBio}
          fontSize={fontSize}
          setFontSize={setFontSize}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          onDeleteData={handleDeleteData}
        />
      )}

      {activeScreen === 'list' && (
        <TrainingListScreen
          onNavigate={goToDetail}
          onHomeClick={goHome}
        />
      )}

      {activeScreen === 'detail' && (
        <TrainingDetailScreen
          onBack={goToList}
          onHomeClick={goHome}
        />
      )}

      {/* Simple Bottom View Switcher for Demo Purposes */}
      {activeScreen !== 'detail' && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          backgroundColor: 'var(--card-bg)',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '10px'
        }}>
          <button
            onClick={() => setActiveScreen('profile')}
            style={{
              background: 'none',
              border: 'none',
              fontWeight: activeScreen === 'profile' ? 'bold' : 'normal',
              color: activeScreen === 'profile' ? 'var(--primary-color)' : 'var(--text-color)',
              cursor: 'pointer'
            }}
          >
            Profil
          </button>
          <button
            onClick={() => setActiveScreen('list')}
            style={{
              background: 'none',
              border: 'none',
              fontWeight: activeScreen === 'list' ? 'bold' : 'normal',
              color: activeScreen === 'list' ? 'var(--primary-color)' : 'var(--text-color)',
              cursor: 'pointer'
            }}
          >
            Eğitimlerim
          </button>
        </div>
      )}

    </div>
  );
}

export default App;
