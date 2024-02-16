export type Stores = Record<T, any>;
// blueprint
abstract class RootStore {
  private storeInstances: Stores;

  constructor(storeInstances: Stores) {
    this.storeInstances = storeInstances;
  }

  public getStore<T>(storeName: T) {
    if (this.storeInstances[storeName].prototype) {
      console.log("here");
      this.storeInstances[storeName] = new this.storeInstances[storeName]();
    }
    return this.storeInstances[storeName];
  }
}

export default RootStore;
