import React, { useState, useEffect } from 'react';

const NewsLetter = () => {
  const readSubscriptions = () => {
    const items = localStorage.getItem("subscriptions");
    return JSON.parse(items) || [];
  };

  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [subscriptions, setSubscriptions] = useState(readSubscriptions());

  const handleSubscribe = () => {
    const newSubscription = { email, subscribe };
    setSubscriptions([...subscriptions, newSubscription]);
    setEmail("");
    setSubscribe(false);
  };

  useEffect(() => {
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
  }, [subscriptions]);

  return (
    <div className="flex w-screen h-screen flex-col bg-slate-50">
      <div className="flex w-screen h-screen flex-col bg-slate-50">
  <div className="w-full h-2/4 bg-black flex">
    <div className='flex justify-start flex-1'>
      <img src="https://www.markwellfoods.com.au/wp-content/uploads/2022/07/shutterstock_1345559753-scaled.jpg" className="h-full" alt="" />
    </div>
    <div className='flex justify-end flex-1'>
      <img src="https://info.ehl.edu/hubfs/Brand_Experience_Header.jpg" className="h-full" alt="" />
    </div>
  </div>
</div>

    <div className='flex absolute z-10 inset-0 items-center'>
      <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-xl h-96 pt-12 ">
        
        <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Stay updated with our latest recipes and cooking tips.</p>

        <form action="#" method="POST" className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              className="text-blue-500 rounded-full p-2 border border-blue-500"
              checked={subscribe}
              onChange={() => setSubscribe(!subscribe)}
            />
            <label htmlFor="subscribe" className="ml-2 text-gray-600">Subscribe to weekly newsletter</label>
          </div>

          <button type="button" onClick={handleSubscribe} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Subscribe</button>
        </form>
      </div>
      </div>
      <div className="text-center text-white py-6 bg-black">
        <p className="text-2xl font-semibold">Explore the World of Food</p>
        <p className="text-gray-300">Discover a world of flavors, recipes, and culinary inspiration on our platform. Join our community of food lovers and stay connected.</p>
      </div>
    </div>
  );
};

export default NewsLetter;
