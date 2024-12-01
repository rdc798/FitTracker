import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import WorkoutLog from "./pages/WorkoutLog/WorkoutLog.jsx";
import WorkoutForm from "./pages/WorkoutForm/WorkoutForm.jsx";
import Header from "../components/Header/Header.jsx";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchWorkouts = async () => {
    const response = await fetch("http://127.0.0.1:5000/workoutLog");
    const data = await response.json();
    setWorkouts(data.workouts);
    console.log(data.workouts);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <>
      <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <BrowserRouter>
        {!isMenuOpen && (
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/WorkoutLog" element={<WorkoutLog />} />
            <Route index path="/WorkoutForm" element={<WorkoutForm />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
