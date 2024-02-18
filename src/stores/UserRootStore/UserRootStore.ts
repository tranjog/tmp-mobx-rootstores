import RootStore from "../RootStore";
import AccountStore from "./AccountStore";
import FriendsStore from "./FriendStore";

import type { Friend } from "./FriendStore";

class UserRootStore extends RootStore {
  constructor() {
    super();
    console.log("init userRoot");
  }

  public getAccountStore() {
    return super.getStore<AccountStore>(AccountStore);
  }

  public getFriendStore(
    friend: Friend = {
      age: 99,
      name: "John",
    }
  ) {
    return super.getStore<FriendsStore, Friend>(FriendsStore, friend);
  }
}

export default new UserRootStore();
