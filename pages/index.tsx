import { IDataList, IDataWidget } from "interfaces";
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { Layout } from "components/Layout";
import { Average } from "components/Widget/Average";
import _ from "lodash";
import { Card, List } from "antd";
import { Total } from "components/Widget/Total";

const widgets: IDataWidget[] = [Total, Average];

const IndexPage = () => {
  const [data, setData] = useState<IDataList>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      fetch("/api/data")
        .then((res) => {
          return res.json();
        })
        .then((jsonRes) => {
          if (Array.isArray(jsonRes.data)) {
            setData(jsonRes.data);
          }
        });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Layout
      left={
        <Editor
          language="json"
          value={JSON.stringify(data, null, 2)}
          theme="vs-dark"
        />
      }
      right={
        <List
          bordered={true}
          style={{ padding: "10px 10px 0 10px", margin: "10px" }}
          dataSource={widgets}
          renderItem={(Widget) => (
            <Card style={{ marginBottom: "10px" }}>
              <Widget data={data} />
            </Card>
          )}
        />
      }
    />
  );
};

export default IndexPage;
