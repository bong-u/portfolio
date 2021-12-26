import React from 'react';
import './css/project.css';

class Project extends React.Component {

	render() {
		return (
			<div id="projects">
				<div>
					<a className = "item" href="https://bong-u.github.io/game/tetris">
						<img src="tetris.png" alt=""></img>
						<span>Tetris</span>
					</a>
				</div>
				<div>
					<a className = "item" href="https://bong-u.github.io/game/minesweeper">
						<img src="minesweeper.png" alt=""></img>
						<span>MineSweeper</span>
					</a>
				</div>
				
				<div>
					<a className = "item" href="https://bong-u.github.io/game/worm">
						<img src="tetris.png" alt=""></img>
						<span>Worm</span>
					</a>
				</div>
				
				<div>
					<a className = "item" href="https://bong-u.github.io/game/tetris">
						<img src="minesweeper.png" alt=""></img>
						<span>Bartist</span>
					</a>
				</div>
				
				<div>
					<a className = "item" href="https://bong-u.github.io/bong-u/game/tetris">
						<img src="/tetris.png" alt=""></img>
						<span>REST-DRF</span>
					</a>
				</div>
			</div>
		);
	}
}

export { Project };
