import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

// get all students
const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student retrived successfully',
      data: result,
    });
  } catch (error) {
    next();
  }
};

// get single student
const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single student retrived successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// delete student
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await StudentServices.deleteStudentFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student deletd successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
