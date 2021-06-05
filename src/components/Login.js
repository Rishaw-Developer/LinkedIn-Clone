import React, {useHistory} from "react";
import { Container, Nav, Join, SignIn, Section, Hero, Form, Google } from "./ComponentsLogin";
import { Link } from "react-router-dom"
import {auth, Provider} from '../firebase'

function Login() {
  const history = useHistory()

  const LogIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(Provider)
    .then((auth) => {
      history.push("/home")
    })
    .catch(error => alert(error.message))
  }

  return (
    <Container>
    {/* NavBar */}
      <Nav>
        <a href="/">
          <img
            src="./images/login-logo.svg"
            alt="Logo"
          />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>

    {/* Section */}
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="./images/login_hero.svg" alt="" />
        </Hero>
        <Form>
          <Link to="/home" style={{textDecoration: "none"}}>
          <Google onClick={LogIn}>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
          </Link>
        </Form>
      </Section>
    </Container>
  );
}

export default Login;
