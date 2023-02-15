import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import { useMultiStepForm } from "./useMultiStepForm";
import UserForm from "./UserForm";

const App = () => {
  const {
    forms,
    currentFormIndex,
    currentForm,
    next,
    back,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([<UserForm />, <AddressForm />, <AccountForm />]);
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
      <form>
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
          <button type="button" onClick={next}>
            {isLastStep ? "submit" : "next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
