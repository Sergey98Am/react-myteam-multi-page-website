import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const required_message = "This field is required";

const schema = yup.object().shape({
  name: yup.string().required(required_message),
  email: yup
    .string()
    .email("Please use a valid email address")
    .required(required_message),
  company_name: yup.string().required(required_message),
  title: yup.string().required(required_message),
  message: yup.string().required(required_message),
});

const Form = () => {
  const {
    register,
    getFieldState,
    handleSubmit,
    formState: { errors, isDirty, dirtyFields, touchedFields, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
  };

  console.log(getFieldState("title").isDirty);

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="field_name mb-6">
          <input
            {...register("name")}
            className={`${errors.name?.message ? "field-error-color" : ""} ${
              getFieldState("name").isDirty ? "active-field" : ""
            }`}
            name="name"
            placeholder="Name"
            type="text"
          />
          <span className="field-error-text">{errors.name?.message}</span>
        </div>
        <div className="field_email mb-6">
          <input
            {...register("email")}
            className={`${errors.email?.message ? "field-error-color" : ""} ${
              getFieldState("email").isDirty ? "active-field" : ""
            }`}
            name="email"
            placeholder="Email Address"
            type="text"
          />
          <span className="field-error-text">{errors.email?.message}</span>
        </div>
        <div className="field_company_name mb-6">
          <input
            {...register("company_name")}
            className={`${
              errors.company_name?.message ? "field-error-color" : ""
            } ${getFieldState("company_name").isDirty ? "active-field" : ""}`}
            name="company_name"
            placeholder="Company Name"
            type="text"
          />
          <span className="field-error-text">
            {errors.company_name?.message}
          </span>
        </div>
        <div className="field_title mb-6">
          <input
            {...register("title")}
            className={`${errors.title?.message ? "field-error-color" : ""} ${
              getFieldState("title").isDirty ? "active-field" : ""
            }`}
            name="title"
            placeholder="Title"
            type="text"
          />
          <span className="field-error-text">{errors.title?.message}</span>
        </div>
        <div className="field_message mb-6">
          <textarea
            {...register("message")}
            className={`${errors.message?.message ? "field-error-color" : ""} ${
              getFieldState("message").isDirty ? "active-field" : ""
            }`}
            name="message"
            id=""
            placeholder="Message"
          ></textarea>
          <span className="field-error-text">{errors.message?.message}</span>
        </div>
        <button className="btn btn-secondary">submit</button>
      </form>
    </div>
  );
};

export default Form;
