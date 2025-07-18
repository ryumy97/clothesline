class Settings {
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

class Grid {
  public x: number;
  public y: number;
  public width: number;
  public height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  render(ctx: CanvasRenderingContext2D) {
    if (!ctx) return;

    ctx.save();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.width, this.y + this.height);
    // ctx.closePath();
    ctx.stroke();
  }
}

class Scene {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;

  private animationId: number | null = null;

  private grids: Grid[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    if (!this.ctx) {
      throw new Error("Failed to get canvas context");
    }

    this.grids.push(
      new Grid(
        this.canvas.width / 2,
        this.canvas.height / 2,
        this.canvas.width,
        this.canvas.height
      )
    );

    this.resizeCanvas();
    window.addEventListener("resize", this.resizeCanvas.bind(this));
  }

  kill() {
    window.cancelAnimationFrame(this.animationId!);
    window.removeEventListener("resize", this.resizeCanvas.bind(this));
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const dpr = window.devicePixelRatio || 1;

    this.canvas.width = window.innerWidth * dpr;
    this.canvas.height = window.innerHeight * dpr;

    const settings = Settings.getInstance();
    settings.width = this.canvas.width;
    settings.height = this.canvas.height;
    settings.dpr = window.devicePixelRatio || 1;
    settings.renderArea.x = this.canvas.width / 2;
    settings.renderArea.y = this.canvas.height / 2;
    if (this.canvas.width > this.canvas.height) {
      settings.renderArea.width = this.canvas.height;
      settings.renderArea.height = this.canvas.height;
    } else {
      settings.renderArea.width = this.canvas.width;
      settings.renderArea.height = this.canvas.width;
    }

    this.grids.forEach((grid) => {
      grid.x = settings.renderArea.x - settings.renderArea.width / 2;
      grid.y = settings.renderArea.y - settings.renderArea.height / 2;
      grid.width = settings.renderArea.width;
      grid.height = settings.renderArea.height;
    });

    this.render();
  }
  render() {
    if (!this.ctx) return;

    this.animationId = window.requestAnimationFrame(this.render.bind(this));

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "#333333";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.grids.forEach((grid) => {
      grid.render(this.ctx!);
    });
  }
}

export default Scene;
