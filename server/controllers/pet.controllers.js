const express = require('express');
const  Pet  = require('../models/pet.models');


module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//C - Create 
module.exports.createPet = (req, res) => {
        Pet.exists({ name: req.body.name })
            .then(petExists => {
                if(petExists){
                    return Promise.reject({errors:{name:{message:"A pet with this name already exists at this shelter, please rename this new friend!"}}})
                } else {
                    return Pet.create( req.body )
                }
            })
            .then(pet => res.status(200).json({ message : "success", results: pet }))
            .catch(err => res.status(400).json({ message : "error" , error : err.errors}))
    
}

//R - Read
module.exports.getAllPets = (req, res) => {
    Pet.find({}).sort('type')
        .then(pets => res.status(200).json({ message : "success", results: pets }))
        .catch(err => res.status(400).json(err))
}
module.exports.getPet = (req, res) => {
    Pet.findOne({_id:req.params.id})
        .then(pet => res.status(200).json({ message : "success", results: pet }))
        .catch(err => res.status(400).json({ message : "error" , error : err.errors}))
}
//U - Update 
module.exports.updatePet = (req, res) => {
    Pet.findOne({ name : req.body.name })
        .then(pet => {
            if (!pet || (pet && pet._id == req.params.id)) {
                return Pet.findOneAndUpdate ({ _id: req.params.id}, req.body, { new: true, runValidator: true})
            } else {
                return Promise.reject({errors:{name:{message:"A pet with this name already exists at this shelter!"}}})
            }
        })
        .then(updatedPet => res.status(200).json({ message : "success", results: updatedPet }))
        .catch(err => {
            console.log(err);
            res.status(400).json({ message : "error" , error : err.errors})})
}


//D - Delete
module.exports.deletePet = (req,res) => {
    Pet.deleteOne({ _id : req.params.id})
        .then(deletedPet => res.status(200).json({ message : "success", results: deletedPet }))
        .catch(err => res.status(400).json({ message : "error" , error : err.errors}))
}