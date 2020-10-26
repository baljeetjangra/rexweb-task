import React, { useEffect, useState } from "react";
import Button from "./Button";

const Articles = () => {
  const [pageNo, setPageNo] = useState(1);
  const [articles, setArticles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://jsonmock.hackerrank.com/api/articles?page=${pageNo}`;
  const getData = async (url) => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData(url);
  }, [pageNo]);
  console.log(pageNo);
  return (
    <div>
      <center>
        <h1>Articles Title</h1>
      </center>
      <ul>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          articles["data"].map((article, index) => {
            if (article?.title != null && article?.title != "") {
              return <li key={index}>{article.title}</li>;
            }
          })
        )}
      </ul>
      {isLoading ? (
        <span></span>
      ) : (
        <center>
          <h1>Article Pages</h1>
          <Button value="1" setPageNo={setPageNo} />
          <Button value="2" setPageNo={setPageNo} />
          <Button value="3" setPageNo={setPageNo} />
          <Button value="4" setPageNo={setPageNo} />
          <Button value="5" setPageNo={setPageNo} />
        </center>
      )}
    </div>
  );
};

export default Articles;
