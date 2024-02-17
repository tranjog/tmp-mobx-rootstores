export type Color = "red" | "blue";

class AppleStore {
  public name: string;
  public color: Color;
  constructor(color: Color) {
    this.name = "AppleStore";
    this.color = color;
  }

  public getAccessedFrom(store: string) {
    return `${this.name} was accessed from ${store}, and my color is ${this.color}`;
  }
}

export default AppleStore;
