import classes from '../Styles/Form.module.css';
import { Link } from 'react-router-dom';

export default function Form ({classNames, children, onSubmit}) {
    return (
        <form className={`${classNames} ${classes.form}`} onSubmit={onSubmit}>
            {children}
        <div className="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
      </form>
    );


};
