import { NextApiRequest, NextApiResponse } from 'next';
import { kv } from '@vercel/kv';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = await getData();
      res.status(200).json({
        message: 'success',
        data,
      });
    } catch (error) {
      res.status(400).json({
        message: 'fail',
        data: [],
      });
    }
  } else if (req.method === 'PUT') {
    try {
      const data = await getData();
      const newData = [
        ...data,
        {
          ...req.body,
          id: generateId(data),
        },
      ];
      await kv.set('data', newData);
      res.status(200).json({
        message: 'success',
      });
    } catch (error) {
      // console.error('put', error);
      res.status(400).json({
        message: 'fail',
      });
    }
  } else if (req.method === 'DELETE') {
    try {
      await kv.set('data', []);
      res.status(200).json({
        message: 'success',
      });
    } catch (error) {
      res.status(400).json({
        message: 'fail',
      });
    }
  }
}

const getData = async () => {
  const data = await kv.get<IDataList>('data');
  // console.log('data = ', data);
  return data || [];
};

const generateId = (data: IDataList) => {
  if (!data.length) {
    return 0;
  }
  const tail = data[data.length - 1];
  if (!tail.id) {
    return 0;
  }
  return tail.id + 1;
};
