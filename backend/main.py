from flask import request, jsonify
from config import app, db
from models import Workout

@app.route('/workoutLog', methods=['GET'])
def get_workout_log():
    workouts = Workout.query.all()
    json_workouts = list(map(lambda x: x.to_json(), workouts))
    return jsonify({"workouts": json_workouts})

@app.route('/workoutLog', methods=['POST'])
def create_workout():
    exercise = request.json.get("exercise")
    weight = request.json.get("weight")
    sets = request.json.get("sets")
    reps = request.json.get("reps")

    if not exercise or not weight or not sets or not reps:
        return(jsonify({"message": "Missing workout data"}), 400)
    
    new_workout = Workout(exercise=exercise, weight=weight, sets=sets, reps=reps)
    try:
        db.session.add(new_workout)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Workout created"})


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)