import { Avatar, Button, Checkbox, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RegistrationForm = ()=>{
  const paperStyle={padding:"30px 20px" , width:300 , margin:"20px auto" }
  const headerStyle={margin:0}
  const marginTop={margin:5}
  
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar>
      

          </Avatar>
          <h1 style={headerStyle}>Registration</h1>
          <Typography variant='caption'> Please fill the form to create an account</Typography>
        </Grid>
       
       <form>
        <TextField fullWidth label ="Name" placeholder="Enter your name"/>

        <FormControl component="fieldset" style={marginTop}>
          <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" >
              <FormControlLabel value="female" control={<Radio/>} label="female"></FormControlLabel>
              <FormControlLabel value="male" control={<Radio/>} label="male"></FormControlLabel>
            </RadioGroup>

        </FormControl>



  
    


        <TextField fullWidth label ="phoneNmuber"  placeholder="Enter your PhoneNumber"/>
        <TextField fullWidth label ="Email" placeholder="Enter your Email"/>
        <TextField fullWidth label ="Password" placeholder="Enter your Password"/>
        <TextField fullWidth label ="Confirm Password" placeholder="Enter your Confirm password"/>
        <FormControlLabel control={<Checkbox name="checkbox"/>} label ="I accept the term and conditions"></FormControlLabel>

        <Button type="submit" variant="contained" color="primary" >Register</Button>

        
 
        
       </form>
      </Paper>
    </Grid>
  )
}

export default RegistrationForm;