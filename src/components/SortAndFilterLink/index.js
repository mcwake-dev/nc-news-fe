import { useParams, Link } from "react-router-dom";

import styles from "./SortAndFilterLink.module.css";

const SortAndFilterLink = ({ isCurrent, param, title, linkType }) => {
  const { author, topic, sort, order } = useParams();
  let to;

  switch (linkType) {
    case "author":
      to = `/author/${param}/topic/${topic || "all"}/sort-by/${
        sort || "created_at"
      }/order/${order || "desc"}`;
      break;
    case "topic":
      to = `/author/${author || "all"}/topic/${param}/sort-by/${
        sort || "created_at"
      }/order/${order || "desc"}`;
      break;
    case "sort":
      to = `/author/${author || "all"}/topic/${
        topic || "all"
      }/sort-by/${param}/order/${order || "desc"}`;
      break;
    case "order":
      to = `/author/${author || "all"}/topic/${topic || "all"}/sort-by/${
        sort || "created_at"
      }/order/${param}`;
      break;
    default:
      throw new Error("Invalid link type!");
  }

  return (
    <Link className={isCurrent ? styles.current : ""} to={to}>
      {title}
    </Link>
  );
};

export default SortAndFilterLink;
