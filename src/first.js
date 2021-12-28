import React from 'react';
import './css/first.css';

class First extends React.Component {
	nextPage = () => {
		setTimeout(() => {
			console.log (document.getElementById('pages').scrollTop)
			if (document.getElementById('pages').scrollTop > 500)
				return;
			document.getElementById('pages').scrollTo({
				top: 500,
				behavior: 'smooth'
			});
		}, 500)
	};
	
	render() {
		return (
			<div id='first'>
				<div>
					<img id="block" src="block.png" alt=""></img>
					<img id="line" src="line.png" alt="" onAnimationEnd={ this.nextPage } ></img>
					<img src="wall.png" alt=""></img>
				</div>
			</div>
		);
	}
}

export { First };