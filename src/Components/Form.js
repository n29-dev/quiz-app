import classes from '../Styles/Form.module.css';

export default function Form ({classNames, children}) {
    console.log(classes);
    return (
        <form class={`${classNames} ${classes.form}`}>
            {children}
        <div class="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
      </form>
    );


};
