class DataCache {
  private data = [];

  private id = 0;
  private generateId = () => {
    const id = this.id;
    console.log("id", id);
    this.id++;
    return id;
  };

  public get = () => {
    return this.data;
  };

  public put = (item) => {
    this.data.push({
      ...item,
      id: this.generateId(),
    });
  };
}

export default new DataCache();
