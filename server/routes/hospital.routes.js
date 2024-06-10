import { 
    GetAllPatients, 
    CreatePatients,
    GetPatientByID,
    UpdatePatientByID,
    DeletePatientByID
} from "../controllers/hospital.controller.js";
import { Router } from "express";

const router = Router();

router.route('/patients')
    .get( GetAllPatients )
    .post( CreatePatients )

router.route('/patient/:id')
    .get ( GetPatientByID )
    .put ( UpdatePatientByID )
    .delete ( DeletePatientByID )

    
export default router;