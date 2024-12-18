import React from 'react';
import '../styles/main.css';
import SideMenu from '../components/SideMenu';
import MainContent from '../components/MainContent';

const App = () => {
  return (
    <main className="flex bg-[#11141b] h-screen">
      <SideMenu />
      <MainContent />
    </main>
  );
};

export default App;
