import classes from "../../Styles/Signup.module.css";
import image from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import Form from "../Form";
import TextInput from "../TextInput";
import Checkox from "../Checkbox";
import Button from "../Button";

export default function Signup() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration>
          <img src={image} alt="Signup" />
        </Illustration>
        <Form className={classes.testClass}>
          <TextInput
            icon="alternate_email"
            type="text"
            placeholder="Enter name"
          />
          <TextInput
            icon="alternate_email"
            type="email"
            placeholder="Enter email"
          />
          <TextInput icon="lock" type="password" placeholder="Enter password" />
          <TextInput
            icon="alternate_email"
            type="password"
            placeholder="Enter password"
          />
          <Checkox label="I agree with the terms and conditions" />
          <Button>
            <span>Submit now</span>
          </Button>
        </Form>
      </div>
    </>
  );
}
