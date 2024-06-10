import Patient from "../models/patient.model.js";

// return list of all patients
export const GetAllPatients = async(req, res) => {
    try{
        const PATIENT = await Patient.find()
        res.status(200).json(PATIENT)
    }
    catch(error){
        res.status(400).json(error)
    }
}

// return a single patient by ID
// takes in ID parameter
export const GetPatientByID = async(req, res, next) => {
    const { id } = req.params
    try{
        const PATIENT = await Patient.findById( id )
        res.status(200).json(PATIENT)
    }
    catch(error){
        res.status(400).json(error)
    }
}

// create new patient record
// takes in body as parameter
export const CreatePatients = async(req, res) => {
    try{
        const PATIENT = await Patient.create( req.body )
        res.status(201).json(PATIENT)
    }
    catch(error){
        res.status(400).json(error)
    }
}

// update an existing patient record
// takes in body as parameter
// reruns validators on new body
export const UpdatePatientByID = async(req, res, next) => {
    const { id } = req.params
    const options = {
        new: true,
        runValidators: true
    }
    try{
        const UPDATED = await Patient.findByIdAndUpdate( id, req.body, options )
        res.status(200).json(UPDATED)
    }
    catch(error){
        res.status(400).json(error)
    }
}

// delete existing patient record
// takes in ID as parameter
export const DeletePatientByID = async(req, res, next) => {
    const { id } = req.params
    const options = {
        new: true,
        runValidators: true
    }
    try{
        const DELETED = await Patient.findByIdAndDelete( id )
        res.status(200).json(DELETED)
    }
    catch(error){
        res.status(400).json(error)
    }
}