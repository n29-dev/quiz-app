import classes from '../Styles/Navigation.module.css';
import logo from '../assets/images/logo.png';
import Account from './Account';

export default function Navigation({type, ...rest}) {
    const tempObj = {...rest}
    for (const key in tempObj) {
        if (Object.hasOwnProperty.call(tempObj, key)) {
            const element = tempObj[key];
            console.log(element)
        }
    }
    return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account/>
    </nav>
  );
}
