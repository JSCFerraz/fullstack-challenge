import * as yup from "yup";

export const searchFormSchema = yup.object().shape({
  searchString: yup.string(),
});
