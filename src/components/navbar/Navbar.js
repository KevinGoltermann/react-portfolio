import "./navbar.scss"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">KG</a>
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
				</div>
			</div>
		</div>
	)
}