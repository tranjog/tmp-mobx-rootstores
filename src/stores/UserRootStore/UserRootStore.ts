import RootStore from "../RootStore";
import AccountStore from "./AccountStore";
import FriendsStore from "./FriendsStore";

const stores = [AccountStore, FriendsStore];
type UserStores = (typeof stores)[number];

class UserRootStore extends RootStore<UserStores> {
  public name: string;
  constructor() {
    super(stores);
    this.name = "UserRootStore";
  }

  public getAccountStore() {
    return super.getStore<AccountStore, void>(AccountStore);
  }

  public getFriendsStore() {
    return super.getStore<FriendsStore, void>(FriendsStore);
  }
}

export default new UserRootStore();
