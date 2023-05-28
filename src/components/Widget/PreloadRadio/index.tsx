import { IDataWidget } from 'interfaces';
import _ from 'lodash';

export const PreloadRadio: IDataWidget = ({ data }) => {
  const a = _.groupBy(data, 'preloadLibra');
  const b = _.groupBy(data, 'preloadStatus');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        {_.map(a, (value, key) => {
          return (
            <div>
              <span>{key}:</span>
              <span>{value.length}</span>
            </div>
          );
        })}
      </div>
      <div>
        {_.map(b, (value, key) => {
          return (
            <div>
              <span>{key}:</span>
              <span>{value.length}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

PreloadRadio.cardProps = {
  title: '预加载命中率',
};
