import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({workout}) => {
    const { _id, title, load, reps, createdAt } = workout
    const {dispatch} = useWorkoutsContext()

const handleClick = async() => {
    const response = await fetch('/api/workouts/'+_id, {
        method: 'DELETE'
    })
    const json = await response.json();
    // if(!response.ok){
    //     setError(json.error)
    // }
    if(response.ok){
        dispatch({type:'DELETE_WORKOUT', payload:json})
    }
}

    return(
       <div className="workout-details">
        <h4>{title}</h4>
        <p><strong>Load (kg): </strong>{load}</p>
        <p><strong>Reps: </strong>{reps}</p>
        <p>{createdAt}</p>
        <span onClick={handleClick}>delete</span>
       </div>

    )
}

export default WorkoutDetails