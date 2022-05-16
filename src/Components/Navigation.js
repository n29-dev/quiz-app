import { Link } from 'react-router-dom';
import classes from '../Styles/Navigation.module.css';
import logo from '../assets/images/logo.png';
import Account from './Account';

export default function Navigation({type, ...rest}) {
    return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account/>
    </nav>
  );
}
