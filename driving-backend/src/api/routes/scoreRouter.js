import express from "express";
const router = express.Router()


import {
    createUserAdmis,
} from "../controllers";


router.post("/createUserAdmis", createUserAdmis);

export {router}