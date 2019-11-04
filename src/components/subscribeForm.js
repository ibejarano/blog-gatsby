import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: '0 auto'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function SubscribeComponent({
    handleFirstNameChange,
    handleLasttNameChange,
    handleEmailChange,
    handleSubmit
    }) {
    
    const classes = useStyles();
    
    return (
        <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
            id="name"
            label="Nombre (opcional)"
            defaultValue=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={(e) => handleFirstNameChange(e.target.value) }
            />
            <TextField
            id="lastName"
            label="Apellido (opcional)"
            defaultValue=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={(e) => handleLasttNameChange(e.target.value) }
            />
            <TextField
            required
            id="outlined-required"
            label="E-mail"
            defaultValue=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={(e) => handleEmailChange(e.target.value) }
            />
            <Button type='submit' variant="outlined" size="medium" color="primary" className={classes.margin}>
            Suscribirse!
            </Button>
        </form>
        );
}


export default class SubscribeForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };
    }

    handleFirstNameChange(value){
        this.setState({
            firstName: value
        })
    }

    handleLastNameChange(value){
        this.setState({
            lastName: value
        })
    };

    handleEmailChange(value){
        this.setState({
            email: value
        })
    }
    
    _handleSubmit = async (e) => {
        e.preventDefault();
        const listFields = {
            FNAME: this.state.firstName,
            LNAME: this.state.lastName
        }
        const result = await addToMailchimp(this.state.email, listFields)
        // I recommend setting `result` to React state
        // but you can do whatever you want
        console.log(result)
      }
    

    render(){

    return (
        <SubscribeComponent 
        handleFirstNameChange={this.handleFirstNameChange.bind(this)}
        handleLasttNameChange={this.handleLastNameChange.bind(this)}
        handleEmailChange={this.handleEmailChange.bind(this)}
        handleSubmit={this._handleSubmit.bind(this)}
        />
        );
    }
}