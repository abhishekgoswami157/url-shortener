import React from "react";
import ShowUrl from "./ShowUrl";

function ListUrls({ urls, setUrls, fetchUrls }) {
  console.log(urls, "urls in list urls");
  if (urls.length == 0) {
    return <h1 className="text-indigo-700 text-xl font-bold">*No Url Added</h1>;
  }
  return (
    <table className="w-full">
      <thead className="">
        <tr className="bg-indigo-500 text-white">
          <th className="py-2 text-2xl font-normal tracking-wider"></th>
          <th className="py-2 text-2xl font-normal tracking-wider">Original</th>
          <th className="py-2 text-2xl font-normal tracking-wider">Short</th>
          <th className="py-2 text-2xl font-normal tracking-wider"></th>
        </tr>
      </thead>
      <tbody>
        {urls?.map((url) => {
          return (
            <ShowUrl
              url={url}
              urls={urls}
              setUrls={setUrls}
              fetchUrls={fetchUrls}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ListUrls;
