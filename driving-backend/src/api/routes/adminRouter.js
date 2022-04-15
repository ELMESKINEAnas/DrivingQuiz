import express from "express";
const router = express.Router();

import {
    createAdmin,
    authenticate,
    getAllUserAdmis,

} from "../controllers";


router.post("/createAdmin", createAdmin);
router.post("/authenticate", authenticate);
router.get("/getAllUserAdmis", getAllUserAdmis);


export {router}
