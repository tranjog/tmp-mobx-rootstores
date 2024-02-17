import { makeObservable, observable } from "mobx";
import UserRootStore from "../UserRootStore/UserRootStore";

class OrangeStore {
  public name: string;
  constructor() {
    makeObservable(this, {
      name: observable,
    });
    this.name = "OrangeStore";
  }

  public getAccountName() {
    return UserRootStore.getAccountStore().name;
  }
}

export default OrangeStore;
