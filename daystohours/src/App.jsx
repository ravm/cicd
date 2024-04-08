import React, { useState } from 'react'
import './App.css'

function App () {
	const [count, setCount] = useState(1)

	function daysToHoursConverter (days) {
		return (days * 24)
	}

	return (
		<>
			<div className="card">
				<h2>Days to Hours Converter</h2>
				<p>Enter the number of days to convert to hours</p>
				<input
					type="number"
					placeholder='Enter number of days'
					value={count}
					onChange={e => setCount(e.target.value)}
				/>
				{count && (
					<p>
						{count} day(s) is equal to {Number.isInteger(((Number(count)))) ? count * 24 : (Number(daysToHoursConverter(count)).toFixed(2))} hour(s)
					</p>
				)}
				<p>
					<a href='https://github.com/ravm/cicd'>
						Github repository
					</a>
				</p>
				<p>
					<a href='https://app.codecov.io/github/ravm/cicd'>
						Coverage
					</a>
				</p>
			</div>
		</>
	)
}

export default App
