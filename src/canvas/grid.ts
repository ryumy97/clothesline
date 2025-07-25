import GridItem from "./grid-item";
import Settings from "./settings";

export default class Grid {
  public x: number;
  public y: number;
  public width: number;
  public height: number;

  public gridItems: GridItem[] = [];

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    const firstColWidth = this.width / 10 / 2;
    const restColWidth = (this.width / 2 - firstColWidth) / 4;
    const firstColOffset = firstColWidth;
    const secondColOffset = restColWidth + firstColWidth;
    const thirdColOffset = restColWidth * 2 + firstColWidth;
    const fourthColOffset = restColWidth * 3 + firstColWidth;
    const fifthColOffset = restColWidth * 4 + firstColWidth;

    this.gridItems.push(
      new GridItem(
        this.x - fifthColOffset,
        this.y - fifthColOffset,
        this.x + fifthColOffset,
        this.y - fifthColOffset,
        this.x + fourthColOffset,
        this.y - fourthColOffset,
        this.x - fourthColOffset,
        this.y - fourthColOffset
      ),

      new GridItem(
        this.x - fourthColOffset,
        this.y - fourthColOffset,
        this.x + fourthColOffset,
        this.y - fourthColOffset,
        this.x + thirdColOffset,
        this.y - thirdColOffset,
        this.x - thirdColOffset,
        this.y - thirdColOffset
      )
    );

