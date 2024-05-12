import FormGenerator from './FormGenerator';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  username: '',
  email: '',
  password: '',
  role: '',
};

const SignUpForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (userData) => {
    try {
      const { data,status} = await axios.post(`http://localhost:4000/user/signup`, userData);

      if (status === 201) {
        toast.success('Account Created Successfully, make sure to verify your email', {
          position: 'top-right',
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });

        // Navigate based on selected role
        console.log(data.user)
        if (data.user.role === 'admin') {
          navigate('/all-posts');
        } else {
          navigate('/store');
        }
      }else if(status === 401){
        toast.error(data.message)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const attributes = [
    {
      id: 'name',
      name: 'username',
      label: 'Username',
      type: 'text',
      validation: yup.string().required('Required'),
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'text',
      validation: yup.string().email('Invalid email').required('Required'),
    },
    {
      name: 'password',
      id: 'password',
      label: 'Password',
      type: 'password',
      validation: yup.string().required('Password is required').min(3, 'Must be at least 3 characters').max(20, 'Maximum length is 20 characters'),
    },
    {
      id: 'role',
      name: 'role',
      label: 'Role',
      type: 'select',
      options: [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
      ],
      validation: yup.string().required('Required'),
    },
  ];

  return <FormGenerator attributes={attributes} onSubmit={onSubmit} />
};

export default SignUpForm;
