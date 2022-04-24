import classes from '../Styles/Button.module.css';

export default function Button({className,children}) {
  console.log(children);
  return (
    <button className={`${classes.button} ${className}`}>{children}</button>
  );
}
