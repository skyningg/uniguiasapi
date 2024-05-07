const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
	name: { type: String, required: true },
	state: { type: String, required: true },
	city: { type: String, required: true },
	ubicacion: { type: String, required: true },
	type: { type:String, required: true },
	modalidad: { type: String, required: true }
});
module.exports = mongoose.model('uniguias', universitySchema);
