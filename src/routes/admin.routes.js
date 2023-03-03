import express from 'express';
import * as adminController from '../controllers/admin.controller.js';
import CourseExistingHandler from "../utils/credentialsHandlers/courseExisting.handler.js";

export const adminRouter = express.Router();

adminRouter.get('/users', adminController.getUsers);

adminRouter.post('/roles/new', adminController.createRoles);

adminRouter.get('/users/:id', adminController.getSelectedUser);

adminRouter.delete('/users/:id', adminController.deleteSelectedUser);

adminRouter.patch('/users/:id', adminController.updateUserClaims);

adminRouter.patch('/users/:id/courses', CourseExistingHandler, adminController.signUpForTheCourse);
