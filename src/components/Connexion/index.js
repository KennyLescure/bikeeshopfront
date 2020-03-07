import React from 'react';

import {Button} from 'react-bootstrap';

class Connexion extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        alert('Bienvenue sur eBikeCom');
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({email: event.target.email});
        this.setState({password: event.target.password});
    }

    render() {
        return (
            <div className="container ">
                <form onSubmit = { this.handleSubmit } >
                    <div className="form-group">
                        <label htmlFor="Email">
                            Email : 
                        </label>
                        <input type="email" id="Email" className="form-control" placeholder="Email" value={ this.state.email } onChange={ this.handleChange }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">
                            Mot de passe : 
                        </label>
                        <input type="password" id="Password" className="form-control" placeholder="Mot de passe" value={ this.state.password } onChange={ this.handleChange }/>
                    </div>
                    <Button type="submit" className="btn btn-success">Valider</Button>
                </form>
            </div>
        );
    }
}

export default Connexion