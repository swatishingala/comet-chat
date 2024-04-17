
import React, {useState} from 'react';
import { GetMessages } from '../service/service';
import login from '../../src/Styles/login.css'
import { Input, Button, Label } from 'semantic-ui-react'

const Home = () => {
  const [inputData, setInputData] = useState('');
  const [inputPassword, setInputDataPassword] = useState('');
  const [storedLoginData, setStoredLoginData] = useState(null);

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newObjectData = {
      userInput: inputData,
      userPassword: inputPassword
    };


    // Save data to local storage
    localStorage.setItem('inputData', JSON.stringify(newObjectData));
    setStoredLoginData(newObjectData)
  };

  const handlePasswordChange = (e) => {
    setInputDataPassword(e.target.value);
  }


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
        <Input className='ui login-input' size='small'  placeholder='Enter Username or Email' onChange={handleInputChange}/>
        <Input className='ui login-input' size='small'  placeholder='Enter Password' type='password' onChange={handlePasswordChange}/>
        <Button  color='white' className='ui submit-btn' onClick={handleSubmit}>Submit</Button>
        <Label as='a' basic image>
         <img src='../images/registration.png' alt=''/>
            Registration
    </Label>
        </div>
    </div>
  );
}

export default Home;
