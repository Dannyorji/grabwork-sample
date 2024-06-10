const Info = () => {
  return (
    <div className="px-6 md:px-10 lg:px-20 py-10 bg-white text-[#282828]">
      <div className="text-zinc-800 text-base md:text-lg lg:text-xl font-normal">
        GrabWork is a versatile platform designed to simplify your everyday tasks by connecting you with trusted service providers at the tap of a button. Whether you need handyman services, artisan expertise, food delivery, or a ride, GrabWork is your one-stop solution. By bringing multiple services into a single app, we make it easy for you to manage your daily needs efficiently and conveniently.
      </div>
      <div className="flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-12 mt-10">
        <div className="flex flex-col justify-start items-start gap-2.5">
          <h2 className="text-black text-lg font-medium">Mission</h2>
          <p className="text-zinc-800 text-sm md:text-base">
            Connecting businesses and communities through a one-stop Hub
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2.5">
          <h2 className="text-black text-lg font-medium">Vision</h2>
          <p className="text-zinc-800 text-sm md:text-base">
            Transforming lives through convenient services
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2.5">
          <h2 className="text-black text-lg font-medium">Values</h2>
          <ul className="text-zinc-800 text-sm md:text-base list-disc ml-4">
            <li>Innovation: Empowering Progress</li>
            <li>Quality: Exceptional Standards</li>
            <li>Community: Unity in Diversity</li>
            <li>Inclusivity: Opportunities for All</li>
            <li>Reliability: Trustworthy Always</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
