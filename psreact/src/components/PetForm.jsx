import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from '@reach/router';

const PetForm = () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const navigate = useNavigate();
    
    const [petErrors, setPetErrors] = useState("");
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/pets', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3,
        })
            .then(res=>{
                console.log(res);
                navigate('/');})
            .catch(err=>{
                console.log(err.response);
                setPetErrors(err.response.data.error);                
            })
            
    }
    return (
        <div>
            
            <form onSubmit={onSubmitHandler}>   
                <div className="info">
                    <p>
                        <label>Pet Name:</label><br/>
                        <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                        { petErrors.name ? <p>{petErrors.name.message}</p> : "" }
                    </p>
                    <p>
                        <label>Pet Type:</label><br/>
                        <input type="text" onChange={(e)=>setType(e.target.value)} value={type}/>
                        { petErrors.type ? <p>{petErrors.type.message}</p> : "" }
                    </p>
                    <p>
                        <label>Pet Description:</label><br/>
                        <textarea onChange={(e)=>setDescription(e.target.value)} value={description}/>
                        { petErrors.description ? <p>{petErrors.description.message}</p> : "" }
                    </p>
                </div>
                <div className="skills">
                    <h3>Skills (optional):</h3>
                    <p>
                        <label>Skill 1:</label><br/>
                        <input type="text" onChange={(e)=>setSkill1(e.target.value)} value={skill1}/>
                    </p>
                    <p>
                        <label>Skill 2:</label><br/>
                        <input type="text" onChange={(e)=>setSkill2(e.target.value)} value={skill2}/>
                    </p>
                    <p>
                        <label>Skill 3:</label><br/>
                        <input type="text" onChange={(e)=>setSkill3(e.target.value)} value={skill3}/>
                    </p>
                </div>
                <input type="submit" value="Add Pet"/>
        </form>
        </div>
        
    )
}

export default PetForm;
