import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

const Hero = React.lazy(() => import("./components/Hero.js"));
const News = React.lazy(() => import("./components/News.js"));
const Footer = React.lazy(() => import("./components/Footer.js"));
const Blogpost = React.lazy(() => import("./components/Blogpost.js"));
const Reports = React.lazy(() => import("./components/Reports.js"));

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className=" flex justify-center items-center mt-8">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
          </div>
        }
      >
        <Header />
        <Hero />
        <Routes>
          <Route>
            <Route index element={<News />} />
            <Route path="news" element={<News />} />
            <Route path="blog" element={<Blogpost />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
