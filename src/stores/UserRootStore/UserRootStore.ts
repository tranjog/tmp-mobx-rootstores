import RootStore from "../RootStore";
import type { Stores } from "../RootStore";

import AccountStore from "./AccountStore";
import FriendsStore from "./FriendsStore";

const stores: Stores = {
  AccountStore: AccountStore,
  FriendsStore: FriendsStore,
};

class UserRootStore extends RootStore {
  public name: string;
  constructor() {
    super(stores);
    this.name = "UserRootStore";
  }
}

export default new UserRootStore();
