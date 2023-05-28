import { IData, IDataList } from 'interfaces';
import _ from 'lodash';
import { getAverage } from '../Average/util';

export const getAverageGroup = (data: IDataList, groupKey: string): _.Dictionary<IData> => {
  if (!data.length) {
    return {};
  }

  const decodedKeys = groupKey.split('&');

  const dataMap = _.groupBy(data, (item) => {
    return decodedKeys.reduce((acc, key) => {
      return acc + item[key];
    }, '');
  });
  const res = _.mapValues(dataMap, getAverage);

  return res;
};
