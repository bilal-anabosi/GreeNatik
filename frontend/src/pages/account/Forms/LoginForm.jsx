import FormGenerator from './FormGenerator';
import * as yup from 'yup';
import { useContext, useEffect } from 'react'; 
import { UserContext } from '../context/User.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

export default function LoginForm() {
  const navigate = useNavigate();
  const { userToken, setUserToken } = useContext(UserContext) || {};
  
  useEffect(() => {
    if (userToken) {
      navigate(-1);
    }
  }, [userToken, navigate]);

  const onSubmit = async (userData) => {
    try {
      const { data, status } = await axios.post(`http://localhost:4000/user/login`, userData);
      console.log(data);
  
      if (status === 200) {
        localStorage.setItem('userToken', data.token);
        setUserToken(data.token);
        
        navigate('/store');
      } else if (status === 401) {
        console.log("error 401");
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const attributes = [
    {
      name: 'email',
      id: 'email',
      label: 'Email',
      type: 'text',
      validation: yup.string().email('Invalid email').required('Required'),
    },
    {
      id: 'password',
      name: 'password',
      label: 'Password',
      type: 'password',
      validation: yup.string().required('Password is required').min(3, 'Must be at least 3 characters').max(20, 'Max is 20 characters'),
    },
  ];

  return (
    <>
      <FormGenerator onSubmit={onSubmit} attributes={attributes} />
    </>
  );
}
