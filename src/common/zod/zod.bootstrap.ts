import { z } from 'zod';
import { createZodDto } from '@wahyubucil/nestjs-zod-openapi'

// Add custom error messages
z.setErrorMap((issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.expected === 'string') {
      return { message: 'This field must be a string' };
    }
    if (issue.expected === 'number') {
      return { message: 'This field must be a number' };
    }
  }
  if (issue.code === z.ZodIssueCode.too_small) {
    if (issue.type === 'string') {
      return { message: `This field must be at least ${issue.minimum} characters` };
    }
    if (issue.type === 'number') {
      return { message: `This field must be at least ${issue.minimum}` };
    }
  }
  return { message: ctx.defaultError };
});

// Export for convenience
export { z, createZodDto }; 