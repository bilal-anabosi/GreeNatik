import FormGenerator from './FormGenerator'
import * as yup from 'yup'
import {useNavigate } from 'react-router-dom';

const attributes = [
    {
        id: 'verify-code',
        name: 'verifyCode',
        label: 'verify code',
        type: 'text',
        validation: yup.string().required("code is required").min(4,"must be at least 4 char").max(5,"max is 5"),
    },
]

export default function VerifyForm() {
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        navigate('/set-password');
    }

    return (
        <FormGenerator onSubmit={onSubmit} attributes={attributes} />
    )
}
