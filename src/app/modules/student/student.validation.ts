import { z } from 'zod';

// UserName schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, 'First name must be at most 20 characters long')
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      'First name must be capitalized',
    )
    .refine((value) => value.length > 0, 'First name is required'),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .refine((value) => value.length > 0, 'Last name is required'),
});

// Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z
    .string()
    .refine((value) => value.length > 0, 'Father name is required'),
  fatherOccupation: z
    .string()
    .refine((value) => value.length > 0, 'Father occupation is required'),
  fatherContactNo: z
    .string()
    .refine((value) => value.length > 0, 'Father contact number is required'),
  motherName: z
    .string()
    .refine((value) => value.length > 0, 'Mother name is required'),
  motherOccupation: z
    .string()
    .refine((value) => value.length > 0, 'Mother occupation is required'),
  motherContactNo: z
    .string()
    .refine((value) => value.length > 0, 'Mother contact number is required'),
});

// LocalGuardian schema
const localGuardianValidationSchema = z.object({
  name: z
    .string()
    .refine((value) => value.length > 0, 'Local guardian name is required'),
  occupation: z
    .string()
    .refine(
      (value) => value.length > 0,
      'Local guardian occupation is required',
    ),
  contactNo: z
    .string()
    .refine(
      (value) => value.length > 0,
      'Local guardian contact number is required',
    ),
  address: z
    .string()
    .refine((value) => value.length > 0, 'Local guardian address is required'),
});

// Student schema
const studentValidationSchema = z.object({
  id: z.string().refine((value) => value.length > 0, 'Student ID is required'),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'Gender is required',
  }),
  dateOfBirth: z.string().optional(),
  email: z
    .string()
    .email('Invalid email format')
    .refine((value) => value.length > 0, 'Email is required'),
  contactNo: z
    .string()
    .refine((value) => value.length > 0, 'Contact number is required'),
  emergencyContactNo: z
    .string()
    .refine(
      (value) => value.length > 0,
      'Emergency contact number is required',
    ),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z
    .string()
    .refine((value) => value.length > 0, 'Present address is required'),
  permanentAddress: z
    .string()
    .refine((value) => value.length > 0, 'Permanent address is required'),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});

// Export the Student Zod schema
export default studentValidationSchema;
