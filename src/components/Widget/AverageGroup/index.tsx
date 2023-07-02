import { Button, Input } from 'antd';
import { IDataWidget } from 'interfaces';
import { useState } from 'react';
import { getAverageGroup } from './util';

export const AverageGroup: IDataWidget = ({ data }) => {
  const [groupKey, setGroupKey] = useState<string>();
  const [value, setValue] = useState<_.Dictionary<IData>>();

  return (
    <div>
      <div style={{ marginBottom: '8px' }}>
        <span>分组字段</span>
        <div style={{ display: 'flex' }}>
          <Input
            value={groupKey}
            onChange={(e) => {
              setGroupKey(e.target.value);
            }}
            style={{ marginRight: '10px' }}
          />
          <Button
            type="primary"
            onClick={() => {
              setValue(getAverageGroup(data, groupKey));
            }}
          >
            计算
          </Button>
        </div>
      </div>
      <div>
        <div>计算结果</div>
        <Input.TextArea value={JSON.stringify(value, null, 4)} autoSize={true} />
      </div>
    </div>
  );
};

AverageGroup.cardProps = {
  title: '分组平均值',
};
