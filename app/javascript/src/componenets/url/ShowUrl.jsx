import React, { useState } from "react";
import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";
import { IconContext } from "react-icons";

import urlsApi from "../../apis/urls";
import Tooltip from "../../shared/Tooltip";

function ShowUrl({ url, urls, setUrls, fetchUrls }) {
  const shortened_url = window.location.href + url.slug;
  const [err, setErr] = useState(null);

  async function handleRedirect() {
    try {
      let response = await urlsApi.show(url.slug);
      console.log(response);
      window.open(response.data.url.original_url);
      // window.location.href = "/";
      // const newUrls = urls.map((url) =>
      //   url.id == response.data.url.id ? response.data.url : url
      // );
      // console.log(urls);
      // console.log(newUrls, "NEWURL");
      // setUrls(newUrls);
      fetchUrls();
    } catch (error) {
      setErr(error?.response?.data?.errors);
    }
  }

  async function handlePin(slug) {
    try {
      let response = await urlsApi.pinUrl(slug);
      // const updatedUrls = urls.map((url) =>
      //   url.id == response.data.url.id ? response.data.url : url
      // );
      // setUrls(updatedUrls);
      fetchUrls();
    } catch (error) {
      setErr(error?.response?.data?.errors);
    }
  }
  return (
    <>
      {err ? <Errors err={err} /> : ""}
      <tr className="text-xl text-gray-900 border-gray-200 border-b">
        <td className="px-3 py-4 bg-gray-100">
          <div className="cursor-pointer" onClick={() => handlePin(url.slug)}>
            {url.pinned ? (
              <IconContext.Provider value={{ color: "blue" }}>
                <div>
                  <Tooltip text="unpin">
                    <AiFillPushpin />
                  </Tooltip>
                </div>
              </IconContext.Provider>
            ) : (
              <Tooltip text="pin">
                <AiOutlinePushpin />
              </Tooltip>
            )}
          </div>
        </td>
        <td className="px-3 pl-12 tracking-wide">
          <a
            className="hover:border-b hover:border-indigo-300 hover:text-indigo-400"
            href={url.original_url}
            target="_blank"
          >
            {url.original_url}
          </a>
        </td>
        <td className="px-3 pl-12 tracking-wide">
          <button
            className="hover:border-b hover:border-indigo-300 hover:text-indigo-400"
            onClick={handleRedirect}
          >
            {shortened_url}
          </button>
        </td>
        <td className="px-3 py-4 bg-gray-100 text-indigo-500">
          {url.click_count}
        </td>
      </tr>
    </>
  );
}

export default ShowUrl;
