import FormWrapper from "./FormWrapper";

const UserForm = () => {
  return (
    <FormWrapper title="User Details">
      <label>First Name </label>
      <input autoFocus required type="text" />
      <label>Last Name </label>
      <input required type="text" />
      <label>Age</label>
      <input required type="number" min={1} />
    </FormWrapper>
  );
};

export default UserForm;
