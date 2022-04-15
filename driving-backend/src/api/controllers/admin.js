import Admin from '../models/admin.js';
import userAdmis from '../models/userAdmis.js';
import jwt from 'jsonwebtoken';
const {
    genSaltSync,
    hashSync,
    compareSync
} = require("bcrypt");


// create admin
const createAdmin = (req, res) => {
    const {
        username,
        email,
        password
    } = req.body;
    Admin.findOne({ email }, (err, admin) => {
        if (err) {
            return res.status(500).json({
                message: "Internal server error"
            });
        }
        if (admin) {
            return res.status(400).json({
                message: "Admin already exists"
            });
        }
        const salt = genSaltSync(10);
        const hashedPassword = hashSync(password, salt);
        const newAdmin = new Admin({
            username: username,
            email : email,
            password: hashedPassword
        });
        newAdmin.save(async (err, admin) => {
            if (err) {
                return res.status(500).json({
                    message: "Internal server error"
                });
            }
            return res.status(201).json({
                message: "Admin created successfully",
                admin
            });
        });
    });
};





const authenticate = (req, res) => {
    Admin.findOne({
        email: req.body.email
    }, (err, admin) => {
        if (err) {
            return res.status(400).send(err);
        }
        if (!admin) {
            return res.status(400).send({
                message: "admin not found"
            });
        }
        if (!compareSync(req.body.password, admin.password)) {
            return res.status(400).send({
                message: "Invalid password or Email"
            });
        }
        const token = jwt.sign({
            admin
        }, process.env.SECRET_KEY_ADMIN, {
            expiresIn: "1h"
        });
        res.send({
            message: "admin authenticated",
            token
        });
    });
};

// get all userAdmis
const getAllUserAdmis = (req, res) => {
    userAdmis.find({}, (err, userAdmis) => {
        if (err) {
            return res.status(500).json({
                message: "Internal server error"
            });
        }
        if (!userAdmis) {
            return res.status(404).json({
                message: "No userAdmis found"
            });
        }
        return res.status(200).json({
            message: "UserAdmis retrieved successfully",
            userAdmis
        });
    });
};


export {
    createAdmin,
    authenticate,
    getAllUserAdmis
};
