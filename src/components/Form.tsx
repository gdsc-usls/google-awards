"use client";

export const Form = () => {
  return (
    <form className="mt-12">
      <input
        required
        maxLength={7}
        type="text"
        placeholder="Enter Student ID"
        className="border border-secondary-200 px-8 py-4 text-xl rounded text-secondary-100 bg-[#121212] outline-none placeholder:text-secondary-100 mr-4"
      />

      <button
        type="submit"
        className="bg-primary-100 text-secondary-300 lg:py-4 lg:px-10 py-3 px-7 text-xl rounded font-google-mid mt-3 md:mt-0"
      >
        Get Certificate
      </button>
    </form>
  );
};
