import InputField from "./InputField";

function ProfileTab() {
    return (
        <div>
            <h2 className=" font-bold text-heading1 text-neutrals-700 capitalize mb-6">
                My Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                <InputField label="First Name" value="Belle" />
                <InputField label="Last Name" value="Ferguson" />
                <InputField label="Gender" value="Female" />
                <InputField label="Phone number" type="phone" />
                <InputField label="Email" placeholder="Enter Last Name" />
                <InputField label="City" placeholder="Enter Last Name" />
            </div>
            <div className="flex justify-end">
                <button className="bg-navy-blue-500 text-white px-6 py-2.5 rounded  text-sm font-medium tracking-wide hover:bg-navy-blue-600 transition-colors">
                    Save
                </button>
            </div>
        </div>
    );
}

export default ProfileTab;
