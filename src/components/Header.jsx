import React from 'react';
import { Home } from 'lucide-react';

const Header = ({ title, onHomeClick }) => {
  return (
    <header style={{
      backgroundColor: 'var(--primary-color)',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <h1 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 500 }}>{title}</h1>
      <button 
        onClick={onHomeClick}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          padding: '4px'
        }}
      >
        <Home size={24} />
      </button>
    </header>
  );
};

export default Header;
