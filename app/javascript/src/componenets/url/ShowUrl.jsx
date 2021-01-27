import React, { useState } from "react";
import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";
import { IconContext } from "react-icons";

import urlsApi from "../../apis/urls";

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
      <tr>
        <td className="px-4 py-2">
          <div className="cursor-pointer" onClick={() => handlePin(url.slug)}>
            {url.pinned ? (
              <IconContext.Provider value={{ color: "blue" }}>
                <div>
                  <AiFillPushpin />
                </div>
              </IconContext.Provider>
            ) : (
              <AiOutlinePushpin />
            )}
          </div>
        </td>
        <td className="px-4 py-2">
          <a href={url.original_url} target="_blank">
            {url.original_url}
          </a>
        </td>
        <td className="px-4 py-2">
          <button onClick={handleRedirect}>{shortened_url}</button>
        </td>
        <td className="px-4 py-2">{url.click_count}</td>
      </tr>
    </>
  );
}

export default ShowUrl;
