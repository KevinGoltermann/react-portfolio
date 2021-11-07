import "./intro.scss"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { init } from 'ityped';
import { useEffect, useRef} from 'react';

export default function Intro() {

	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, { 
			showCursor: true, 
			startDelay: 1000,
			backDelay:  1000,
			backSpeed:  70,
			strings: ['Front End Developer', 'Photographer', 'Learner' ] 
		});
	}, [])

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
					<h3><span ref={textRef}></span></h3>
				</div>
				<a href="#portfolio"><ArrowCircleDownIcon/></a>
			</div>
		</div>
	)
}