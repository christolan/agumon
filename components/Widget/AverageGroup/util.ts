import { IData, IDataList } from 'interfaces';
import _ from 'lodash';
import { getAverage } from '../Average/util';

export const getAverageGroup = (
  data: IDataList,
  groupKey: string
): _.Dictionary<IData> => {
  if (!data.length) {
    return {};
  }

  const dataMap = _.groupBy(data, groupKey);
  const res = _.mapValues(dataMap, getAverage);

  return res;
};
