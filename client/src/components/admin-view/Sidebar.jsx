import React, { useState } from "react";

const AdminSidebar = () => {
  const sidebar = [
    {
      name: "Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-[18px] h-[18px] mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M19.56 23.253H4.44a4.051 4.051 0 0 1-4.05-4.05v-9.115c0-1.317.648-2.56 1.728-3.315l7.56-5.292a4.062 4.062 0 0 1 4.644 0l7.56 5.292a4.056 4.056 0 0 1 1.728 3.315v9.115a4.051 4.051 0 0 1-4.05 4.05z" />
          <path d="M16.32 23.253H7.68a.816.816 0 0 1-.81-.81v-5.4c0-2.83 2.3-5.13 5.13-5.13s5.13 2.3 5.13 5.13v5.4c0 .443-.367.81-.81.81z" />
        </svg>
      ),
    },
    {
      name: "Audience",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-[18px] h-[18px] mr-3"
          viewBox="0 0 512 512"
        >
          <path d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934z" />
        </svg>
      ),
    },
    {
      name: "Posts",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-[18px] h-[18px] mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M18 2c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4H6c-2.206 0-4-1.794-4-4V6c0-2.206 1.794-4 4-4zm0-2H6a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6z" />
          <path d="M12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1z" />
          <path d="M6 12a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z" />
        </svg>
      ),
    },
  ];
  const [hide, Sethide] = useState(true);
  const handleClick = () => {
    Sethide((prev) => !prev);
  };
  return (
    <>
      {(hide && (
        <nav className="bg-black h-screen left-0 min-w-[250px] py-6 px-4 text-white">
          <div className="relative">
            <a href="#">
              <img
                src="https://readymadeui.com/readymadeui.svg"
                alt="logo"
                className="w-[150px]"
              />
            </a>
            <div
              className="absolute -right-6 top-1 h-6 w-6 p-[6px] cursor-pointer bg-gray-800 hover:bg-gray-700 flex items-center justify-center rounded-full transition"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                className="w-4 h-4"
                viewBox="0 0 55.752 55.752"
              >
                <path d="M43.006 23.916a5.36 5.36 0 0 0-.912-.727L20.485 1.581a5.4 5.4 0 0 0-7.637 7.638l18.611 18.609-18.705 18.707a5.398 5.398 0 1 0 7.634 7.635l21.706-21.703a5.35 5.35 0 0 0 .912-.727 5.373 5.373 0 0 0 1.574-3.912 5.363 5.363 0 0 0-1.574-3.912z" />
              </svg>
            </div>
          </div>
          <div className="overflow-auto py-6 h-full mt-4">
            <ul className="space-y-2">
              {sidebar.map(({ name, icon }, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-200 font-medium hover:text-white hover:bg-gray-800 text-[15px] flex items-center rounded px-4 py-2 transition-all"
                  >
                    <span className="text-white">{icon}</span>
                    <span className="ml-2">{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )) ||
        (!hide && (
          <div className=" my-[50px] h-6 w-6 p-[6px] cursor-pointer bg-gray-800 hover:bg-gray-700 flex items-center justify-center rounded-full transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              className="w-4 h-4"
              viewBox="0 0 55.752 55.752"
              onClick={handleClick}
            >
              <path d="M43.006 23.916a5.36 5.36 0 0 0-.912-.727L20.485 1.581a5.4 5.4 0 0 0-7.637 7.638l18.611 18.609-18.705 18.707a5.398 5.398 0 1 0 7.634 7.635l21.706-21.703a5.35 5.35 0 0 0 .912-.727 5.373 5.373 0 0 0 1.574-3.912 5.363 5.363 0 0 0-1.574-3.912z" />
            </svg>
          </div>
        ))}
    </>
  );
};

export default AdminSidebar;
