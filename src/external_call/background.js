import background from "./background.json";

export class BackgroundImage {
  constructor() {
    this.timestamp =
      localStorage.getItem("timestamp") ||
      new Date().toISOString().split("T")[0];
    this.max = background.length - 1;
    this.random =
      Number(
        localStorage.getItem("imageIndex") || this.timestamp.replace(/-/g, "")
      ) % this.max;
  }

  getRandomUnsplashBackground() {
    let number = this.random++;
    if (number > this.max) {
      number = 0;
      this.random = 0;
    }
    localStorage.setItem("imageIndex", number);
    return background.at(number);
  }
}
