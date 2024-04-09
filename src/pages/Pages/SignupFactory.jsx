import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import SignInWithGoogle from '../SignInWithGoogle.jsx';
import SignupFactoryForm from '../Forms/SignupFactoryForm.jsx';

export default function SignupFactory() {
    return (
        
        <Container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
           
            gap: 2,
            marginTop:'50px'
        }}>

            <div className="row">
            
            <img height={400} width={500} src='/public/img/Group 2.png' className='col-md-6 pe-5'/>
            

            <div className='col-md-6'>
            <Stack sx={{
                gap: 2,
               
            }}>
                <Typography variant="h4" component="h1" >
                    Sign UP
                </Typography>
                
                <Typography variant="body1" gutterBottom style={{color:'#5F6C74', fontSize:'15px'}} >
                sign up to enjoy the feature of GreeNtik
                </Typography>

                <Link component={RouterLink} to='/sign-up' style={{textDecoration: "none"}} >
                    Signup user
                </Link>

                <div style={{width:'300px'}}>
                <SignupFactoryForm/>

                </div>

               
                <Divider>
                    OR
                </Divider>

                <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                <SignInWithGoogle/>
                </div>

                
                
                <Typography variant="body2" gutterBottom textAlign='center'>
                    Already have an account?
                    <Link component={RouterLink} to='/login' style={{textDecoration: "none"}} >
                        Login
                    </Link>
                </Typography>
               
            </Stack>
            </div>
            </div>
        </Container>
    )
}
