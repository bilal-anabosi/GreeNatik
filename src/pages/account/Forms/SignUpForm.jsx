import FormGenerator from './FormGenerator'
import * as yup from 'yup'

const attributes = [
    {
        id: 'name',
        name: 'name',
        label: 'Name',
        type: 'text',
        validation: yup.string().required('Required'),
    },
    {
        'id':'role',
        'name':'role',
        'label':'Role',
        'type':'select',
        'options':[
            {value:'admin',label:'Admin'},
            {value:'user',label:'User'}
        ],
        validation:yup.string().required('Required'),
    },
    {
        id: 'email',
        name: 'email',
        label: 'email',
        type: 'text',
        validation: yup.string().email('Invalid email').required('Required'),
    },
    {
        name: 'password',
        id: 'password',
        label: 'password',
        type: 'password',
        validation: yup.string().required("password is required").min(3,"must be at least 3 char").max(20,"max is 20")
    },
    

]

export default function SignUpForm() {
    const handleSubmit = (values) => {
        console.log(values)
    }
    return (
        <FormGenerator attributes={attributes} onSubmit={handleSubmit} />
    )
}