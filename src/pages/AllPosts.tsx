// Modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Api
import { Api } from "../api/Api";
import { url } from "../url";

// Components
import CustomNewsScroll from "../components/global/CustomNewsScroll";
import { IurlParamAdder } from "../types/api.types";

const AllPosts = () => {
  const { category } = useParams();
  const api = new Api(url + category);
  const language = api.language;

  const [params, setParams] = useState<IurlParamAdder[]>([
    {
      name: "count",
      value: 10,
    },
  ]);

  const [lastLanguage, setLastLanguage] = useState<typeof language>(language);

  useEffect(() => {
    if (language !== lastLanguage) {
      // api.get()
    }
  }, [language, lastLanguage]);

  return (
    <main className="all">
      <div className="container">
        <div className="all-inner"></div>
      </div>
    </main>
  );
};

export default AllPosts;
