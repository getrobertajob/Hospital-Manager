import { model, Schema } from "mongoose"

const PatientDB = new Schema(
    {
        age : {
            type : Number,
            required : [ true, "A patient's age is required!" ],
            min : [ 1, "Patient's age must be at least 1."],
            max : [ 140, "Patient's age must be 140 or less."]
        }, 
        name : {
            type : String,
            required : [ true, "A patient's name is required!" ],
            minLength : [ 1, "Patient's age must be at least 1 character long."],
            maxLength : [ 40, "Patient's name must be 40 or less characters."]
        }, 
        symptoms : {
            type : String,
            required : [ true, "A patient's symptoms are required!" ],
            minLength : [ 4, "Patient's symptoms must be at least 4 characters long."],
            maxLength : [ 255, "Patient's symptoms must be less than 256 characters."]
        }, 
    }, 
    { timestamps : true}
)

const Patient = model('Patient', PatientDB)
export default Patient