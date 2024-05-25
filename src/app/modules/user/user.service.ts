import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create user object
  const userData: Partial<TUser> = {
    password: password || (config.default_pass as string),
    role: 'student',
    id: '2030100001',
  };

  // create a user
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id; //embedding id
    studentData.user = newUser._id; //reference id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }

  return newUser;
};

export const UserServices = {
  createStudentIntoDB,
};
