import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1> Course Title: {props.course.name} </h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p> Name of Chapter: {props.parts[0].name} Exercises: {props.parts[0].exercises} </p>
            <p> Name of Chapter: {props.parts[1].name} Exercises: {props.parts[1].exercises} </p>
            <p> Name of Chapter: {props.parts[2].name} Exercises: {props.parts[2].exercises} </p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part parts={props.parts} exercises={props.exercises} />
        </div>
    )
}

const Total = (props) => {
        return (
            <div>
                <p>Number of exercises are {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
            </div>
        )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name:'Fundamentals of React',
                exercises: 10
            },
            {
                name:'Using props to pass data',
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
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
