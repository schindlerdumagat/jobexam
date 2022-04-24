import React, { Fragment } from 'react';

import FloQast from '../assets/FloQast.png'

import './TagCase.css'

const TagCase = () => {

	return(
		<Fragment>
			<div id="tag-case">
				<div className="first-line"><img src={FloQast}/>  <span>The</span></div>
				<div className="second-line">Fastest, Most Accurate</div>
				<div className="third-line">Way to Close Your Books!</div>
			</div>
		</Fragment>
	)

}

export default TagCase;
