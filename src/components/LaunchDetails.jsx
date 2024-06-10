// src/components/LaunchDetails.jsx

const LaunchDetails = () => {
  return (
    <div className="w-[100%] max-w-5xl px-16 py-6 pt-20 mt-9 flex flex-col gap-10 pb-28">
      <div className="text-black text-md font-medium">
        Official Launch Details
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-neutral-800 text-2xl font-medium">{`Coming Soon: GrabWork's Official Launch!`}</h2>
        <p className="text-black text-sm">
          {`
          Get ready for the highly anticipated official launch of GrabWork! We're working tirelessly behind the scenes 
          to bring you an unparalleled on-demand service experience. So, stay tuned for more updates as we finalize 
          the details for our big launch day!`}
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="text-neutral-800 text-lg font-medium">What to Expect</h3>
        <ul className="list-disc px-6 text-neutral-800 text-sm">
          <li>
            Exciting Features: Explore all the amazing features and
            functionalities of GrabWork as soon as it goes live.
          </li>
          <li>
            Special Promotions: Be among the first to take advantage of
            exclusive launch promotions and discounts.
          </li>
          <li>
            Community Engagement: Join our vibrant community of users and
            service providers, shaping the future of on-demand services
            together.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="text-neutral-800 text-lg font-medium">Stay Informed</h3>
        <p className="text-neutral-800 text-sm">
          {`
          Make sure you're the first to know when GrabWork officially launches! Sign up for our newsletter to receive all the 
          latest news, updates, and exclusive launch offers directly to your inbox.`}
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="text-neutral-800 text-lg font-medium">{`We Can't Wait to Serve You`}</h3>
        <p className="text-neutral-800 text-sm">
          {`
          At GrabWork, we're committed to revolutionizing the way you access essential services. Get ready to experience 
          unparalleled convenience, reliability, and efficiency – all at your fingertips!`}
        </p>
      </div>
    </div>
  );
};

export default LaunchDetails;
