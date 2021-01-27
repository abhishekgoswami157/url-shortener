import React, { useState } from "react";
import urlsApi from "../../apis/urls";

function ShowUrl({ url, urls, setUrls }) {
  const shortened_url = window.location.href + url.slug;
  const [err, setErr] = useState(null);

  async function handleRedirect() {
    try {
      let response = await urlsApi.show(url.slug);
      console.log(response);
      window.open(response.data.url.original_url);
      // window.location.href = "/";
      const newUrls = urls.map((url) =>
        url.id == response.data.url.id ? response.data.url : url
      );
      console.log(urls);
      console.log(newUrls, "NEWURL");
      setUrls(newUrls);
    } catch (error) {
      setErr(error?.response?.data?.errors);
    }
  }
  return (
    <>
      {err ? <Errors err={err} /> : ""}
      <tr>
        <td className="px-4 py-2"></td>
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
