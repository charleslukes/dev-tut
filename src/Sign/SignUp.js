import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { emailRegex, nameRegex, passwordRegex } from "./validation";
import { REGISTER_USER } from "./queries";
import "./Sign.css";

export const SignUp = props => {
  const [login, { data, loading, error }] = useMutation(REGISTER_USER);

  const [userInput, setUserInput] = useState({
    email: "",
    firstname: "",
    lastname: "",
    country: "Nigeria",
    password: ""
  });

  const [invalidateField, setInvalidateField] = useState({
    email: false,
    firstname: false,
    lastname: false,
    password: false,
    formInvalid: false
  });

  const handleUserInput = event => {
    const value = event.target.value;
    const name = event.target.name;

    // validate function
    const validateField = (regex, field, value) => {
      if (!regex.test(value)) {
        setInvalidateField({ ...invalidateField, [field]: true });
      }

      if (regex.test(value)) {
        setInvalidateField({ ...invalidateField, [field]: false });
        // updates the email field
        setUserInput({
          ...userInput,
          [name]: value
        });
      }
    };

    // validate fields
    if (name === "firstname") {
      validateField(nameRegex, "firstname", value);
    }

    if (name === "lastname") {
      validateField(nameRegex, "lastname", value);
    }

    if (name === "email") {
      validateField(emailRegex, "email", value);
    }

    if (name === "password") {
      validateField(passwordRegex, "password", value);
    }
  };

  const onSubmitValue = e => {
    e.preventDefault();

    if (Object.values(userInput).includes("")) {
      return;
    } else {
      login({ variables: userInput });

      // reassign value to default
      for (const value in userInput) {
        if (value !== "country") userInput[value] = "";
      }
      console.log(data, loading, error);
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
          <Form
            className="d-flex justify-content-center align-items-center flex-column"
            onSubmit={onSubmitValue}
          >
            <Form.Group controlId="formGridFirstName1">
              <Form.Control
                placeholder="First Name"
                required
                name="firstname"
                className={`signInputStyle ${
                  invalidateField.firstname ? "invalidFieldStyle" : ""
                }`}
                onChange={handleUserInput}
              />
              <div>
                <small className="errorFormText">
                  {invalidateField.firstname
                    ? "must be at least three letters"
                    : ""}
                </small>
              </div>
            </Form.Group>

            <Form.Group controlId="formGridLasttName1">
              <Form.Control
                placeholder="Last Name"
                required
                name="lastname"
                className={`signInputStyle ${
                  invalidateField.lastname ? "invalidFieldStyle" : ""
                }`}
                onChange={handleUserInput}
              />
              <div>
                <small className="errorFormText">
                  {invalidateField.lastname
                    ? "must be at least three letters"
                    : ""}
                </small>
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                className={`signInputStyle ${
                  invalidateField.email ? "invalidFieldStyle" : ""
                }`}
                name="email"
                onChange={handleUserInput}
                required
              />
              <div>
                <small className="errorFormText">
                  {invalidateField.email ? "must be a valid email" : ""}
                </small>
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                required
                name="password"
                className={`signInputStyle ${
                  invalidateField.password ? "invalidFieldStyle" : ""
                }`}
                onChange={handleUserInput}
              />
              <div>
                <small className="errorFormText">
                  {invalidateField.password
                    ? "must be at least eight characters"
                    : ""}
                </small>
              </div>
            </Form.Group>
            <Button
              type="submit"
              className="submit-btnform"
              disabled={invalidateField.formInvalid}
            >
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
