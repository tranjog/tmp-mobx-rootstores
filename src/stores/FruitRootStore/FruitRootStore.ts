import RootStore from "../RootStore";
import type { Stores } from "../RootStore";

import AppleStore from "./AppleStore";
import OrangeStore from "./OrangeStore";

const stores: Stores = {
  AppleStore: AppleStore,
  OrangeStore: OrangeStore,
};

class FruitRootStore extends RootStore {
  public name: string;
  constructor() {
    super(stores);
    this.name = "FruitRootStore";
  }
}

export default new FruitRootStore();
