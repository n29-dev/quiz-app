import classes from '../Styles/Account.module.css';
import {Link} from 'react-router-dom';
import { useAuth } from './Contexts/AuthContext';

export default function Account () {
  const {currentUser, logOut } = useAuth()
  function logoutHandler(){
    logOut();
  }

    return (
          <div className={classes.account}>
            {
              currentUser.uid ? (
                <>
                  <span style={{fontWeight: '600'}}>{currentUser.displayName}</span>
                  <span className="material-icons-outlined" title="Logout" onClick={logoutHandler}> logout </span>
                </>
              ) : (
                <>
                  <span className="material-icons-outlined" title="Account">account_circle</span>
                  <Link to="/signup">Signup</Link>
                  <Link to="/login">Login</Link>
                </>
              )
            }
          </div>
    );
};