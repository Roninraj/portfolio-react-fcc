import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/logo-ninja.png'
import LogoSubtitle from '../../assets/images/sub-logo-rr.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to="/">
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt='logosub'/>
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank"
                 rel='noreferrer' 
                 href='https://www.linkedin.com/in/rahul-raj-soren-082a98194/'
                 >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
            </li>
            <li>
                <a target="_blank"
                 rel='noreferrer' 
                 href='https://github.com/Roninraj'
                 >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
            </li>
            <li>
                <a target="_blank"
                 rel='noreferrer' 
                 href='https://codepen.io/ronin_raj'
                 >
                    <FontAwesomeIcon icon={faCodepen} color="#4d4d4e"/>
                    </a>
            </li>
            <li>
                <a target="_blank"
                 rel='noreferrer' 
                 href='https://twitter.com/RahulrajSoren'
                 >
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>
                    </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;