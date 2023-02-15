import FormWrapper from "./FormWrapper";

type UserFormProps = {
  firstName: string;
  lastName: string;
  age: string;
  hangleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const UserForm = ({
  firstName,
  lastName,
  age,
  hangleOnChange,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        name="firstName"
        value={firstName}
        onChange={hangleOnChange}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        name="lastName"
        value={lastName}
        onChange={hangleOnChange}
      />
      <label>Age</label>
      <input
        required
        type="number"
        name="age"
        min={1}
        value={age}
        onChange={hangleOnChange}
      />
    </FormWrapper>
  );
};

export default UserForm;
