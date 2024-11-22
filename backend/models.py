from config import db
from sqlalchemy.orm import sessionmaker, relationship, declarative_base

class Workout(db.Model):
    __tablename__ = 'workouts'
    id = db.Column(db.Integer, primary_key=True)
    exercise = db.Column(db.String(80), unique=False, nullable=False)
    weight = db.Column(db.Integer, unique=False, nullable=False)
    sets = db.Column(db.Integer, unique=False, nullable=False)
    reps = db.Column(db.Integer, unique=False, nullable=False)

    preset_exercises = ["Pullups", "Pushups", "Situps", "Squats", "Deadlifts", "Bench Press", "Planks"]
    
    def to_json(self):
        return {
            "id": self.id,
            "exercise": self.exercise,
            "weight": self.weight,
            "sets": self.sets,
            "reps": self.reps,
        }