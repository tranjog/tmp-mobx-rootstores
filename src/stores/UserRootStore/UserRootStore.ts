import RootStore from "../RootStore";
import AccountStore from "./AccountStore";
import FriendsStore from "./FriendsStore";

class UserRootStore extends RootStore {
  constructor() {
    super();
    console.log("init userRoot");
  }

  public getAccountStore() {
    return super.getStore<AccountStore>(AccountStore);
  }

  public getFriendsStore() {
    return super.getStore<FriendsStore>(FriendsStore);
  }
}

export default new UserRootStore();
