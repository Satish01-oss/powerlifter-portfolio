import { useEffect } from "react";
import athleteData from "../data/athleteData";

const siteTitle = `${athleteData.name} | ${athleteData.title}`;

const usePageTitle = (page) => {
  useEffect(() => {
    document.title = page ? `${page} | ${athleteData.name}` : siteTitle;
  }, [page]);
};

export default usePageTitle;
