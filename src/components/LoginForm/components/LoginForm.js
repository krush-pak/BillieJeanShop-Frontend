import React from 'react'
import axios from 'axios';
import {Button, Form, FormControl} from "react-bootstrap"
import auth from '../../../auth'

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

    componentDidMount () {
        const name = localStorage.getItem("username")
        const login = auth.getToken()
        console.log('name',name)
        console.log('login',login)
        console.log('document.cookie',document.cookie)
        if (name && login) {
            this.setState({ name})
        }
    }

    fetchUser = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const url = 'http://localhost:9000/api/auth/user';

        axios.get(url, { withCredentials: true })
        .then((response) => {
            console.log('response.data.message', response.data.message);
        })
        .catch((error) => {
            console.log('error',error);
        });

        return false;
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
            },
            { withCredentials: true })
            .then((response) => {
                localStorage.setItem("username", response.data.user.name);
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
                    ? <Form><h3>Hello <strong>{this.state.name}</strong></h3></Form>
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

                <Form>
                    <a href='/' onClick={e => this.fetchUser(e)}>check if i in</a>
                </Form>
            </div>
        )
    }
}

export default LoginForm
