import {React,useState} from 'react'
import Header1 from './Header1'
import { TextField, Button, Grid } from '@mui/material'
import {useStyles} from './LoginCss'
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RegistrationForm from './RegistrationForm';
import Home from './Home';
import { useNavigate} from 'react-router-dom';


function Login() {
    
    const classes= useStyles();
    const[email,setEmail]= useState('')
    const[pwd,setPwd]= useState('')
    const getEmail=localStorage.getItem("Email")
    const getPwd=localStorage.getItem("Password")
    var navigate = useNavigate()

    const handleClick=()=>
    {
     
    if(email=="paru8@gmail.com" && pwd=="paru8")
    {
        localStorage.setItem("Email",email)
        localStorage.setItem("Password",pwd)
        navigate("/products")
    }
    else{
         navigate("/registrationform")
    }
       
    }


  return (
    <>
     
      <Header1/>
      <div className={classes.root} style={{marginTop:50}}>
            <div className={classes.subdiv} style={{marginLeft:100}}>
             
             <Grid container spacing={1}>
                <Grid item xs={12}>
                      <div className={classes.heading}>
                     Sign In
                      </div>
                </Grid>

                
                <Grid xs={12} style={{marginTop:20}}>

                <TextField
                        id="input-with-icon-textfield"
                        label="Email-Id"
                        type="email"
                        onChange={event => setEmail(event.target.value)}
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                        required
                    />   
            </Grid>

            <Grid item xs={12}>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Password"
                       type="password"
                        onChange={event => setPwd(event.target.value)}
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VisibilityIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                        required
                       
                    />
                </Grid>
                <Grid item xs={12} style={{display:'flex',alignItem:'center',justifyContent:'center',marginTop:10}}>
                <Button variant="contained" onClick={handleClick}>Login</Button>
                </Grid>
            
            </Grid>
            </div>
            
            <div style={{marginTop:30,marginLeft:150}}>
                <img src="login_img.jfif" width="550"/>
            </div>
            
        </div>
      
    </>
  )
}

export default Login
