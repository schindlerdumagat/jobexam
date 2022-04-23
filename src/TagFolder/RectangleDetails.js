import React, { Fragment } from 'react';

import './RectangleDetails.css'

import FloQast from '../assets/FloQast.jpg';

const RectangleDetails = () => {

	return(
		<Fragment>
			<div id="details-container">
				<div className="img-container"><img src={FloQast} alt={'FloQast'}/><span>The</span></div>
				<p className="text-in">Fastest, Most Accurate</p>
				<p className="text-out">Way to Close Your Books!</p>
			</div>
				
				
		</Fragment>
	)

}

export default RectangleDetails;