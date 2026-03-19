import React from "react";
import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./component/Navbar";
import Herosection from "./Pages/Herosection";
import Footer from "./component/Footer";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Appointment from "./Pages/Appointment";
import Services from "./Pages/Services";
import Laser_Hair_Reduction from "./Pages/Laser_Hair_Reduction";
import Botox_injection from "./Pages/Botox_injection";
import PRP_Face_Scalp from "./Pages/PRP_Face_Scalp";
import Exosomes from "./Pages/Exosomes";
import Hydrafacial from "./Pages/Hydrafacial";
import Hydratherapy from "./Pages/Hydratherapy";
import Fillers from "./Pages/Fillers";
import Mesotherapy from "./Pages/Mesotherapy";
import Chemical_peels from "./Pages/Chemical_peels";
import Emsculpt_Fat_Reduction from "./Pages/Emsculpt_Fat_Reduction";
import Emsella from "./Pages/Emsella";
import Threads from "./Pages/Threads";
import Aptos_Face_Lift from "./Pages/Aptos_Face_Lift";
import Body_Fillers from "./Pages/Body_Fillers";
import Hifu from "./Pages/Hifu";
import Q_Switch from "./Pages/Q_Switch";
import Fat_Dissolving from "./Pages/Fat_Dissolving";
import Polynucleotides from "./Pages/Polynucleotides";
import Fixedicons from "./component/Fixedicons";
import PromoSection from "./component/PromoSection";
import ScrollToTop from "./component/Scrolltotop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* ✅ Main home route */}
        <Route path="/" element={<Herosection />} />

        {/* ✅ Redirect /home → / */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* ✅ Other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/laser-hair-reduction"
          element={<Laser_Hair_Reduction />}
        />
        <Route path="/botox" element={<Botox_injection />} />
        <Route path="/prp-face-scalp" element={<PRP_Face_Scalp />} />
        <Route path="/exosomes" element={<Exosomes />} />
        <Route path="/fillers" element={<Fillers />} />
        <Route path="/mesotherapy" element={<Mesotherapy />} />
        <Route path="/hydrafacial" element={<Hydrafacial />} />
        <Route path="/hydratherapy" element={<Hydratherapy />} />
        <Route path="/chemical-peels" element={<Chemical_peels />} />
        <Route
          path="/emsculpt-fat-reduction"
          element={<Emsculpt_Fat_Reduction />}
        />
        <Route path="/emsella" element={<Emsella />} />
        <Route path="/threads" element={<Threads />} />
        <Route path="/aptos-face-lift" element={<Aptos_Face_Lift />} />
        <Route path="/body-fillers" element={<Body_Fillers />} />
        <Route path="/hifu" element={<Hifu />} />
        <Route path="/q-switch" element={<Q_Switch />} />
        <Route path="/fat-dissolving-injection" element={<Fat_Dissolving />} />
        <Route path="/polynucleotides" element={<Polynucleotides />} />
        <Route path="/promo" element={<PromoSection />} />

        {/* ✅ Optional fallback for unknown URLs */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Fixedicons />
      <Footer />
    </Router>
  );
}

export default App;
