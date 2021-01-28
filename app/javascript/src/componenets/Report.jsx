import { useFormik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import reportsApi from "../apis/reports";
import Errors from "../shared/Errors";
import Flash from "../shared/Flash";
import { validateReport } from "../utils/validateLogic";

function Report() {
  const [err, setErr] = useState(null);
  const history = useHistory();
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
      email: "",
    },
    validate: validateReport,
    onSubmit: async (values, actions) => {
      try {
        let response = await reportsApi.create({
          report: {
            email: values.email,
          },
        });
        console.log(response, "report of url shortener");

        // setUrls([...urls, response.data.url]);
        // fetchUrls();
        // window.location.href = "/";
        // response.data.notice ? <Flash notice={response.data.notice} /> : "";
        history.push("/", { response: response.data.notice });
        actions.setSubmitting(false);
      } catch (error) {
        actions.setSubmitting(false);
      } finally {
        values.email = "";
      }
    },
  });
  return (
    <section>
      <form className="container my-20" action="" onSubmit={handleSubmit}>
        <small className="block text-red-700">{errors && errors.email}</small>
        <div className="flex">
          <input
            type="email"
            name="email"
            // id="url"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
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
                } w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white  hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out`}
              >
                {isSubmitting ? "Generating Report" : "Generate Report"}
              </button>
            </span>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Report;
