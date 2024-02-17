import RootStore from "../RootStore";

import AppleStore, { Color } from "./AppleStore";
import OrangeStore from "./OrangeStore";

class FruitRootStore extends RootStore {
  public name: string;
  constructor() {
    super();
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
