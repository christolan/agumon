// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

import React from "react";

export type User = {
  id: number;
  name: string;
};

export type IData = Record<string, number | string>;
export type IDataList = IData[];

export type IDataWidget = React.FC<{ data: IDataList }>;

export interface IGetDataResponse {
  message: string;
  data?: IDataList;
}
export type IDataFetchListener = (res: IGetDataResponse) => void;
export type IDataFetchStatusListener = (status: boolean) => void;
