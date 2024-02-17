import RootStore from "../RootStore";

import AppleStore, { Color } from "./AppleStore";
import OrangeStore from "./OrangeStore";

const stores = [AppleStore, OrangeStore];
type FruitStores = (typeof stores)[number];

class FruitRootStore extends RootStore<FruitStores> {
  public name: string;
  constructor() {
    super(stores);
    this.name = "FruitRootStore";
  }

  public getAppleStore() {
    return super.getStore<AppleStore, Color>(AppleStore, "blue");
  }

  public getOrangeStore() {
    return super.getStore<OrangeStore, void>(OrangeStore);
  }
}

export default new FruitRootStore();
