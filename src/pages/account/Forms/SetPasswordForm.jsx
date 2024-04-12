import FormGenerator from './FormGenerator'
import * as yup from 'yup'

const attributes = [
    {
        name: 'password',
        id: 'password',
        label: 'enter new password',
        type: 'password',
        validation: yup.string().required("password is required").min(3,"must be at least 3 char").max(20,"max is 20")
    },
    {
        id: 'check-password',
        name: 'checkPassword',
        label: 're-enter password',
        type: 'password',
        validation: yup.string().required('Required').oneOf([yup.ref('password'), null], 'Passwords must match'),
    }
]
export default function SetPasswordForm() {
    
    const onSubmit = (data) => {
        console.log(data);
        
    }
    return (
        <FormGenerator onSubmit={onSubmit} attributes={attributes}/>
    )
}
