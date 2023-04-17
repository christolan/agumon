import { IDataWidget } from 'interfaces';

export const Total: IDataWidget = ({ data }) => {
  return <div>{data.length}</div>;
};

Total.cardProps = {
  title: '数据长度',
};
