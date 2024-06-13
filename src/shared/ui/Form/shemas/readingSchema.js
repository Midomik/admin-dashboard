import * as yup from 'yup';

export const readingSchema = (maxPages) => {
  return yup.object().shape({
    page: yup
      .number()
      .min(1, 'Page number is required!')
      .max(maxPages, `Page number cannot exceed ${maxPages ?? ''}!`),
  });
};
