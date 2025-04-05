import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import BookPickUp from "./pages/BookPickUp";
import VisitUs from "./pages/VisitUs";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Awareness from "./pages/Awareness";
import Volunteer from "./pages/Volunteer";


const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/awareness" element={<Awareness/>}/>
            <Route path="/volunteer" element={<Volunteer/>}/>
            <Route path="/services" element={<Services />} />
            <Route path="/book-pickup" element={
              <ErrorBoundary>
                <BookPickUp />
              </ErrorBoundary>
            } />
            <Route path="/visit-us" element={<VisitUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;