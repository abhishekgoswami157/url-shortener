import React from "react";
import ShowUrl from "./ShowUrl";

function ListUrls({ urls, setUrls }) {
  console.log(urls, "urls in list urls");
  if (urls.length == 0) {
    return <h1>No Url added</h1>;
  }
  return (
    <table>
      <thead>
        <tr className="bg-indigo-500 text-white">
          <th></th>
          <th>Original</th>
          <th>Short</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {urls?.map((url) => {
          return <ShowUrl url={url} setUrls={setUrls} />;
        })}
      </tbody>
    </table>
  );
}

export default ListUrls;
