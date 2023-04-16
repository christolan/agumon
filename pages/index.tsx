import { IData } from "interfaces";
import { useEffect, useState } from "react";

const IndexPage = () => {
  const [data, setData] = useState<IData>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      fetch("/api/data")
        .then((res) => {
          console.log("res", res);
          return res.json();
        })
        .then((jsonRes) => {
          console.log("jsonRes", jsonRes);
          if (Array.isArray(jsonRes.data)) {
            setData(jsonRes.data);
          }
        });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default IndexPage;
