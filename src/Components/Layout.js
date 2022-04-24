import classes from "../Styles/Layout.module.css";
import Navigation from "./Navigation";

export default function Layout({children}) {
  return (
    <>
      <Navigation type="test-value" placeholder="this is just a dummy value" color="background-color" anotherPorp="this another value"/>
      <main className={classes.main}>
        <div className={classes.container}>
          {children}
        </div>
      </main>
    </>
  );
}
