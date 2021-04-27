import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

/*const initialFormState = {
    name: '',
    email: '',
    password: ''
}

const UserForm = () => {
    const[form, setForm] = useState(initialFormState)
    const[errors, setErrors] = useState({})
    
    const validate = async () => {
        try {
            await FormValidations.validate(form, {abortEarly: false})
            setErrors({})
        } catch (e) {
            if (e instanceof ValidationError){
                const errors = {}
                e.inner.forEach((key) => {
                    errors[key.path] = key.message
                })
                setErrors(errors)
            }
        }
    }

    const setInput = (newValue) => {
        setForm(form => ({... form, ...newValue}))
    }

    useEffect(() => {validate()}, [form])
*/

function Form(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cadastro, setCadastro] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()

        if (name && email && password){
            const user = { name, email, password }
            
            setCadastro((prevState) => {
                return [...prevState, cadastro]
            })

            setName('')
            setEmail('')
            setPassword('')
        }
    }

    return(
        <div id = ''>
            <style>{ '#form{ position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%) }' }</style>
            <h3 className = 'text-center bold'>Cadastro</h3>
            <form onSubmit = { handleSubmit }>
                <div className = 'form-group'>
                    <input
                        type = 'text'
                        className = 'form-control'
                        placeholder = 'nome'
                        id = 'name'
                        name = 'nome'
                        value = { name }
                        onChange = { (e) => setName(e.target.value) }
                    />
                </div>
                <div className = 'form-group'>
                    <input
                        type = 'text'
                        className = 'form-control'
                        placeholder = 'Email'
                        id = 'email'
                        name = 'email'
                        value = { email }
                        onChange = { (e) => setEmail(e.target.value) }
                    />
                </div>
                <div className = 'form-group'>
                    <input
                        type = 'text'
                        className = 'form-control'
                        placeholder = 'senha'
                        id = 'password'
                        name = 'password'
                        value = { password }
                        onChange = { (e) => setPassword(e.target.value) }
                    />
                </div>
                <div className = 'form-group text-center'>
                    <button type = 'submit' className = 'btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form