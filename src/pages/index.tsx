import Editor from '@monaco-editor/react';
import { Card, List } from 'antd';
import { Layout } from 'components/Layout';
import { Average } from 'components/Widget/Average';
import { AverageGroup } from 'components/Widget/AverageGroup';
import { ControlPanel } from 'components/Widget/ControlPanel';
import { PreloadRadio } from 'components/Widget/PreloadRadio';
import { Total } from 'components/Widget/Total';
import { IDataWidget } from 'interfaces';
import { useEffect, useState } from 'react';
import DataFetch from 'utils/DataFetch';

/**
 * 数据展示组件注册
 */
const widgets: IDataWidget[] = [ControlPanel, Total, Average, AverageGroup, PreloadRadio];

const IndexPage = () => {
  const [data, setData] = useState<IDataList>([]);

  useEffect(() => {
    DataFetch.on((res) => {
      if (Array.isArray(res.data)) {
        setData(res.data);
      }
    });
    DataFetch.start();
    return () => {
      DataFetch.stop();
    };
  }, []);

  return (
    <Layout
      left={<Editor language="json" value={JSON.stringify(data, null, 2)} theme="vs-dark" />}
      right={
        <List
          style={{ padding: '10px 10px 0 10px', margin: '10px' }}
          dataSource={widgets}
          renderItem={(Widget) => (
            <Card {...Widget.cardProps} style={{ marginBottom: '10px' }}>
              <Widget data={data} />
            </Card>
          )}
        />
      }
    />
  );
};

export default IndexPage;
