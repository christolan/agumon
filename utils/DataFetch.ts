import {
  IDataFetchListener,
  IDataFetchStatusListener,
  IGetDataResponse,
} from "interfaces";

class DataFetch {
  private timer: NodeJS.Timeout;
  /**
   * 轮询间隔
   */
  interval = 1000;
  /**
   * 轮询结果监听
   */
  listeners = new Set<IDataFetchListener>();
  /**
   * 轮询开关状态
   */
  status = false;
  /**
   * 轮询开关监听
   */
  statusListeners = new Set<IDataFetchStatusListener>();

  setStatus = (value: boolean) => {
    if (value !== this.status) {
      this.status = value;
      this.statusListeners.forEach((func) => {
        func(this.status);
      });
    }
  };

  start = () => {
    if (this.status) {
      return;
    }
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      fetch("/api/data")
        .then((res) => {
          return res.json() as Promise<IGetDataResponse>;
        })
        .then((jsonRes) => {
          this.listeners.forEach((func) => {
            func(jsonRes);
          });
        });
    }, this.interval);
    this.setStatus(true);
  };

  stop = () => {
    if (!this.status) {
      return;
    }
    clearInterval(this.timer);
    this.setStatus(false);
  };

  on = (listener: IDataFetchListener) => {
    if (this.listeners.has(listener)) {
      return;
    }
    this.listeners.add(listener);
  };

  off = (listener: IDataFetchListener) => {
    this.listeners.delete(listener);
  };

  onStatusChange = (listener: IDataFetchStatusListener) => {
    if (this.statusListeners.has(listener)) {
      return;
    }
    this.statusListeners.add(listener);
  };
}

export default new DataFetch();
