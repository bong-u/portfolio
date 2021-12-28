import React from 'react';
import './css/career.css';

class Career extends React.Component {

	render() {
		const profile_click = () => {
			document.getElementById('profile').style.animation="move-profile 1s ease forwards";
			document.getElementById('career-item').style.animation="show-career 2s ease forwards";
		};
		
		return (
			<div id="career">
				<div id="content">
					<div id="profile" onClick={profile_click}>
						<img src="profile.png" alt=""></img>
					</div>
					<span id='career-item'>
						<div className="date">
							<p>20.05.30</p>
							<p>20.07.05 ~ 20.07.25</p>
							<p>20.09.26</p>
							<p>21.12.23</p>
						</div>
						<div className="content">
							<p>Participated DevDay Algorithm Competition.</p>
							<p>Participated ARGOS club system hacking training.</p>
							<p>Participated The 4th Thinking Programming Competition.</p>
							<p>2020 crawler dataton competition - The grand prize</p>
						</div>
					</span>
				</div>
			</div>
		);
	}
}


export { Career };