import FormGenerator from './FormGenerator'
import * as yup from 'yup'

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
        validation: yup.string().required("password is required").min(3,"must be at least 3 char").max(20,"max is 20")
    }
]

export default function LoginForm() {
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <FormGenerator onSubmit={onSubmit} attributes={attributes}/>
    )
}