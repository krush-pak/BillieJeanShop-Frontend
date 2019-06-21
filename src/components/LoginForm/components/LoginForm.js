import React from 'react'
import axios from 'axios';
import {Button, Form, FormControl} from "react-bootstrap"

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            validated: false,
            email: 'test@test.educ',
            pass: 'test1'
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        console.log('e.currentTarget', form)
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {

            const url = 'http://localhost:9000/api/auth/login';

            axios.post(url, {
                "email": form.email.value,
                "password": form.password.value,
            })
            .then((response) => {
                this.setState({ name: response.data.user.name})
                console.log('response.data.user', response.data.user);
            })
            .catch((error) => {
                console.log('error',error);
            });
        }
        this.setState({ validated: true });
        return false;
    }

    render () {
        const { validated } = this.state;
        return (
            <div>
                {this.state.name !== ''
                    ? <h3>Hello <strong>{this.state.name}</strong></h3>
                    : <Form noValidate
                            validated={validated} inline onSubmit={e => this.handleSubmit(e)}>
                        <FormControl type="email" name='email' placeholder="Email" className="mr-sm-2" required />
                        <FormControl type="password" name='password' placeholder="Password" className="mr-sm-2"  required />
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
