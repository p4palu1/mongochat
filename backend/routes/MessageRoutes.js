import express from "express"
import { getMessages, createMessage } from "../controllers/MessageControllers.js"

const router = express.Router()

router.get('/', getMessages)
    .post('/', createMessage)

export default router