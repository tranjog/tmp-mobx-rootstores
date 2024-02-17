import { action, makeObservable, observable } from "mobx";

export type Color = "red" | "blue";

class AppleStore {
  public name: string;
  public color: Color;
  constructor(color: Color) {
    makeObservable(this, {
      color: observable,
      setColor: action,
    });
    this.name = "AppleStore";
    this.color = color;
    console.log(`init ${this.name}`);
  }

  public getAccessedFrom(store: string) {
    return `${this.name} was accessed from ${store}, and my color is ${this.color}`;
  }

  public setColor(color: Color) {
    this.color = color;
  }
}

export default AppleStore;
