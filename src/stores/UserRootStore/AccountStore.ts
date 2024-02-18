import { makeObservable, observable } from "mobx";
import FruitRootStore from "../FruitRootStore/FruitRootStore";
import UserRootStore from "./UserRootStore";

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

  public getOrangeStore() {
    return FruitRootStore.getOrangeStore();
  }

  public getCyclicSelfName() {
    return FruitRootStore.getOrangeStore().accountName;
  }

  // This insanity does not produce a cyclical store warning
  public getQuadCycle() {
    return UserRootStore.getFriendStore().getOrangeStore().getAccountStore()
      .name;
  }
}

export default AccountStore;
