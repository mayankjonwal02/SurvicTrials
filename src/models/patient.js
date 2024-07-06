const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    patient_trial_number: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    citycode: {
        type: String,
        required: true
    },
    submittedBy: {
        type: String,
        required: true
    },
    createdon: {
        type: Date
    },
    updatedon: {
        type: Date
        
    },
    data: [
        {
            question: String,
            answer: String,
            questionId: String,
            updates: [
                {
                    updatedBy: String,
                    updatedOn: {
                        type: Date
                    },
                    answer: String,
                }
            ]
        }
    ]
});
const db = mongoose.connection.useDb('SurvicTrial');
const Patient = db.model('PatientData',patientSchema)

module.exports = Patient