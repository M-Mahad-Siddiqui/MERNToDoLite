import mongoose from "mangoose";

export const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true      
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})