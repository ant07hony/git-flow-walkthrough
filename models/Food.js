const mongoose = require('mongoose')

const Schema = mongoose.Schema



const alkFoodSchema = new mongoose.Schema ({
    
    vegetables: {type: String, enum:['Avocado', 'Asparagus', 'Cucumber', 'Green Banana', 'Mushrooms']},
    
    fruits: {type: String, enum: ['Apples', 'Berries', 'Oranges', 'Dates', 'Grapes']},
    
    nuts: {type: String, enum: ['Brazilian Nuts', 'Hemp Seeds', 'Sesame Seeds', 'Walnut']}
    
}, {
    timestamps: true
});

const Food = mongoose.model('Food', alkFoodSchema)

module.exports = {
    Food

}