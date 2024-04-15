
import React, {useEffect} from 'react';
import { GetMessages } from '../service/service';
import login from '../../src/Styles/login.css'
import { Input, Button } from 'semantic-ui-react'

const Home = () => {
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
        <h1 className='header'>Comet Chat Login</h1>
        <div className='ui login-main'>
        <Input className='ui login-input' size='small'  placeholder='Enter Username or Email' />
        <Input className='ui login-input' size='small'  placeholder='Enter Password' type='password'/>
        <Button  color='white' className='ui submit-btn'>Submit</Button>
        </div>
    </div>
  );
}

export default Home;
