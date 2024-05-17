import { Request, Response } from 'express';
import { StudentServices } from './student.service';

//student controller
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(id);

    res.status(200).json({
      success: true,
      message: 'single Student retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
