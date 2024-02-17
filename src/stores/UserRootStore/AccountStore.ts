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
}

export default AccountStore;
