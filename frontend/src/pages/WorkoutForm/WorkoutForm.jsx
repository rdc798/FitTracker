import React, { useState, useEffect } from 'react';
import './WorkoutForm.css'
import WorkoutLog from '../WorkoutLog/WorkoutLog.jsx'

function WorkoutForm() {
    const [exercise, setExercise] = useState("");
    const [weight, setWeight] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            exercise,
            weight,
            sets,
            reps
        }

        const url = "http://127.0.0.1:5000/workoutLog"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        } else {

        }
    }

    return(
        <>
            <div className="wrapperDark">
                <div className="workoutForm">
                    <form onSubmit={onSubmit}>
                        <div>

                            <label htmlFor="exercise">Exercise:</label>
                            <select
                            id="exercise"
                            value={exercise}
                            onChange={(e) => setExercise(e.target.value)}
                            >
                            <option value="">Select Exercise</option>
                            <option value="Pullups">Pullups</option>
                            <option value="Pushups">Pushups</option>
                            <option value="Situps">Situps</option>
                            <option value="Squats">Squats</option>
                            <option value="Deadlifts">Deadlifts</option>
                            <option value="Bench Press">Bench Press</option>
                            <option value="Planks">Planks</option>
                            </select>

                            <label htmlFor="weight">Weight:</label>
                            <input
                            type="text"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            />

                            <label htmlFor="sets">Sets:</label>
                            <input
                            type="text"
                            id="sets"
                            value={sets}
                            onChange={(e) => setSets(e.target.value)}
                            />

                            <label htmlFor="Reps">Reps:</label>
                            <input
                            type="text"
                            id="reps"
                            value={reps}
                            onChange={(e) => setReps(e.target.value)}
                            />

                        </div>
                        <button type="submit">Create Workout</button>
                    </form>

                <WorkoutLog />
                </div>
            </div>
        </>
    )
}

export default WorkoutForm