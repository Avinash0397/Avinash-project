import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="main">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Luxury DevOps Platform</h1>
        <p>Powered by EKS + Helm + GitHub Actions</p>

        <button>Explore Platform</button>
      </motion.div>
    </div>
  );
}

export default App;
