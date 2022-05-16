import classes from "../../Styles/Signup.module.css";
import image from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import Form from "../Form";
import TextInput from "../TextInput";
import Checkox from "../Checkbox";
import Button from "../Button";
import {useAuth} from '../Contexts/AuthContext'
import { useRef, useState } from "react";
import {useNavigate} from 'react-router-dom'


export default function Signup() {
  //signup functionality

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const checkoxRef = useRef();
  const navigate = useNavigate()

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)

  const {signUp, currentUser} = useAuth();

  async function signUpHandler(e) {

    setError('')

    e.preventDefault();

    setLoading(true)

    const userData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
      checkbox: checkoxRef.current.checked
    }

    if(userData.password !== userData.confirmPassword){
      setError('Yours Password did not match');
      return;
    }

    await signUp(userData.email, userData.password, userData.username)

    console.log(currentUser)
    setLoading(false)

    navigate('/')
  }


  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration>
          <img src={image} alt="Signup" />
        </Illustration>
        <Form className={classes.signup} onSubmit={signUpHandler}>
          <TextInput
            icon="alternate_email"
            type="text"
            placeholder="Enter name"
            ref={usernameRef}
            required={true}

          />
          <TextInput
            icon="alternate_email"
            type="email"
            placeholder="Enter email"
            ref={emailRef}
            required={true}

          />
          <TextInput icon="lock" type="password" placeholder="Enter password" ref={passwordRef} required={true}/>
          <TextInput
            icon="alternate_email"
            type="password"
            placeholder="Confirm password"
            ref={confirmPasswordRef}
            required={true}

          />
          <Checkox label="I agree with the terms and conditions" ref={checkoxRef}/>
          <Button disabled={loading}>
            <span>Submit now</span>
          </Button>
          {error ? <p className="error">{error}</p> : null}
        </Form>
      </div>
    </>
  );
}
