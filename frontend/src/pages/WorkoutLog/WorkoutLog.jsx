import React, { useState, useEffect } from 'react';
import './WorkoutLog.css'

function WorkoutLog() {
    const [workouts, setWorkouts] = useState([]);

    // Fetch workouts data from Flask backend on component mount
    useEffect(() => {
        fetch('http://127.0.0.1:5000/workoutLog') // Flask API endpoint for fetching workouts
            .then((response) => response.json())
            .then((data) => {
                setWorkouts(data.workouts); // Set the workouts state to the response data
            })
            .catch((error) => console.error('Error fetching workouts:', error));
    }, []); // Empty dependency array to fetch data only on component mount

    return (
        <div className="wrapperDark">
            <div className="workoutLog">
                <h2>Workout Log</h2>
                {workouts.length === 0 ? (
                    <p>No workouts found.</p>
                ) : (
                    workouts.map((workout) => (
                        <div key={workout.id}>
                            <h3>{workout.exercise}</h3>
                            <p>Weight: {workout.weight}kg</p>
                            <p>Sets: {workout.sets} | Reps: {workout.reps}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default WorkoutLog;
