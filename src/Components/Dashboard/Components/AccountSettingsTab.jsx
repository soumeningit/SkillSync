import InputField from "./InputField";

function AccountSettingsTab({ data, setData }) {
  return (
    <div className="space-y-6">
      <InputField
        id="email"
        label="Email Address"
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <InputField
        id="password"
        label="New Password"
        type="password"
        placeholder="Leave blank to keep current password"
      />
    </div>
  );
}

export default AccountSettingsTab;
