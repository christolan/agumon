import { IDataWidget } from "interfaces";

export const Total: IDataWidget = ({ data }) => {
  return <div>total: {data.length}</div>;
};
