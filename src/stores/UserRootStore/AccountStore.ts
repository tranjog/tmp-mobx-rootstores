import { makeObservable, observable } from "mobx";
import FruitRootStore from "../FruitRootStore/FruitRootStore";

class AccountStore {
  name: string;
  constructor() {
    makeObservable(this, {
      name: observable,
    });
    this.name = "AccountStore";
    console.log(`init ${this.name}`);
  }

  public accessAppleStore() {
    return FruitRootStore.getAppleStore().getAccessedFrom(this.name);
  }

  public getOrangeName() {
    return FruitRootStore.getOrangeStore().name;
  }

  public getCyclicSelfName() {
    return FruitRootStore.getOrangeStore().getAccountName();
  }
}

export default AccountStore;
