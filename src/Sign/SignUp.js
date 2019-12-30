import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./Sign.css";

export const SignUp = props => {
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);

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
          <Form className="d-flex justify-content-center align-items-center flex-column">
            <Form.Group controlId="formGridFirstName1">
              <Form.Control
                placeholder="First Name"
                className="signInputStyle"
              />
            </Form.Group>

            <Form.Group controlId="formGridLasttName1">
              <Form.Control
                placeholder="Last Name"
                className="signInputStyle"
              />
            </Form.Group>

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

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                className="signInputStyle"
                required
              />
            </Form.Group>

            <Button type="submit" className="submit-btnform">
              Sign Up
            </Button>
          </Form>
        </div>
        <div>
          <div className="socialSignIn mt-4">
            <hr />
            <span>OR Sign up with</span>
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
