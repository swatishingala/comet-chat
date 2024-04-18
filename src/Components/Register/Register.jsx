
import React from 'react';

import { Form, FormField, Label, Divider } from 'semantic-ui-react'

const Register = () => {
  
    console.log('open')


  //   useEffect(() => {
  //     console.log(GetMessages)
  //     .then(response => {
  //       const data = response.data;
  //       console.log('Data:', data);
  //       // Now you can use the `data` variable in your React component
  //     })
  //     .catch(error => {
  //       // Handle errors
  //       console.error('Error:', error);
  //     });

  //   }, []);
  return (
    <div className="ui login">
      <Form>
    <FormField>
      <input type='text' placeholder='First name' />
      <Label basic color='red' pointing>
        Please enter a value
      </Label>
    </FormField>
    <Divider />

    <FormField>
      <Label basic color='red' pointing='below'>
        Please enter a value
      </Label>
      <input type='text' placeholder='Last Name' />
    </FormField>
    <Divider />

    <FormField inline>
      <input type='text' placeholder='Username' />
      <Label basic color='red' pointing='left'>
        That name is taken!
      </Label>
    </FormField>
    <Divider />

    <FormField inline>
      <Label basic color='red' pointing='right'>
        Your password must be 6 characters or more
      </Label>
      <input type='password' placeholder='Password' />
    </FormField>
  </Form>
    </div>
  );
}

export default Register;
