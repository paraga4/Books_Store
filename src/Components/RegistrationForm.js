import {React,useState} from 'react'
import { TextField, Button, Grid } from '@mui/material'
import {useStyles} from './LoginCss'
import InputAdornment from '@mui/material/InputAdornment';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { postData } from '../services';
import Swal from 'sweetalert2';




export default function RegistrationForm() {
    const classes= useStyles();
     const[fname,setFname]= useState('')
     const[lname,setLname]= useState('')
     const[mail,setMail]= useState('')
     const[pwd,setPwd]= useState('')

     const handleClick=async()=>
     {
        var body={firstname:fname,lastname:lname,emailid:mail,password:pwd}
        var response= await postData('login/addnewuser',body,false)

        if(response.status)
        {
        Swal.fire({
             position: 'center',
             icon: 'success',
             title: 'Successfully Registered',
             showConfirmButton: false,
             timer: 1500
           })
       }
       else
       {
  
             Swal.fire({
                   position: 'center',
                   icon: 'success',
                   title: 'Registration Failed',
                   showConfirmButton: false,
                   timer: 1500
                 })
  
        

     }
    }

    return (
        <div className={classes.root}>
            <div className={classes.subdiv}>
             
             <Grid container spacing={1}>
                <Grid item xs={12}>
                      <div className={classes.heading}>
                       Registration Form
                      </div>
                </Grid>

                <Grid item xs={12}>
                <TextField
        id="input-with-icon-textfield"
        label="First Name."
        onChange={event=>setFname(event.target.value)}
        fullWidth
        style={{marginTop:25}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
       // required
      />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Last Name."
                        onChange={event => setLname(event.target.value)}
                        fullWidth
                        style={{marginTop:25}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        required
                    />
                </Grid>
  
                <Grid xs={12} style={{marginTop:20}}>

                <TextField
                  id="input-with-icon-textfield"
                  label="Email ID"
                  fullWidth
                  onChange={(event) => setMail(event.target.value)}
                  style={{marginTop:25}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
            </Grid>

            <Grid item xs={12}>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Password"
                       type="password"
                        onChange={event => setPwd(event.target.value)}
                        style={{marginTop:25}}
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VisibilityIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        required
                       
                    />
                </Grid>
                <Grid item xs={12} style={{display:'flex',alignItem:'center',justifyContent:'center',marginTop:10}}>
                <Button variant="contained" onClick={handleClick}>Submit</Button>
                </Grid>   
            </Grid>
            <p style={{textAlign:'center',marginTop:15}}>Already Have an Account <span><a href="Login">Sign In</a></span> </p>
            </div>

            <div>
              <img src="signup_image.png" width="500"/>
            </div>
            
        </div>
    
    )
}




