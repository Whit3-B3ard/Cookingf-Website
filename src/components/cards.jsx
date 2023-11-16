export default function Card() {
  return (
    <div>
      <div
        className="h-52 w-1/3 ml-48 float-left 
        -mt-10 flex-col rounded-xl 
        bg-gradient-to-r from-violet-600 to-indigo-600 
        text-white shadow-2xl"
      >
        <div className="p-6">
          <h5
            className="text-center mr-4 mb-2 
								block font-sans text-xl 
								font-semibold text-blue-gray-900 
								antialiased"
          >
            Reach Us At
          </h5>
          <ul>
            <li className="mt-2">
              <span>
                <i className="fa fa-phone mr-2"></i>{" "}
              </span>
              +49-9998887776
            </li>
            <li className="mt-2">
              <span>
                <i className="fa fa-envelope mr-2"></i>{" "}
              </span>
              <span>feedback@awsome_food.org</span>
            </li>
            <li className="mt-2">
              <span>
                <i className="fa-solid fa-map-pin mr-2"></i>
              </span>
              A-143, 9th Floor, Sovereign Corporate
              <span className="pl-4">
                Tower, Sector-136, Gulshan North, Dhaka 1212
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className=" mr-48 w-1/3 text-center float-right 
        -mt-11 flex-col rounded-xl 
        bg-gradient-to-r from-green-600 to-teal-600 
        text-white shadow-2xl"
      >
        <div className="p-6 ">
          <h5
            className="mb-2 block font-sans 
								text-xl font-semibold 
								text-blue-gray-900 antialiased"
          >
            Branding & Collaboration
          </h5>
          <i className="fa fa-handshake fa-2xl"></i>
          <div className="text-left mt-4">
            <span>
              <i className="fa fa-envelope mr-2"></i>{" "}
            </span>
            <span>branding@awsome_food.org</span>
          </div>
          <div className="mt-2 text-left">
            <span>
              <i className="fa-solid fa-map-pin mr-2"></i>{" "}
            </span>
            A-143, 9th Floor, Sovereign Corporate Tower, Sector-
            <span className="pl-5">136, Gulshan North, Dhaka</span>
          </div>
        </div>
      </div>
    </div>
  );
}
