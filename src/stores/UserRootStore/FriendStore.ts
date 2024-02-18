import { makeObservable, observable } from "mobx";
import FruitRootStore from "../FruitRootStore/FruitRootStore";

export interface Friend {
  name: string;
  age: number;
}
class FriendStore {
  public name: string;
  public age: number;
  constructor(obj: Friend) {
    makeObservable(this, {
      name: observable,
      age: observable,
    });

    const { age, name } = obj;
    this.age = age;
    this.name = name;
  }
  public getOrangeStore() {
    return FruitRootStore.getOrangeStore();
  }
}

export default FriendStore;
