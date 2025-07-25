import Grid from "./grid";
import Settings from "./settings";

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
      grid.resize();
    });

    this.render();
  }
  render() {
    if (!this.ctx) return;

    this.animationId = window.requestAnimationFrame(this.render.bind(this));

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "#AAAAAA";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.grids.forEach((grid) => {
      grid.render(this.ctx!);
    });
  }
}

export default Scene;
