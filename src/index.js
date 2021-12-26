import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Quote } from './quote'
import { Project } from './project'
import { Career } from './career'

ReactDOM.render(
	<div id="pages">
		<Quote/>
		<Career/>
		<Project/>
	</div>,
	document.getElementById('root')
);
