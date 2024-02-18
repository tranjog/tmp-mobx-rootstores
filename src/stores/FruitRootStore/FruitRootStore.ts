import RootStore from "../RootStore";

import AppleStore from "./AppleStore";
import type { Color } from "./AppleStore";
import OrangeStore from "./OrangeStore";

class FruitRootStore extends RootStore {
  public name: string;
  constructor() {
    super();
    this.name = "FruitRootStore";
  }

  public getAppleStore() {
    return super.getStore<AppleStore, [Color, string]>(AppleStore, [
      "blue",
      "Apple",
    ]);
  }

  public getOrangeStore() {
    return super.getStore<OrangeStore>(OrangeStore);
  }
}

export default new FruitRootStore();
