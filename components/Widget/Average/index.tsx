import { Input } from 'antd';
import { IDataWidget } from 'interfaces';
import { getAverage } from './util';

export const Average: IDataWidget = ({ data }) => {
  return (
    <div>
      <Input.TextArea
        value={JSON.stringify(getAverage(data), null, 4)}
        autoSize={true}
      />
    </div>
  );
};

Average.cardProps = {
  title: '平均值',
};
