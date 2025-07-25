export default class Settings {
  private static instance: Settings;
  public width: number = 0;
  public height: number = 0;
  public dpr: number = 1;
  public renderArea: {
    x: number;
    y: number;
    width: number;
    height: number;
  } = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };

  private constructor() {
    this.width = 0;
    this.height = 0;
    this.dpr = 0;

    this.renderArea.x = 0;
    this.renderArea.y = 0;
    this.renderArea.width = 0;
    this.renderArea.height = 0;
  }

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    return Settings.instance;
  }
}
