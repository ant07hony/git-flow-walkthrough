const Food = require('../models/Food')

module.exports = {

}

function create(req, res) {
    Food.create({})
    res.render('/new', { title: 'Alkaline Foods'})
}