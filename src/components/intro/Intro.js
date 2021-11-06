import "./intro.scss"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function Intro() {
	return (
		<div  className="intro" id="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="assets/avatar.svg" alt=""/>
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Welcome!</h2>
					<h1>// My name is Kevin //</h1>
					<h3><span>Placeholder</span></h3>
				</div>
				<a href="#portfolio"><ArrowCircleDownIcon/></a>
			</div>
		</div>
	)
}