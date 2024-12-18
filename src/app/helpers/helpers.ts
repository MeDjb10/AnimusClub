export class Helpers{
  public static generateUniqueId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }
}