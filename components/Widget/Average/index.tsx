import { IDataWidget } from "interfaces";
import { getAverage } from "./util";
import { Input } from "antd";

export const Average: IDataWidget = ({ data }) => {
  return (
    <div>
      <div>average</div>
      <Input.TextArea
        value={JSON.stringify(getAverage(data), null, 4)}
        autoSize={true}
      />
    </div>
  );
};
