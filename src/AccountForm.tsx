import FormWrapper from "./FormWrapper";
type AccountFormProps = {
  email: string;
  password: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const AccountForm = ({ email, password, handleOnChange }: AccountFormProps) => {
  return (
    <FormWrapper title="Account Details">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        name="email"
        value={email}
        onChange={handleOnChange}
      />
      <label>Password</label>
      <input
        required
        type="password"
        name="password"
        value={password}
        onChange={handleOnChange}
      />
    </FormWrapper>
  );
};

export default AccountForm;
