'use client'
import InputField from "./InputField";

function ProfileTab() {
    return (
        <div>
            <h2 className=" font-bold text-heading1 text-neutrals-700 capitalize mb-6">
                My Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                <InputField label="First Name" value="Belle" onChange={() => console.log('called')} />
                <InputField label="Last Name" value="Ferguson" onChange={() => console.log('called')} />
                <InputField label="Gender" value="Female" onChange={() => console.log('called')} />
                <InputField label="Phone number" type="phone" onChange={() => console.log('called')} />
                <InputField label="Email" placeholder="Enter Last Name" onChange={() => console.log('called')} />
                <InputField label="City" placeholder="Enter Last Name" onChange={() => console.log('called')} />
            </div>
            <div className="flex justify-end">
                <button className="w-full sm:w-fit bg-navy-blue text-white px-20 py-3 rounded text-sm font-medium tracking-wide hover:bg-navy-blue-600 transition-colors">
                    Save
                </button>
            </div>
        </div>
    );
}

export default ProfileTab;
