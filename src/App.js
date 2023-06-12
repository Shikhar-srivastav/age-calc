import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [diff, setDiff] = useState(0);
	const [vis, setVis] = useState(false);

	const handleCalcAge = () => {
		const msInYear = 1000 * 60 * 60 * 24 * 365;
		const date = new Date().getTime();
		const bday = new Date(document.getElementById('bday').value).getTime();
		setDiff(Math.floor((date - bday) / msInYear));
		setVis(true);
	}

  return (
    <div className="d-flex vh-100 align-items-center justify-content-center">
			<span className="text-center">
				<h1 className="my-3">Age Calculator</h1>
				<h6 className="my-3">Enter your date of birth</h6>
				<div className="my-3">
					<input id="bday" type="date" style={{width: 270 }} />
				</div>
				<button className="btn btn-primary my-3" onClick={handleCalcAge}>Calculate Age</button>
				{ vis ? <h4 className="my-3">You are {diff} years old</h4> : <br/> }
			</span>
    </div>
  );
}

export default App;
