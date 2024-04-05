import React, { useState } from 'react'
import './App.css'

function App () {
	const [count, setCount] = useState(0)

	function daysToHoursConverter (days) {
		console.log('days:', days)
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
					onChange={e => [setCount(e.target.value), console.log('count:', typeof(parseFloat(count)))]}
				/>
				{count && (
					<p>
						{count} day(s) is equal to {Number.isInteger(((Number(count)))) ? count * 24 : (Number(daysToHoursConverter(count)).toFixed(2))} hour(s)
					</p>
				)}
			</div>
		</>
	)
}

export default App
