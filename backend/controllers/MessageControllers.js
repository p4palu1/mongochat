import MessageModel from "../models/MessageModel.js"

export const getMessages = async (req, res) => {
    try {
        const messages = await MessageModel.find()

        console.log(messages)
        res.json(messages)
    }
    catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const createMessage = async (req, res) => {
    const message = req.body

    const newMessage = new MessageModel(message)

    try{
        await newMessage.save()
        
        res.status(201).json(newMessage)
    } catch(err) {
        res.status(409).json({ message: err.message })
    }
}