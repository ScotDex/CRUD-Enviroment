import express from "express"
import { createUser, getAllUsers, getUserByID, updateUser, deleteUser} from "../controller/userController.js"

const router = express.Router();


router.post("/user", createUser);
router.get("/user", getAllUsers);
router.get("/user/id", getUserByID);
router.put("/user/id", updateUser);
router.delete("/user/id", deleteUser);
router.get("/user/id", getUserByID);

export default router;
