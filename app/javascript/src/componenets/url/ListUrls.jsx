import React from "react";
import ShowUrl from "./ShowUrl";

function ListUrls({ urls, setUrls, fetchUrls }) {
  if (urls.length == 0) {
    return <h1 className="text-indigo-700 text-xl font-bold">*No Url Added</h1>;
  }
  return (
    <table className="w-full">
      <thead className="">
        <tr className="bg-indigo-500 text-white">
          <th className="py-3 text-2xl font-normal tracking-wider"></th>
          <th className="pl-12 py-3 text-2xl font-normal tracking-wider text-left">
            Original
          </th>
          <th className="py-3 pl-12 text-2xl font-normal tracking-wider text-left">
            Short
          </th>
          <th className="py-3 text-2xl font-normal tracking-wider"></th>
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
