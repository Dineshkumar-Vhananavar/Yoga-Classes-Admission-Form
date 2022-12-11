import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().min(2).required("Please enter your name "),
  age: Yup.number().min(18,"You must be at least 18 years").max(65,"You must be at most 65 years").required("Please enter your age"),
  time: Yup.string().required("Please select the batch")
});
