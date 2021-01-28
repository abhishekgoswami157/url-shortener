import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import urlsApi from "../apis/urls";
import Flash from "../shared/Flash";
import ListUrls from "./url/ListUrls";
import UrlForm from "./url/UrlForm";

function HomePage() {
  const [urls, setUrls] = useState([]);
  const location = useLocation();
  async function fetchUrls() {
    try {
      let response = await urlsApi.list();
      setUrls(response.data.urls);
    } catch (error) {}
  }
  useEffect(() => {
    fetchUrls();
  }, []);
  return (
    <section className="container">
      {location?.state?.response ? (
        <Flash notice={location.state.response} />
      ) : (
        ""
      )}

      <UrlForm urls={urls} setUrls={setUrls} fetchUrls={fetchUrls} />
      <div className="my-10">
        <ListUrls urls={urls} setUrls={setUrls} fetchUrls={fetchUrls} />
      </div>
    </section>
  );
}
export default HomePage;
