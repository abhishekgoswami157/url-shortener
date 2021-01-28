// import axios from "axios";
// import { func } from "prop-types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import urlsApi from "../apis/urls";
import Flash from "../shared/Flash";
import ListUrls from "./url/ListUrls";
import UrlForm from "./url/UrlForm";

function HomePage() {
  const [urls, setUrls] = useState([]);
  const location = useLocation();
  console.log(location, "location in homepage");
  async function fetchUrls() {
    console.log("ENTERED FETCJ URL");
    try {
      let response = await urlsApi.list();
      console.log(response);
      setUrls(response.data.urls);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    console.log("enetered useEffect");
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
