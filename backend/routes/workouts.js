const express = require('express')

const router = express.Router()
const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout } = require('../controllers/WorkoutController')


//Get all workouts
router.get('/', getWorkouts)

//Get a single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout)

//DELETE a new workout
router.delete('/:id',deleteWorkout)

//UPDATE a workout
router.patch('/:id',updateWorkout)

module.exports = router  