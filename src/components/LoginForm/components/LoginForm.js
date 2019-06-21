import React from 'react'
import axios from 'axios';
import {Button, Form, FormControl} from "react-bootstrap"

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: 'test@test.educ',
            pass: 'test1'
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const url = 'http://localhost:9000/api/auth/login';

        axios.post(url, {
            "email": this.state.email,
            "password": this.state.pass,
        })
        .then((response) => {
            this.setState({ name: response.data.user.name})
            console.log('response.data.user', response.data.user);
        })
        .catch((error) => {
            console.log('error',error);
        });

        return false;
    }

    render () {
        return (
            <div>
                {this.state.name !== ''
                    ? <h3>Hello <strong>{this.state.name}</strong></h3>
                    : <Form inline onSubmit={e => this.handleSubmit(e)}>
                        <FormControl type="email" name='email' placeholder="Email" className="mr-sm-2" />
                        <FormControl type="password" name='password' placeholder="Password" className="mr-sm-2" />
                        <Button
                            type='submit'
                            variant="outline-success"
                        >Login</Button>
                    </Form>
                }
            </div>
        )
    }
}

export default LoginForm
