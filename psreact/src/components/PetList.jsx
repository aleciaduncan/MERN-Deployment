import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const PetList = props => {
    //
    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(response => setAllPets(response.data.results))
            .catch(err => console.log("Error:", err))
    }, [])
    
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                <tbody>
                    { allPets.map( (pet, idx) => 
                    <tr key={idx}>
                        <td>{pet.name}</td>
                        <td>{pet.type}</td>
                        <td>
                            <Link to={'/pets/' + pet._id}>details</Link> | 
                            <Link to={"/pets/" + pet._id + "/edit"}>edit</Link>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default PetList;
