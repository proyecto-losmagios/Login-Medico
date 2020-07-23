import React, {Component} from 'react';
import './RegistrationForm.css'

class RegistrationForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            email: '',
            especialidad: ''
        };
    }

    render(){
       return(
            <div className = 'card'>
                <form className = 'card-body'>
                    <div className = 'form-group'>
                        <input type = 'text' name = 'nombre' className = 'form-control' placeholder = 'Nombre'></input>
                    </div>
                    <div className = 'form-group'>
                        <input type = 'text' name = 'apellido' className = 'form-control' placeholder = 'Apellido'></input>
                    </div>
                    <div className = 'form-group'>
                        <input type = 'email' name = 'email' className = 'form-control' placeholder = 'example@email.com'></input>
                    </div>
                    <div className = 'form-group'>
                        <input type = 'text' name = 'especialidad' className = 'form-control' placeholder = 'Especialidad'></input>
                    </div>
                </form>
            </div>
       );
    }

}

export default RegistrationForm;