import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Services from "./components/Services";
import KeyFeatures from "./components/KeyFeatures";
import LaunchDetails from "./components/LaunchDetails";
import Footer from "./components/Footer";
import EarlyAccessForm from "./components/EarlyAccessForm";
import VendorRegistrationForm from "./components/VendorRegistrationForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [isEarlyAccessOpen, setEarlyAccessOpen] = useState(false);
  const [isVendorRegistrationOpen, setVendorRegistrationOpen] = useState(false);

  const toggleEarlyAccess = () => setEarlyAccessOpen(!isEarlyAccessOpen);
  const toggleVendorRegistration = () =>
    setVendorRegistrationOpen(!isVendorRegistrationOpen);

  return (
    <div className="p-0 m-0">
      <Navbar />
      <Hero
        onGetEarlyAccessClick={toggleEarlyAccess}
        onBecomeVendorClick={toggleVendorRegistration}
      />
      <Info />
      <div className="p-0 w-[530px]">
        <Services
          onGetEarlyAccessClick={toggleEarlyAccess}
          onBecomeVendorClick={toggleVendorRegistration}
        />
      </div>
      <KeyFeatures />
      <div>
        <LaunchDetails />
      </div>
      <div>
        <Footer />
      </div>
      <div className="px-0">{/* Your main content goes here */}</div>

      {isEarlyAccessOpen && (
        <div className="overlay" onClick={toggleEarlyAccess}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <EarlyAccessForm />
          </div>
        </div>
      )}

      {isVendorRegistrationOpen && (
        <div className="overlay" onClick={toggleVendorRegistration}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <VendorRegistrationForm />
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default App;
