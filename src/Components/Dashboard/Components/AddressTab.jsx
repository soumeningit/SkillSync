import InputField from "./InputField";

function AddressTab({ data, setData }) {
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="md:col-span-2">
      <InputField
        id="address"
        label="Address"
        value={data.address}
        onChange={(e) => setData({ ...data, address: e.target.value })}
      />
    </div>
    <InputField
      id="city"
      label="City"
      value={data.city}
      onChange={(e) => setData({ ...data, city: e.target.value })}
    />
    <InputField
      id="state"
      label="State"
      value={data.state}
      onChange={(e) => setData({ ...data, state: e.target.value })}
    />
    <InputField
      id="pin_code"
      label="Pin Code"
      value={data.pin_code}
      onChange={(e) => setData({ ...data, pin_code: e.target.value })}
    />
    <InputField
      id="country"
      label="Country"
      value={data.country}
      onChange={(e) => setData({ ...data, country: e.target.value })}
    />
  </div>;
}

export default AddressTab;
