import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const VendorRegistrationForm = () => {
  const [businessname, setBusinessName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [businessaddress, setBusinessAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [services, setServices] = useState([]);

  const handleServiceChange = (service) => {
    setServices((prevServices) =>
      prevServices.includes(service)
        ? prevServices.filter((s) => s !== service)
        : [...prevServices, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      BusinessName: businessname,
      FirstName: firstname,
      LastName: lastname,
      BusinessAddress: businessaddress,
      Email: email,
      PhoneNo: phonenumber,
      Services: services,
    };

    axios
      .post(
        "https://sheet.best/api/sheets/703cd69e-a437-4c43-8fc4-f4452eeb6275",
        data
      )
      .then((response) => {
        console.log(response);
        setBusinessName("");
        setFirstName("");
        setLastName("");
        setBusinessAddress("");
        setEmail("");
        setPhoneNumber("");
        setServices([]);
        toast.success("Registration successful!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Registration error. Please try again.");
      });
  };

  return (
    <div className="w-full max-w-4xl p-6 md:p-10 bg-white rounded-md overflow-y-auto">
      <h2 className="text-neutral-800 text-xl md:text-2xl font-medium mb-4 md:mb-6">
        Vendor Registration Section
      </h2>
      <p className="text-neutral-800 text-base md:text-lg font-normal mb-4 md:mb-8">
        Join as a Service Provider
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-8">
        <div className="space-y-2 md:space-y-4">
          <label className="block text-stone-950 text-sm font-normal">
            Business Name:
            <input
              type="text"
              onChange={(e) => setBusinessName(e.target.value)}
              value={businessname}
              className="w-full pl-4 py-2 bg-white rounded-lg border border-zinc-400 mt-2 outline-none"
              placeholder="Business Name"
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex-1 space-y-2 md:space-y-4">
            <label className="block text-stone-950 text-sm font-normal">
              Contact Person First Name:
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstname}
                className="w-full pl-4 py-2 bg-white rounded-lg border border-zinc-400 mt-2"
                placeholder="Contact Person First Name"
              />
            </label>
          </div>
          <div className="flex-1 space-y-2 md:space-y-4">
            <label className="block text-stone-950 text-sm font-normal">
              Contact Person Last Name:
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastname}
                className="w-full pl-4 py-2 bg-white rounded-lg border border-zinc-400 mt-2"
                placeholder="Contact Person Last Name"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex-1 space-y-2 md:space-y-4">
            <label className="block text-stone-950 text-sm font-normal">
              Business Address:
              <input
                type="text"
                onChange={(e) => setBusinessAddress(e.target.value)}
                value={businessaddress}
                className="w-full pl-4 py-2 bg-white rounded-lg border border-zinc-400 mt-2"
                placeholder="Business Address"
              />
            </label>
          </div>
          <div className="flex-1 space-y-2 md:space-y-4">
            <label className="block text-stone-950 text-sm font-normal">
              Email Address:
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full pl-4 py-2 bg-white rounded-lg border border-zinc-400 mt-2"
                placeholder="Email Address"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex-1 space-y-2 md:space-y-4">
            <label className="block text-stone-950 text-sm font-normal">
              Phone Number:
              <input
                type="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phonenumber}
                className="w-full pl-4 py-2 bg-white rounded-lg border border-zinc-400 mt-2"
                placeholder="Phone Number"
              />
            </label>
          </div>
          <div className="flex-1 space-y-2 md:space-y-4">
            <p className="text-stone-950 text-sm font-medium">
              Services Offered:
            </p>
            <div className="flex flex-col gap-1">
              {["Plumbing", "Electrical Work", "Carpentry", "Painting"].map(
                (myservice) => (
                  <label
                    key={myservice}
                    className="flex items-center justify-between max-w-[10rem]"
                  >
                    <input
                      type="checkbox"
                      checked={services.includes(myservice)}
                      onChange={() => handleServiceChange(myservice)}
                      className="h-6 rounded border border-zinc-400"
                    />
                    <span className="text-stone-950 text-sm font-normal">
                      {myservice}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start mt-4 md:mt-8">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-[#008000] rounded-lg"
          >
            Register Now
          </button>
        </div>
        <div className="text-xs md:text-sm font-light text-neutral-800 mt-4">
          <strong>Privacy Note:</strong> Your privacy is important to us. The
          information provided will be used exclusively to register your
          business on GrabWork and facilitate service offerings. We will not
          share your data with third parties without your consent.
        </div>
      </form>
    </div>
  );
};

export default VendorRegistrationForm;
