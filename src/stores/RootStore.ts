// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Store = InstanceType<abstract new (...args: any) => any>;

abstract class RootStore {
  private stores = new Map<Store, InstanceType<Store>>();

  private get<K extends Store, V extends InstanceType<Store>>(key: K) {
    return this.stores.get(key) as V | undefined;
  }

  private set<K extends Store, V extends InstanceType<Store>>(
    key: K,
    value: V
  ): void {
    this.stores.set(key, value);
  }

  private has<K extends Store>(key: K): boolean {
    return this.stores.has(key);
  }

  protected getStore<T, S extends undefined = undefined>(
    store: Store,
    initArgs: Array<S> = []
  ): T {
    if (!this.has(store)) {
      this.set(store, new store(...initArgs));
    }

    return this.get(store) as T;
  }
}

export default RootStore;
