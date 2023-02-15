import FormWrapper from "./FormWrapper";

type AddressFormProps = {
  street: string;
  city: string;
  state: string;
  zip: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const AddressForm = ({
  street,
  city,
  state,
  zip,
  handleOnChange,
}: AddressFormProps) => {
  return (
    <FormWrapper title="Address Details">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        name="street"
        value={street}
        onChange={handleOnChange}
      />
      <label>City</label>
      <input
        required
        type="text"
        name="city"
        value={city}
        onChange={handleOnChange}
      />
      <label>State</label>
      <input
        required
        type="number"
        name="state"
        value={state}
        onChange={handleOnChange}
      />
      <label>Zip</label>
      <input
        required
        type="number"
        name="zip"
        value={zip}
        onChange={handleOnChange}
      />
    </FormWrapper>
  );
};

export default AddressForm;
