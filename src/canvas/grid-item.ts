export default class GridItem {
  public x1: number;
  public y1: number;
  public x2: number;
  public y2: number;
  public x3: number;
  public y3: number;
  public x4: number;
  public y4: number;

  constructor(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number
  ) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.x4 = x4;
    this.y4 = y4;
  }

  render(ctx: CanvasRenderingContext2D) {
    if (!ctx) return;

    ctx.save();
    ctx.fillStyle = "#000000";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.lineTo(this.x3, this.y3);
    ctx.lineTo(this.x4, this.y4);
    ctx.closePath();
    ctx.fill();
  }
}
