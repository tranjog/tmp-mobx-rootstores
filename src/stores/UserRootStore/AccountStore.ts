import FruitRootStore from "../FruitRootStore/FruitRootStore";

class AccountStore {
  public name: string;
  constructor() {
    this.name = "AccountStore";
  }

  public accessAppleStore() {
    return FruitRootStore.getAppleStore().getAccessedFrom(this.name);
  }
}

export default AccountStore;
