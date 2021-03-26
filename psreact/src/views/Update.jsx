import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate} from '@reach/router';

const Update = props => {
    const { id } = props;
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [petErrors, setPetErrors] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                //console.log(res);
                setName(res.data.results.name);
                setType(res.data.results.type);
                setDescription(res.data.results.description);
                setSkill1(res.data.results.skill1);
                setSkill2(res.data.results.skill2);
                setSkill3(res.data.results.skill3);
            })
    }, [])
    const updatePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pets/' + id, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
            .then(res => {
                console.log(res);
                navigate('/pets/' + id);})
            .catch(err=>{
                console.log(err.response);
                setPetErrors(err.response.data.error)              
            })
    }
    return (
        <div>
            <header>
                <div className="headertext">
                    <h1>Pet Shelter</h1>
                    <h2>Edit {name}</h2>
                </div>
                <div className="headerlinks">
                    <Link to={'/'}>back to home</Link>
                </div>
            </header>
            <form onSubmit={updatePet}>
                <p>
                    <label>Name:</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                    { petErrors.name ? <p>{petErrors.name.message}</p> : "" }
                </p>
                <p>
                    <label>Type:</label><br />
                    <input type="text" 
                    name="type"
                    value={type} 
                    onChange={(e) => { setType(e.target.value) }} />
                    { petErrors.type ? <p>{petErrors.type.message}</p> : "" }
                </p>
                <p>
                    <label>Description:</label><br />
                    <textarea  
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                    { petErrors.description ? <p>{petErrors.description.message}</p> : "" }
                </p>
                <p>
                    <label>Skill 1: </label><br />
                    <textarea  
                    name="skill1"
                    value={skill1} 
                    onChange={(e) => { setSkill1 (e.target.value) }} />
                </p>
                <p>
                    <label>Skill 2:</label><br />
                    <textarea  
                    name="Skill2"
                    value={skill2} 
                    onChange={(e) => { setSkill2(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 3:</label><br />
                    <textarea  
                    name="skill3"
                    value={skill3} 
                    onChange={(e) => { setSkill3(e.target.value) }} />
                </p>
                <input type="submit" value="Edit Pet"/>
            </form>
        </div>
    )
}

export default Update;
