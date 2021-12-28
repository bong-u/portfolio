import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { First } from './first'
import { Project } from './project'
import { Career } from './career'

ReactDOM.render(
	<div id="pages">
		<First/>
		<Career/>
		<Project/>
	</div>,
	document.getElementById('root')
);
