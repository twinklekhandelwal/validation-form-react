import React from 'react';
import './index.css';
// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 10,
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


  class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName: '',

			lastName: null,
			email: '',
			password: '',
			firstNameerror: '',
			lastNameerror: '',
			emailerror: '',
			passworderror: '',
		};
	}
	handelChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	validate = () => {
		let firstNameError = '';
		let lastNameError = '';
		let passworderror = '';
		let emailerror = '';
		const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (this.state.firstName.length < 6) {
			firstNameError = 'atleast 5 letter should be there';
			
		}
		if (this.state.password.length < 8) {
			passworderror = 'weak password';
			console.log(this.state.password.length);
		}
		if (!validEmailRegex.test(this.state.password.email)) {
			emailerror = 'Invalid email';
		}
		if (this.state.lastName === null) {
			lastNameError = 'empty string';
		}
		console.log(this.state.lastName)
		if (
			(firstNameError && passworderror && emailerror && lastNameError) ||
			(firstNameError || passworderror || lastNameError || emailerror)
		) {
			this.setState({ firstNameError, passworderror, emailerror,lastNameError });
			return false;
		}
		return true;
	};
	handleSubmit = e => {
		e.preventDefault();
		 this.validate();
		// if (err) {
		// 	console.log(this.state)
		// }
	};
render(){
  
			
      return (
        // <form  onSubmit={this.handleSubmit}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={styles.paper}>
            {/* <Avatar className={styles.avatar}>
              <LockOutlinedIcon />
            </Avatar> */}
            
            <form className={styles.form} noValidate onSubmit={this.handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="firstName"
                label="firstName"
                type="text"
                id="firstName"
                autoComplete="current-password" value={this.state.firstName}
                 			onChange={e => this.handelChange(e)}
              />
              <div>{this.state.firstNameError}</div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus  value={this.state.email} onChange={e => this.handelChange(e)} 
              />
              <div>{this.state.emailerror}</div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password" value={this.state.password}
                 			onChange={e => this.handelChange(e)}
              />
              <div>{this.state.passworderror}</div>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={styles.submit}
              >
                submit
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
        // </form>
      );
    }
    
   }
  

   export default withStyles(styles)(Form);
