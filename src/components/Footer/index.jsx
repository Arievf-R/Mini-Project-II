export const Footer = () => {
  return (
    <div className="py-10 text-white bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="container flex flex-col justify-between px-4 mx-auto md:flex-row">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-8 h-8 mr-2 text-blue-600 bg-white rounded-full">
              <span className="text-lg font-bold">T</span>
            </div>
            <span className="text-lg font-bold">Trafalgar</span>
          </div>
          <p className="mb-4 text-sm">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className="text-sm">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>
        <div className="flex flex-col justify-between w-full md:flex-row md:w-auto">
          <div className="mb-6 md:mb-0 md:mr-10">
            <h3 className="mb-2 font-bold">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-sm">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm">
                  Testimonials
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm">
                  Find a doctor
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm">
                  Apps
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 md:mr-10">
            <h3 className="mb-2 font-bold">Region</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-sm">
                  Indonesia
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm">
                  Singapore
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm">
                  Hongkong
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm">
                  Canada
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-bold">Help</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-sm">
                  Help center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm">
                  Contact support
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm">
                  Instructions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm">
                  How it works
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
