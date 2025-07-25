import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Posts from "./Components/Posts";
import Friends from "./Components/Friends";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";
import Search from "./Components/Search";
import AuthProvider from "./Components/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import AboutNavLink from "./Components/AboutNavLink";

const fadeVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const fadeTransition = {
  duration: 0.4,
  ease: "easeInOut",
};

const MotionWrapper = ({ children }) => (
  <motion.div
    variants={fadeVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={fadeTransition}
    style={{ position: "absolute", width: "100%" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/login"
            element={<MotionWrapper><Login /></MotionWrapper>}
          />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/"
              element={<MotionWrapper><Home /></MotionWrapper>}
            />
            <Route
              path="/search"
              element={<MotionWrapper><Search /></MotionWrapper>}
            />
            <Route
              path="/about"
              element={<MotionWrapper><AboutNavLink /></MotionWrapper>}
            />
            <Route
              path="/user/:name"
              element={<MotionWrapper><Profile /></MotionWrapper>}
            >
              <Route path="posts" element={<Posts />} />
              <Route path="friends" element={<Friends />} />
            </Route>
          </Route>
          <Route
            path="*"
            element={<MotionWrapper><NotFound /></MotionWrapper>}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <Router>
    <AuthProvider>
      <AnimatedRoutes />
    </AuthProvider>
  </Router>
);

export default App;
