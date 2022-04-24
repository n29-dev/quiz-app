import classes from '../Styles/TextInput.module.css';

export default function TextInput({icon, ...rest}) {
  return (
    <div class={classes.textInput}>
      <input {...rest}/>
      <span class="material-icons-outlined"> {icon} </span>
    </div>
  );
}
