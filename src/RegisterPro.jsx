import React, { useState } from 'react';
import './RegisterPro.css';

function RegisterPro() {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        job: '',  // Ajout du champ métier
        gender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Ajoutez ici la logique de validation et de soumission du formulaire
    };

    return (
        <div className="registration-background">
        <div className="container">
            <div className="title">Registration</div>
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <div className="user-details">
                        {['fullName', 'username', 'email', 'phoneNumber', 'password', 'job'].map((item, index) => (
                            <div className="input-box" key={index}>
                                <span className="details">{item === 'job' ? 'Job' : item.split(/(?=[A-Z])/).join(" ")}</span>
                                <input
                                    type={item === 'password' ? 'password' : 'text'}
                                    placeholder={`Enter your ${item === 'job' ? 'Job' : item}`}
                                    required
                                    name={item}
                                    value={formData[item]}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="gender-details">
                        <input type="radio" name="gender" id="dot-1" value="Male" checked={formData.gender === 'Male'} onChange={handleChange}/>
                        <input type="radio" name="gender" id="dot-2" value="Female" checked={formData.gender === 'Female'} onChange={handleChange}/>
                        <input type="radio" name="gender" id="dot-3" value="Prefer not to say" checked={formData.gender === 'Prefer not to say'} onChange={handleChange}/>
                        <span className="gender-title">Gender</span>
                        <div className="category">
                            <label htmlFor="dot-1">
                                <span className="dot one"></span>
                                <span className="gender">Male</span>
                            </label>
                            <label htmlFor="dot-2">
                                <span className="dot two"></span>
                                <span className="gender">Female</span>
                            </label>
                            <label htmlFor="dot-3">
                                <span className="dot three"></span>
                                <span className="gender">Prefer not to say</span>
                            </label>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Register"/>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default RegisterPro;

