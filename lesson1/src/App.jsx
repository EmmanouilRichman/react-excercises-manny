const Header = (props) => {

  return(
    <div>
      <p>{props.course.name}</p>
    </div>
  )
}

const Part = (props) => {
  console.log("parts section")
  console.log(props)
  return(
    <div>
      <p>Part Name: {props.parts.name} Total Excercises: {props.parts.exercises}</p>
    </div>
  )

}

const Content = (props) => {
  console.log('Content Section')
  console.log(props)
  return(
    <div>
      <Part parts={props.parts.parts[0]}/>
      <Part parts={props.parts.parts[1]}/>
      <Part parts={props.parts.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Total Excercises: {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course}/>
      <Total parts={course} />
    </div>
  )
}

export default App