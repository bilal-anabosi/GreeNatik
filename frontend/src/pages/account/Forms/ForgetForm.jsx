import FormGenerator from './FormGenerator'
import * as yup from 'yup'
import {useNavigate } from 'react-router-dom';
const attributes = [
    {
        name: 'email',
        id: 'email',
        label: 'email',
        type: 'text',
        validation: yup.string().email('Invalid email').required('Required'),
    },
]

export default function ForgetForm() {
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        navigate('/verify');

    }

    return (
        <FormGenerator onSubmit={onSubmit} attributes={attributes}/>
    )
}
