import { z } from 'zod';

const user = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required!',
    }),
    email: z.string({
      required_error: 'Species is required!',
    }),
    password: z.string({
      required_error: 'Breed is required!',
    }),
    confirmPassword: z.string({
      required_error: 'Breed is required!',
    }),
    role: z.string({}).optional(),
  }),
});

export const userValidation = {
  user,
};
