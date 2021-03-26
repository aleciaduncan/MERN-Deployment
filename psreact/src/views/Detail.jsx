import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
const Detail = props => {
    const [pet, setPet] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + props.id)
            .then(res => setPet(res.data.results))
    }, [])
    
    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pets/' + petId)
            .then(petId => petId)
            navigate('/')
    }

    return (
        <div>
            <header>
                <div className="headertext">
                    <h1>Pet Shelter</h1>
                    <h2>Details about: {pet.name}</h2>
                </div>
                <div className="headerlinks">
                    <Link to={'/'}>back to home</Link>
                    <button onClick={(e) => {deletePet(pet._id)}}>Adopt {pet.name} </button>
                </div>
            </header>
            <div className="petdetails">
                <table className="petdetails">
                    <tbody>
                        <tr>
                            <td>Pet Type:</td>
                            <td>{pet.type}</td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>{pet.description}</td>
                        </tr>
                        <tr>
                            <td>Skills:</td>
                            <td>
                                <p>{pet.skill1}</p>
                                <p>{pet.skill2}</p>
                                <p>{pet.skill3}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Detail;