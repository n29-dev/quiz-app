import classes from "../../Styles/Login.module.css";
import Illustration from "../Illustration";
import image from "../../assets/images/login.svg";
import Form from "../Form";
import TextInput from "../TextInput";
import Button from "../Button";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration>
          <img src={image} alt="Login" />
        </Illustration>
        <Form classNames={classes.login}>
          <TextInput type="email" placeholder="Enter email" icon="alternate_email"/>
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <Button>
            <span>Submit now</span>
          </Button>
        </Form>
      </div>
    </>
  );
}
