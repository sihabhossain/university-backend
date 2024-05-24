import studentValidationSchema from '../student/student.validation';
import { UserServices } from './user.service';

//student controller
const createStudent = async (req: Request, res: Response) => {
  try {
    const {password, student: studentData } = req.body;

    // data validation using zod
    const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(password, studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};
