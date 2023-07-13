"use client";

export const Form = () => {
  return (
    <form className="mt-12 flex gap-x-3 h-16 md:text-xl text-lg">
      <input
        required
        maxLength={7}
        type="text"
        placeholder="Enter Student ID"
        className="border border-secondary-200 px-8 w-full h-full md:max-w-[300px] rounded text-secondary-100 bg-[#121212] outline-none placeholder:text-secondary-100"
      />

      <button
        type="submit"
        className="bg-primary-100 hidden md:block text-secondary-300 lg:py-4 lg:px-10 px-7 rounded font-google-mid"
      >
        Get Certificate
      </button>

      <button
        type="submit"
        className="bg-primary-100 md:hidden text-secondary-300 lg:py-4 lg:px-10 px-4 rounded font-google-mid"
      >
        &rarr;
      </button>
    </form>
  );
};
