import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VerifyForm from '../Forms/VerifyForm.jsx';
export default function VerifyPage() {
    return (
        
        <Container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            
            gap: 2
        }}>
            <div className='row'>
            <div className='col-md-6'>
            
            <Stack sx={{
                gap: 2,
                marginTop:'50px'
            }}>
                <Link component={RouterLink} to='/login' underline='none' sx={{fontSize:'15px' ,color:'black'}}>
                    <ArrowBackIosIcon sx={{fontSize:'15px'}}/>
                    TO LOGIN
                </Link>
                <Typography variant="h3" component="h1" >
                    Verify Code
                </Typography>
                
                <Typography variant="body1" gutterBottom style={{color:'#5F6C74', fontSize:'16px'}} >
                    An authentication code has been sent to your email. Please enter the code below.
                </Typography>

                <VerifyForm/>
                
                <Typography variant="body2" gutterBottom textAlign='center'>
                    the code is not received?
                    <Link component={RouterLink} to='/verify' style={{color:'red', textDecoration:'none'}}>
                        Resend
                    </Link>

                </Typography>

            </Stack>
            </div>
            <img  src='/public/img/man playing dress up with pet dog.png' className='col-md-6 mt-5'/>
            </div>
        </Container>
    )
}
