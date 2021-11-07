import "./navbar.scss"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Navbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={"navbar " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo" style={{ color: 'inherit' }}>KG</a>
					<div className="itemcontainer">
						<PhoneIphoneIcon className="icon"/>
						<span>630-981-7434</span>
					</div>
					<div className="itemcontainer">
						<MailOutlineIcon className="icon"/>
						<span>kggoltermann@gmail.com</span>
					</div>					
				</div>
				<div className="right">
					<div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
			<div className="divider"></div>
		</div>
	)
}