import React, { Fragment } from 'react';

import Pentagon from '../assets/Pentagon.png';

import './FormContainer.css'

const FormContainer = () => {

	return(

		<Fragment>
			<div id="form">
				<div className="shape-background">
					<p className="form-text">
						<h5>SCHEDULE A DEMO</h5>
						<h6>Learn More About FloQast.</h6>
					</p>
				</div>
				<div className="form-text-2">
					<p>Learn How FloQast Can <span>Improve Your Month-End</span></p>
					<div className="input-fields">
						<input type="text" placeholder={'First Name'}/>
						<input type="text" placeholder={'Email'}/>
						<button>SCHEDULE NOW</button>
					</div>
				</div>	
			</div>
		</Fragment>
	)

}

export default FormContainer;