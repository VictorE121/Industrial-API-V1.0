import mongoose from "mongoose";

const machineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'maintenance', 'failsure'],
        default: 'active'
    },
    location: {
        type: String
    }
}, {
    timestamps: true
});

export default mongoose.model('Machine', machineSchema);