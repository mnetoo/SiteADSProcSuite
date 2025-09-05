import { motion } from "framer-motion";
import { Plane, BarChart3, Database, Shield } from "lucide-react";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          ADSProcSuite
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hero-subtitle"
        >
          The ADSProcSuite software is a development project of a computational tool on the Microsoft Windows platform for verifying ADS 80/100 flight data.
        </motion.p>

        <button className="btn-primary">Start Now</button>
      </section>

      {/* Funcionalidades */}
      <section className="features">
        <h2 className="section-title">Main Features</h2>

        <div className="features-grid">
          <FeatureCard
            icon={<Shield className="icon red" />}
            title="Check Data"
            description="Checks the existence of flight files, if they exist, list them on the screen."
          />

          <FeatureCard
            icon={<Plane className="icon blue" />}
            title="Full/Fast Orthophoto Genreration"
            description="Tool to generate an orthophoto of one or more flight tracks, with all the customization settings chosen by the user."
          />

          <FeatureCard
            icon={<BarChart3 className="icon green" />}
            title="Orthophoto Equalization"
            description="Tool for automatically updating orthophotos using specialized algorithms."
          />

          <FeatureCard
            icon={<Database className="icon yellow" />}
            title="Ground Point Preview"
            description="Tool for viewing points in images."
          />
        </div>
      </section>
    </div>
  );
};

export default Home;