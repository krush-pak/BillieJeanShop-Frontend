import React from 'react'
import axios from 'axios';
import {Button, Form, FormControl} from "react-bootstrap"

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: 'test@test.educ',
            pass: 'test1'
        }
    }

    handleSubmit = (data) => {
        console.log('go')


        axios.post('http://localhost:9000/api/auth/login', {
            email: 'test@test.educ',
            password: 'test1',
        })
            .then(function (response) {
                console.log('response', response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render () {
        return (
            <div>
                <Form inline onSubmit={e => this.handleSubmit(e)}>
                    {/*<FormControl type="email" name='email' placeholder="Email" className="mr-sm-2" />*/}
                    {/*<FormControl type="password" name='password' placeholder="Password" className="mr-sm-2" />*/}
                    <Button
                        type='submit'
                        variant="outline-success"
                    >Login</Button>
                </Form>
            </div>
        )
    }
}

export default LoginForm
