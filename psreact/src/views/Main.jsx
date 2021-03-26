import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import PetList from '../components/PetList';
const Main = () => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
            .then(res=>{
                setPet(res.data);
                setLoaded(true);
            })       
    }, []);
    const removeFromDom = petId => {
        setPet(pet.filter(pet => pet._id !== petId));
    }
    return (
        <div>
            <header>
                <div className="headertext">
                    <h1>Pet Shelter</h1>
                    <h2>These pets are looking for their furever home</h2>
                </div>
                <div className="headerlinks">
                    <Link to="pets/new">add a pet to the shelter</Link></div>
            </header>
            {loaded && <PetList pet={pet} removeFromDom={removeFromDom}/>}
        </div>
    )
}
export default Main;



// removeFromDom={removeFromDom}




