import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { SignUp } from "./SignUp";
import { useMutation } from "@apollo/react-hooks";
import { SIGNIN_USER } from "./mutations";
import "./Sign.css";

export const SigIn = props => {
  const [signIn] = useMutation(SIGNIN_USER, {
    onCompleted: data => {
      console.log(data);
    }
  });
  //show the sign up modal
  const [modalShow, setModalShow] = useState(false);

  const [userInput, setUserInput] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    setUserInput({ ...userInput, [name]: value });
  };

  // function name should be unique from that of sign up
  const onSubmitSignIn = event => {
    event.preventDefault();
    console.log(userInput);

    alert("hey");
    signIn({ variables: userInput });
  };

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modalHeaderStyle"></Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h4 className="mt-0 mb-4">Dev Tut</h4>

          {/* collect the user details */}
          <Form
            className="d-flex justify-content-center align-items-center flex-column"
            onSubmit={onSubmitSignIn}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="signInputStyle"
                onChange={handleChange}
                name="email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                className="signInputStyle"
                onChange={handleChange}
                name="password"
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-end forgotPass">
              <div>Forgot Password?</div>
            </div>
            <Button type="submit" className="submit-btnform">
              Sign In
            </Button>
            <div className="signupAcc">
              Do not have an account?
              <span onClick={() => setModalShow(true)}>SignUp</span>
              <SignUp show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </Form>
        </div>
        <div>
          <div className="socialSignIn">
            <hr />
            <span>OR Sign in with</span>
          </div>
          <div className="d-flex justify-content-center align-items-center socialSignInIcons">
            <span>
              <i class="fab fa-facebook fb"></i>
            </span>
            <span>
              <i class="fab fa-twitter twit"></i>
            </span>
            <span>
              <i class="fab fa-github git"></i>
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="modalFooterStyle"></Modal.Footer>
    </Modal>
  );
};
