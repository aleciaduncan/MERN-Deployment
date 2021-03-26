import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import PetForm from '../components/PetForm';


const New = () => {
    
    return (
        <div>
            <header>
                <div className="headertext">
                    <h1>Pet Shelter</h1>
                    <h2>Know a pet needing a home?</h2>
                </div>
                <Link to={'/'}>back to home</Link>
            </header> 
            <PetForm/>
        </div>
    )
}
export default New;




