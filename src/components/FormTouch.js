import React from "react";

const FormTouch = () => {
  return (
    <form className="w-full sm:w-1/2  space-y-3">
      <div className="relative">
        <input
          type="email"
          id="floating_outlined"
          className="block px-2 pb-2 pt-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-[1px] border-gray-950 appearance-none dark:text-white dark:border-neutral-200 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="floating_outlined"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-neutral-950 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Email
        </label>
      </div>

      <div className="relative">
        <input
          type="text"
          id="floating_outlined"
          className="block px-2 pb-2 pt-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-[1px] border-gray-950 appearance-none dark:text-white dark:border-neutral-200 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="floating_outlined"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-neutral-950 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Subject
        </label>
      </div>

      <div className="relative">
        <textarea
          id="floating_outlined"
          className="block px-2 pb-2 pt-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-[1px] border-gray-950 appearance-none dark:text-white dark:border-neutral-200 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="floating_outlined"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-neutral-950 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Message
        </label>
      </div>

      <button className=" px-20 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
        Submit
      </button>
    </form>
  );
};

export default FormTouch;
