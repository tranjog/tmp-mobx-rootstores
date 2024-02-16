class AppleStore {
  public name: string;
  constructor() {
    this.name = "AppleStore";
  }

  public getAccessedFrom(store: string) {
    return `${this.name} was accessed from ${store}`;
  }
}

export default AppleStore;
