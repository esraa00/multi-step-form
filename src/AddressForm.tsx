const AddressForm = () => {
  return (
    <>
      <label>Street</label>
      <input autoFocus required type="text" />
      <label>City</label>
      <input required type="text" />
      <label>State</label>
      <input required type="number" />
      <label>Zip</label>
      <input required type="number" />
    </>
  );
};

export default AddressForm;
