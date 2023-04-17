import { IData, IDataList } from 'interfaces';
import _ from 'lodash';
import { idKey } from 'utils/DataCache';

export const getAverage = (data: IDataList): IData => {
  const total: IData = {};

  if (!data.length) {
    return total;
  }

  const head = _.head(data);
  const keys = [];
  _.forEach(head, (value, key) => {
    if (_.isNumber(value) && key !== idKey) {
      keys.push(key);
      total[key] = 0; // 初始化 total
    }
  });

  _.forEach(data, (item) => {
    _.forEach(keys, (key) => {
      total[key] = (total[key] as number) + (item[key] as number);
    });
  });

  _.forEach(keys, (key) => {
    total[key] = (total[key] as number) / data.length;
  });

  return total;
};
