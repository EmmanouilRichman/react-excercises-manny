const Course = ({course}) => {
    const totalCalc = (course) =>{
        let initial = 0
        const total = course.parts.reduce((accumulator,currentValue) => accumulator + currentValue.exercises,initial)
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