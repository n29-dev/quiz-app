import classes from "../../Styles/Login.module.css";
import Illustration from "../Illustration";
import image from "../../assets/images/login.svg";
import Form from "../Form";
import TextInput from "../TextInput";
import Button from "../Button";
import { useAuth } from "../Contexts/AuthContext";
import { useRef, useState } from "react";
import {useNavigate} from 'react-router-dom'

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);
  const [loginResult, setLoginResult] = useState(null);

  const {logIn} = useAuth();

  const navigate = useNavigate()

  async function logInHandler(e) {
    e.preventDefault();
    setLoading(true);
    const failed = await logIn(emailRef.current.value, passwordRef.current.value);
    if(!failed){
      navigate('/')
    }
    setLoading(false);
    setLoginResult(failed);

  }

  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration>
          <img src={image} alt="Login" />
        </Illustration>
        <Form classNames={classes.login} onSubmit={logInHandler}>
          <TextInput type="email" placeholder="Enter email" icon="alternate_email" ref={emailRef}/>
          <TextInput type="password" placeholder="Enter Password" icon="lock" ref={passwordRef}/>
          <Button disabled={loading}>
            <span>Submit now</span>
          </Button>
          {
            loginResult && <p className="error">{'Username or Password is in correct'}</p>
          }
        </Form>
      </div>
    </>
  );
}
