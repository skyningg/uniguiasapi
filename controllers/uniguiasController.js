const uniguias = require('../models/uniguias');

exports.createUniversity = async (req, res) => {
  try {
    const university = new uniguias(req.body);
    const savedUniversity = await university.save();
    res.status(201).json(savedUniversity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUniversities = async (req, res) => {
  try {
    const universities = await uniguias.find();
    res.status(200).json(universities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUniversityById = async (req, res) => {
  try {
    const university = await uniguias.findById(req.params.id);
    if (!university) {
      return res.status(404).json({ error: "Universidad no encontrada" });
    }
    res.status(200).json(university);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUniversity = async (req, res) => {
  try {
    const university = await uniguias.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!university) {
      return res.status(404).json({ error: "University not found" });
    }
    res.status(200).json(university);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUniversity = async (req, res) => {
  try {
    const university = await uniguias.findByIdAndDelete(req.params.id);
    if (!university) {
      return res.status(404).json({ error: "Universidad no encontrada" });
    }
    res.status(200).json({ message: "Universidad eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*exports.createDegree = async (req, res) => {
  try {
    const degree = new uniguias(req.body);
    const savedDegree = await degree.save();
    res.status(201).json(savedDegree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDegrees = async (req, res) => {
  try {
    const degrees = await uniguias.find();
    res.status(200).json(degrees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDegreeById = async (req, res) => {
  try {
    const degree = await uniguias.findById(req.params.id);
    if (!degree) {
      return res.status(404).json({ error: "Degree not found" });
    }
    res.status(200).json(degree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDegree = async (req, res) => {
  try {
    const degree = await uniguias.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!degree) {
      return res.status(404).json({ error: "Degree not found" });
    }
    res.status(200).json(degree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDegree = async (req, res) => {
  try {
    const degree = await uniguias.findByIdAndDelete(req.params.id);
    if (!degree) {
      return res.status(404).json({ error: "Degree not found" });
    }
    res.status(200).json({ message: "Degree deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};*/
