import React, { Suspense } from 'react';
import './App.css';

const Hero = React.lazy(() => import('./components/Hero.js'));
const Sidebar = React.lazy( () => import('./components/Sidebar.js'))
const News = React.lazy( () => import('./components/News.js'))
const Footer = React.lazy( () => import('./components/Footer.js'))

function App() {
  return (
    <div>
      <Suspense fallback={
        <div className=" flex justify-center items-center mt-8">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
        </div>  
      }>
        <div className="lg:flex">  
          <Hero />
          <Sidebar />
        </div>
        <News />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
