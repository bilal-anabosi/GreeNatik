const userModel = require('../models/usermodel.js'); 
const cloudinary= require('../utilts/cloudenary.js');
const path = require('path');
const fs = require('fs');
async function getProfile(req, res) {
    try {

        const {id} = req.user
        const user = await userModel.findById(id);
        return res.json({ message: "Success", user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error fetching profile" });
    }
}
const editProfile = async (req, res, next) => {
    try {
        const imgData = req.file; 
        const { username, address, email } = req.body;
        const { id } = req.user;
        console.log(imgData)

        
        const user = await userModel.findById(id);
        const serverUrl = req.protocol + '://' + req.get('host')

        
        user.username = username;
        user.address = address;
        user.email = email;
        if(imgData){

            user.image = {secure_url: `${serverUrl}/${imgData.filename}`}
        }
        
        await user.save();

       
        res.status(200).json({ message: 'Profile updated successfully',data:user });
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { getProfile,editProfile };
