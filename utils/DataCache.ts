import _ from 'lodash';

class DataCache {
  private data = [];

  private id = 0;
  private generateId = () => {
    const id = this.id;
    console.log('id', id);
    this.id++;
    return id;
  };

  public get = () => {
    return this.data;
  };

  public put = (item) => {
    this.data.push({
      ...item,
      [idKey]: this.generateId(),
    });
  };

  public delete = (ids?: string[]) => {
    if (ids?.length) {
      _.remove(this.data, (item) => _.includes(ids, item.id));
    } else {
      this.data = [];
    }
  };
}

export const idKey = 'id';
export default new DataCache();
