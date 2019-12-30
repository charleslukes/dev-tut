import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { SignUp } from "./SignUp";
import "./Sign.css";

export const SigIn = props => {
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);

  //show the sign up modal
  const [modalShow, setModalShow] = useState(false);

  const handleEmailValidation = event => {
    const value = event.target.value;
    setEmail(value);

    /* eslint-disable */
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(value)) {
      setInvalidEmail(true);
    }
    if (regex.test(value)) {
      setInvalidEmail(false);
    }
  };

  const onSubmitValue = event => {
    event.preventDefault();
    alert(email);
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
            onSubmit={onSubmitValue}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                className={`signInputStyle ${
                  invalidEmail ? "invalidFieldStyle" : ""
                }`}
                value={email}
                onChange={handleEmailValidation}
                required
              />
              <div>
                <small className="errorFormText">
                  {invalidEmail ? "must be a valid email" : ""}
                </small>
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                className="signInputStyle"
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
              Do not have an account?{" "}
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
