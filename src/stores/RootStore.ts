abstract class RootStore<Store extends abstract new (...args: any[]) => any> {
  private stores = new Map<Store, InstanceType<Store>>();
  constructor(stores: Store[]) {
    stores.forEach((store) => {
      this.set(store, store as InstanceType<Store>);
    });
  }

  public get<K extends Store, V extends InstanceType<Store>>(
    key: K
  ): V | undefined {
    return this.stores.get(key);
  }

  private set<K extends Store, V extends InstanceType<Store>>(
    key: K,
    value: V
  ): void {
    this.stores.set(key, value);
  }

  protected getStore<T, S>(storeName: Store, initArgs?: S): T {
    const store = this.get(storeName);
    if (store?.prototype) {
      this.set(storeName, new store(initArgs));
    }
    return this.get(storeName) as T;
  }
}

export default RootStore;
