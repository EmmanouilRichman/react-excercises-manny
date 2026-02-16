const Course = ({course}) => {
    const totalCalc = (course) =>{
        let total = 0
        course.parts.map(part => total+=part.exercises)
        return (
            <p><b>total of {total} exercises</b></p>
        )
    }

    return (
        <div>
            <h1>{course.name}</h1>
            {course.parts.map(part => 
                <p key={part.id}>{part.name} {part.exercises}</p>
            )}
            {totalCalc(course)}
        </div>
    )
}


export default Course