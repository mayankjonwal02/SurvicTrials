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
        type: String
    },
    updatedon: {
        type: String
        
    },
    patientName: {
        type: String
    },
    consentTakenBy: {
        type: String
    },
    investigatorName: {
        type: String
    },
    data: [
        {
            question: String,
            answer: String,
            questionId: String,
            questionType: String,
            subParts:{
                type:[
                {
                    s_question: String,
                    s_answer: String
                }],
                default: []
            },
            updates: [
                {
                    updatedBy: String,
                    updatedOn: {
                        type: String
                    },
                    answer: String,
                }
            ]
        }
    ]
});
const db = mongoose.connection.useDb('SurvicTrial');
const Patient = db.model('Patient',patientSchema)

module.exports = Patient