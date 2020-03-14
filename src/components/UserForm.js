import React from 'react'
import {Form, Button, Col} from 'react-bootstrap/'
import PropTypes from 'prop-types'

export default function UserForm(props) {
        const {submitHandler, onFileChange, onValueChange, buttonDisabled, token} = props;
        return (<Form className="user-form" onSubmit={submitHandler}>
            <Form.Row>
              <Form.Group as={Col} controlId="formFName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control required type="text" name="fname" placeholder="John" onChange={onValueChange}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formLName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control required type="text" name="lname" placeholder="Smith" onChange={onValueChange}/>
              </Form.Group>
            </Form.Row> 
            <Form.Row>
              <Form.Group as={Col} controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control as="select" name="age" onChange={onValueChange} defaultValue="1">
                  <option value="0" disabled>Select your option</option>
                  <option>18-25</option>
                  <option>26-30</option>
                  <option>31-35</option>
                  <option>36-40</option>
                  <option>41-50</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" name="gender" onChange={onValueChange} defaultValue="1">
                  <option value="0" disabled>Select your option</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
  
             <Form.Row>
              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" name="email" placeholder="john.smith@company.com" onChange={onValueChange}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" name="password" placeholder="Password" onChange={onValueChange}/>
              </Form.Group>
            </Form.Row> 
  
             <Form.Group controlId="formFile">
                  <Form.Label>Upload Your CV</Form.Label>
                  <Form.Control type="file" name="file" placeholder="CV" onChange={ (e) => onFileChange(e.target.files[0]) }/>
              </Form.Group> 
  
             <Form.Group>
                <Form.Label>Encryption Token</Form.Label>
                <Form.Control type="text" disabled value={token}></Form.Control>
              </Form.Group>
              
            <Button variant="primary" type="submit" disabled={buttonDisabled}>
                Submit
            </Button>
          </Form>)

    }  
UserForm.propTypes = {
    submitHandler: PropTypes.func.isRequired,
    onFileChange: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired,
    buttonDisabled: PropTypes.bool,
    token: PropTypes.string
  }