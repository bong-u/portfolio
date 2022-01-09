import React from 'react';
import './css/project.css';

class Project extends React.Component {

	render() {
		return (
			<div id="projects">
				<a className="item" href="https://bong-u.github.io/game/tetris">
					<img id="project_cover" src="project_tetris.png" alt=""/>
					<div className='content_area'>
						<div className="name">Tetris</div>
						<div className="tools">
							<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white" alt=""/>
							<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt=""/>
							<img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white" alt=""/>
						</div>
					</div>
				</a>
				
				<a className="item" href="https://bong-u.github.io/game/minesweeper">
					<img id="project_cover" src="project_minesweeper.png" alt=""></img>
					<div className='content_area'>
						<div className="name">MineSweeper</div>
						<div className="tools">
							<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white" alt=""/>
							<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt=""/>
							<img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white" alt=""/>
						</div>
					</div>
				</a>
				
				<a className = "item" href="https://bong-u.github.io/game/2048">
					<img id="project_cover" src="project_2048.png" alt=""></img>
					<div className='content_area'>
						<div className="name">2048</div>
						<div className="tools">
							<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white" alt=""/>
							<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt=""/>
							<img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white" alt=""/>
						</div>
					</div>
				</a>
				
				<a className = "item" href="https://bong-u.github.io/game/tetris">
					<img id="project_cover" src="project_tetris.png" alt=""></img>
					<div className='content_area'>
						<div className="name">REST_DRF</div>
						<div className="tools">
							<img src="https://img.shields.io/badge/Django-092c1e?style=flat-square&logo=django&logoColor=white" alt=""/>
						</div>
					</div>
				</a>
			</div>
		);
	}
}

export { Project };
