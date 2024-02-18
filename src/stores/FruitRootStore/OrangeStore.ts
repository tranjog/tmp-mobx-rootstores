import { computed, makeObservable, observable } from "mobx";
import UserRootStore from "../UserRootStore/UserRootStore";

class OrangeStore {
  public name: string;
  constructor() {
    makeObservable(this, {
      name: observable,
      accountName: computed,
    });
    this.name = "OrangeStore";
  }

  public getAccountStore() {
    return UserRootStore.getAccountStore();
  }
  public get accountName() {
    return UserRootStore.getAccountStore().name;
  }
}

export default OrangeStore;
