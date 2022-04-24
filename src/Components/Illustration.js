import classes from '../Styles/Illustration.module.css';

export default function Illustration ({children}) {
    return (
        <div className={classes.illustration}>
          {children}
      </div>
    );
};