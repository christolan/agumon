import { NextApiRequest, NextApiResponse } from 'next';
import DataCache from 'utils/DataCache';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json({
      message: 'success',
      data: DataCache.get(),
    });
  } else if (req.method === 'PUT') {
    DataCache.put(req.body);
    res.status(200).json({
      message: 'success',
    });
  } else if (req.method === 'DELETE') {
    DataCache.delete(req.body?.ids);
    res.status(200).json({
      message: 'success',
    });
  }
}