    console.log(this.gridItems);
  }

  resize() {
    const settings = Settings.getInstance();

    this.x = settings.renderArea.x;
    this.y = settings.renderArea.y;
    this.width = settings.renderArea.width / 2;
    this.height = settings.renderArea.height / 2;

    const firstColWidth = this.width / 10 / 2;
    const restColWidth = (this.width / 2 - firstColWidth) / 4;
    const firstColOffset = firstColWidth;
    const secondColOffset = restColWidth + firstColWidth;
    const thirdColOffset = restColWidth * 2 + firstColWidth;
    const fourthColOffset = restColWidth * 3 + firstColWidth;
    const fifthColOffset = restColWidth * 4 + firstColWidth;

    this.gridItems = [];

    this.gridItems.push(
      new GridItem(
        this.x - fifthColOffset,
        this.y - fifthColOffset,
        this.x + fifthColOffset,
        this.y - fifthColOffset,
        this.x + fourthColOffset,
        this.y - fourthColOffset,
        this.x - fourthColOffset,
        this.y - fourthColOffset
      ),

      new GridItem(
        this.x - fourthColOffset,
        this.y - fourthColOffset,
        this.x + fourthColOffset,
        this.y - fourthColOffset,
        this.x + thirdColOffset,
        this.y - thirdColOffset,
        this.x - thirdColOffset,
        this.y - thirdColOffset
      )
    );
  }

  render(ctx: CanvasRenderingContext2D) {
    if (!ctx) return;

    ctx.save();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;

    const firstColWidth = this.width / 7 / 2;
    const restColWidth = (this.width / 2 - firstColWidth) / 4;
    const firstColOffset = firstColWidth;
    const secondColOffset = restColWidth + firstColWidth;
    const thirdColOffset = restColWidth * 2 + firstColWidth;
    const fourthColOffset = restColWidth * 3 + firstColWidth;
    const fifthColOffset = restColWidth * 4 + firstColWidth;

    // Top Left
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - fifthColOffset, this.y + fifthColOffset);
    ctx.stroke();
    // Vertical
    ctx.beginPath();
    ctx.moveTo(this.x - firstColOffset, this.y);
    ctx.lineTo(this.x - firstColOffset, this.y - firstColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x - secondColOffset, this.y);
    ctx.lineTo(this.x - secondColOffset, this.y - secondColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x - thirdColOffset, this.y);
    ctx.lineTo(this.x - thirdColOffset, this.y - thirdColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x - fourthColOffset, this.y);
    ctx.lineTo(this.x - fourthColOffset, this.y - fourthColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x - fifthColOffset, this.y);
    ctx.lineTo(this.x - fifthColOffset, this.y - fifthColOffset);
    ctx.stroke();

    // Horizontal
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - firstColOffset);
    ctx.lineTo(this.x - firstColOffset, this.y - firstColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y - secondColOffset);
    ctx.lineTo(this.x - secondColOffset, this.y - secondColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y - thirdColOffset);
    ctx.lineTo(this.x - thirdColOffset, this.y - thirdColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y - fourthColOffset);
    ctx.lineTo(this.x - fourthColOffset, this.y - fourthColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y - fifthColOffset);
    ctx.lineTo(this.x - fifthColOffset, this.y - fifthColOffset);
    ctx.stroke();

    // Top Right
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + fifthColOffset, this.y - fifthColOffset);
    ctx.stroke();
    // Vertical
    ctx.beginPath();
    ctx.moveTo(this.x + firstColOffset, this.y);
    ctx.lineTo(this.x + firstColOffset, this.y - firstColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x + secondColOffset, this.y);
    ctx.lineTo(this.x + secondColOffset, this.y - secondColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x + thirdColOffset, this.y);
    ctx.lineTo(this.x + thirdColOffset, this.y - thirdColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x + fourthColOffset, this.y);
    ctx.lineTo(this.x + fourthColOffset, this.y - fourthColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x + fifthColOffset, this.y);
    ctx.lineTo(this.x + fifthColOffset, this.y - fifthColOffset);
    ctx.stroke();

    // Horizontal
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - firstColOffset);
    ctx.lineTo(this.x + firstColOffset, this.y - firstColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y - secondColOffset);
    ctx.lineTo(this.x + secondColOffset, this.y - secondColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y - thirdColOffset);
    ctx.lineTo(this.x + thirdColOffset, this.y - thirdColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y - fourthColOffset);
    ctx.lineTo(this.x + fourthColOffset, this.y - fourthColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y - fifthColOffset);
    ctx.lineTo(this.x + fifthColOffset, this.y - fifthColOffset);
    ctx.stroke();

    // Bottom Left
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - fifthColOffset, this.y - fifthColOffset);
    ctx.stroke();
    // Vertical
    ctx.beginPath();
    ctx.moveTo(this.x - firstColOffset, this.y);
    ctx.lineTo(this.x - firstColOffset, this.y + firstColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x - secondColOffset, this.y);
    ctx.lineTo(this.x - secondColOffset, this.y + secondColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x - thirdColOffset, this.y);
    ctx.lineTo(this.x - thirdColOffset, this.y + thirdColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x - fourthColOffset, this.y);
    ctx.lineTo(this.x - fourthColOffset, this.y + fourthColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x - fifthColOffset, this.y);
    ctx.lineTo(this.x - fifthColOffset, this.y + fifthColOffset);
    ctx.stroke();
    // Horizontal
    ctx.beginPath();
    ctx.moveTo(this.x, this.y + firstColOffset);
    ctx.lineTo(this.x - firstColOffset, this.y + firstColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y + secondColOffset);
    ctx.lineTo(this.x - secondColOffset, this.y + secondColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y + thirdColOffset);
    ctx.lineTo(this.x - thirdColOffset, this.y + thirdColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y + fourthColOffset);
    ctx.lineTo(this.x - fourthColOffset, this.y + fourthColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y + fifthColOffset);
    ctx.lineTo(this.x - fifthColOffset, this.y + fifthColOffset);
    ctx.stroke();

    // Bottom Right
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + fifthColOffset, this.y + fifthColOffset);
    ctx.stroke();
    // Vertical
    ctx.beginPath();
    ctx.moveTo(this.x + firstColWidth, this.y);
    ctx.lineTo(this.x + firstColWidth, this.y + firstColWidth);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x + secondColOffset, this.y);
    ctx.lineTo(this.x + secondColOffset, this.y + secondColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x + thirdColOffset, this.y);
    ctx.lineTo(this.x + thirdColOffset, this.y + thirdColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x + fourthColOffset, this.y);
    ctx.lineTo(this.x + fourthColOffset, this.y + fourthColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x + fifthColOffset, this.y);
    ctx.lineTo(this.x + fifthColOffset, this.y + fifthColOffset);
    ctx.stroke();
    // Horizontal
    ctx.beginPath();
    ctx.moveTo(this.x, this.y + firstColWidth);
    ctx.lineTo(this.x + firstColWidth, this.y + firstColWidth);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y + secondColOffset);
    ctx.lineTo(this.x + secondColOffset, this.y + secondColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y + thirdColOffset);
    ctx.lineTo(this.x + thirdColOffset, this.y + thirdColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y + fourthColOffset);
    ctx.lineTo(this.x + fourthColOffset, this.y + fourthColOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y + fifthColOffset);
    ctx.lineTo(this.x + fifthColOffset, this.y + fifthColOffset);
    ctx.stroke();

    this.gridItems.forEach((item) => item.render(ctx));
  }
}
