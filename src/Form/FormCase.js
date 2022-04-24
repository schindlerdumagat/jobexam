import React, { Fragment } from 'react';

import Pentagon from '../assets/Pentagon.png'

import './FormCase.css'

const FormCase = () => {

	return(
		<Fragment>
			<div id="form-case">
				<div className="shape-container">
					<h4>SCHEDULE A DEMO</h4>
					<h5>Learn More About FloQast</h5>
				</div>
				<div className="input-container">
					<p>Learn How FloQast Can <span>Improve Your Month-End</span></p>
					<div className="input-fields">
						<div className="inputs">
							<input type="text" placeholder="First Name*" />
							<input type="text" placeholder="Email*" />
						</div>
						<button>SCHEDULE NOW</button>
					</div>
				</div>
			</div>
		</Fragment>
	)

}

export default FormCase;