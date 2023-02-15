import { FormEvent, useState } from "react";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import { useMultiStepForm } from "./useMultiStepForm";
import UserForm from "./UserForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};
const App = () => {
  const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(INITIAL_DATA);

  console.log(formData);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const {
    forms,
    currentFormIndex,
    currentForm,
    next,
    back,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <UserForm {...formData} hangleOnChange={handleOnChange} />,
    <AddressForm {...formData} handleOnChange={handleOnChange} />,
    <AccountForm {...formData} handleOnChange={handleOnChange} />,
  ]);

  function submitHandler(event: FormEvent) {
    event.preventDefault();
    next();
  }
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={submitHandler}>
        <div
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
          }}
        >
          {currentFormIndex + 1} / {forms.length}
        </div>
        {currentForm}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "flex-end",
            gap: "1rem",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              back
            </button>
          )}
          <button type="submit">{isLastStep ? "submit" : "next"}</button>
        </div>
      </form>
    </div>
  );
};

export default App;
