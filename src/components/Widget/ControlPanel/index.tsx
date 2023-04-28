import { Button, Popconfirm, Switch } from 'antd';
import { IDataWidget } from 'interfaces';
import { useEffect, useState } from 'react';
import DataFetch from 'utils/DataFetch';
import styles from './index.module.css';

export const ControlPanel: IDataWidget = () => {
  const [value, setValue] = useState(DataFetch.status);

  useEffect(() => {
    DataFetch.onStatusChange(setValue);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className={styles.switch}>
        <span className={styles['switch-text']}>轮询开关</span>
        <Switch
          checked={value}
          onChange={(checked) => {
            if (checked) {
              DataFetch.start();
            } else {
              DataFetch.stop();
            }
          }}
        />
      </div>

      <Popconfirm
        title="确认清空数据吗？"
        onConfirm={() => {
          fetch('/api/data', { method: 'DELETE' }).catch((e) => {
            console.error('error when DELETE /api/data', e);
          });
        }}
      >
        <Button type="primary" danger={true}>
          清空数据
        </Button>
      </Popconfirm>
    </div>
  );
};

ControlPanel.cardProps = {
  title: '控制面板',
};
