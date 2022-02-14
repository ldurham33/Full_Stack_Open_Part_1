import { useState } from 'react'
const Button = ({handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = ({ good, neutral, bad }) => (
        <div>
            <h1>Statistics</h1>
            <StatisticsLine text = 'good' value = {good}/>
            <StatisticsLine text='neutral' value={neutral} />
            <StatisticsLine text='bad' value={bad} />
            <StatisticsLine text='all' value={good+neutral+bad} />
            <StatisticsLine text='average' value={(good + neutral + bad) == 0 ? 0 : (good - bad) / (good + neutral + bad)} />
            <StatisticsLine text='positive' value={(good + neutral + bad) == 0 ? 0 : 100 * (good) / (good + neutral + bad)+ '%'} />
        </div>
)
const StatisticsLine = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
    )
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0) //how many good reviews
    const [neutral, setNeutral] = useState(0) //how many neutral reviews
    const [bad, setBad] = useState(0) //how many bad reviews
    const handleGood = () => {
        setGood(good + 1)     
    }
    const handleNeutral = () => {
        setNeutral(neutral + 1)      
    }
    const handleBad = () => {
        setBad(bad + 1)
    }

    if ((good + neutral + bad) === 0) {
        return (
            <div>
                <h1> Give Feedback </h1>
                <Button handleClick={handleGood} text='good' />
                <Button handleClick={handleNeutral} text='neutral' />
                <Button handleClick={handleBad} text='bad' />
                <p> No Feedback Given </p>
            </div>
            )
    }
        return (
            <div>
                <h1> Give Feedback </h1>
                <Button handleClick={handleGood} text='good' />
                <Button handleClick={handleNeutral} text='neutral' />
                <Button handleClick={handleBad} text='bad' />

                <Statistics good={good} neutral={neutral} bad={bad} />
            </div>
        )
}

export default App