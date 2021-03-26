const PetController = require('../controllers/pet.controllers');
module.exports = (app) => {
    //C - Create
    app.post('/api/pets', PetController.createPet);
    //R - Read
    //app.get('/api', PetController.index);
    app.get('/api/pets', PetController.getAllPets);
    app.get('/api/pets/:id', PetController.getPet);
    //U - Update
    app.put('/api/pets/:id', PetController.updatePet);
    //D - Destroy
    app.delete('/api/pets/:id', PetController.deletePet)

    
    
}
