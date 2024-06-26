import { useState } from "react";
import { countries } from "../assets/countries";
import { jobDescriptions } from "../assets/jobDescription";
import axios from "axios";
import { toast } from "react-toastify";

const EarlyAccessForm = () => {
  const [firstname, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [jobpreference, setJobPreference] = useState("");
  const [location, setLocation] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      FirstName: firstname,
      Surname: surname,
      JobPreference: jobpreference,
      Location: location,
      PhoneNo: phonenumber,
      Email: email,
    };

    axios
      .post(
        "https://sheet.best/api/sheets/c18fc262-aa82-463a-8c90-ada06004a9c4",
        data
      )
      .then((response) => {
        console.log(response);
        setFirstName("");
        setSurname("");
        setJobPreference("");
        setLocation("");
        setPhoneNumber("");
        setEmail("");
        toast.success("Form submitted successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error submitting form. Please try again.");
      });
  };

  return (
    <div className="w-full max-w-4xl p-6 md:p-10 bg-white rounded-lg">
      <h2 className="text-xl md:text-2xl font-medium text-neutral-800 mb-2 md:mb-4">
        Get Early Access!
      </h2>
      <p className="text-base md:text-lg font-normal text-neutral-800 mb-4 md:mb-6">
        Sign-Up Section for Users
      </p>
      <form autoComplete="off" onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex-1">
            <label className="block text-sm font-normal text-stone-950">
              First Name:
            </label>
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
              className="w-full px-4 py-2 bg-white rounded-md border border-black"
              placeholder="First Name"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-normal text-stone-950">
              Surname:
            </label>
            <input
              type="text"
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
              className="w-full px-4 py-2 bg-white rounded-md border border-black"
              placeholder="Surname"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex-1">
            <label className="block text-sm font-normal text-stone-950">
              Job Preferences:
            </label>
            <select
              onChange={(e) => setJobPreference(e.target.value)}
              value={jobpreference}
              className="w-full px-4 py-2 bg-white rounded-md border border-black"
            >
              <option value="" disabled>
                Job Preference
              </option>
              {jobDescriptions.map((job) => (
                <option key={job} value={job}>
                  {job}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-normal text-stone-950">
              Phone Number:
            </label>
            <input
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phonenumber}
              className="w-full px-4 py-2 bg-white rounded-md border border-black"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="block text-sm font-normal text-stone-950">
            Location:
          </label>
          <select
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            className="w-full md:w-[44%] px-4 py-2 mt-2 bg-white rounded-md border border-black"
          >
            <option value="" disabled>
              Location
            </option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label className="block text-sm font-normal text-stone-950">
            Email Address:
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full md:w-[70%] px-4 py-2 bg-white rounded-md border border-black"
            placeholder="Email Address"
          />
        </div>
        <div className="flex justify-center md:justify-start">
          <button
            type="submit"
            className="w-auto px-6 py-2 bg-[#008000] text-white rounded-md mt-4"
          >
            Sign-up Now
          </button>
        </div>
        <div className="text-xs md:text-sm font-light text-black mt-4">
          <strong>Privacy Note:</strong> We respect your privacy and are
          committed to protecting your personal information. Your data will be
          used solely for the purpose of providing you with early access and
          updates about GrabWork.
        </div>
      </form>
    </div>
  );
};

export default EarlyAccessForm;
