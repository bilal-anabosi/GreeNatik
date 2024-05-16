import FormGenerator from './FormGenerator';
import * as yup from 'yup';
import { useContext } from 'react'; 
import { UserContext } from '../context/User.jsx';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'; 
import { toast } from 'react-toastify';
import axios from 'axios';

export default function LoginForm() {
  const navigate = useNavigate();
  let { userToken } = useContext(UserContext) || {};
  console.log(userToken)

  if (userToken) {
    navigate(-1);
  }

  

  const onSubmit = async (userData) => {
    try {
      const { data, status } = await axios.post(`http://localhost:4000/user/login`, userData);
      console.log(data);
  
      if (status === 200) {
        localStorage.setItem('userToken', data.token);
        toast.success('Log in is successful', {
          position: 'top-right',
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
  
        if (data.user && data.user.role === 'admin') { // Check if user object exists
          navigate('/all-posts');
        } else {
          navigate('/store');
        }
      }
       else if (status === 401) {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred during login');
    }
  };
  
  

  const attributes = [
    {
      name: 'email',
      id: 'email',
      label: 'email',
      type: 'text',
      validation: yup.string().email('Invalid email').required('Required'),
    },
    {
      id: 'password',
      name: 'password',
      label: 'Password',
      type: 'password',
      validation: yup.string().required('password is required').min(3, 'must be at least 3 char').max(20, 'max is 20'),
    },
  ];

  return <FormGenerator onSubmit={onSubmit} attributes={attributes} />;
}
