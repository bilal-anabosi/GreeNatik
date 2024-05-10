const userModel = require('../models/usermodel.js'); 

async function profile(req, res) {
    try {
        
        const user = await userModel.findById(req.user.id);
        return res.json({ message: "Success", user });
    } catch (error) {
        return res.json({ message: "Error fetching profile" });
    }
}

module.exports = { profile};