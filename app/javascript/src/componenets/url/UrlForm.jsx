import { useFormik } from "formik";
import React, { useState } from "react";
import urlsApi from "../../apis/urls";
import Errors from "../../shared/Errors";

function UrlForm({ urls, setUrls, fetchUrls }) {
  const [err, setErr] = useState(null);
  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      original_url: "",
    },
    onSubmit: async (values, actions) => {
      try {
        let response = await urlsApi.create({
          url: {
            original_url: values.original_url,
          },
        });
        console.log(response, "response of create urls");

        // setUrls([...urls, response.data.url]);
        fetchUrls();
        actions.setSubmitting(false);
        values.original_url = "";
      } catch (error) {
        console.log(error?.response);
        console.log(error?.response?.data?.errors);
        setErr(error?.response?.data?.errors);
      }
    },
  });
  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        {err ? <Errors err={err} /> : ""}
        <div className="flex my-20">
          <input
            type="text"
            name="original_url"
            // id="url"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.original_url}
            className="px-4 shadow-sm appearance-none block w-full border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
          <div className="">
            <span className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                className={`${
                  isSubmitting
                    ? "cursor-not-allowed bg-indigo-700"
                    : "bg-indigo-700"
                } w-full flex justify-center py-2 px-4 border border-transparent text-white  hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out tracking-wider`}
              >
                {isSubmitting ? "Shortenning" : "Shorten!"}
              </button>
            </span>
          </div>
        </div>
      </form>
    </section>
  );
}

export default UrlForm;
