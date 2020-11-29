/* eslint-disable unicorn/number-literal-case */
export class CarOOP extends PIXI.Container {
  car;
  annotation;
  carnumber;
  category;
  constructor(category, color, carnumber) {
    super();
    console.log(category, color, carnumber);
    this.initialize(category, color, carnumber);
    this.color = color;
    this.carnumber = carnumber;
    this.category = category;
  }

  initialize(category, color, carnumber) {
    this.car = new PIXI.Graphics();

    this.car.beginFill(0xffffff, 1);
    this.car.drawCircle(0, 0, 2);
    switch (category) {
      case 'LMGTEAm':
        this.car.tint = 0xffa500;
        break;
      case 'LMGTEPro':
        this.car.tint = 0x00ff00;
        break;
      case 'LMP2':
        this.car.tint = 0x0000ff;
        break;

      case 'LMP1':
        this.car.tint = 0xff0000;
        break;
    }

    console.log(this);
    const text = new PIXI.Text(carnumber, {
      fontFamily: '"Courier New", Courier, monospace',
      fontWeight: 'bold',
      fontSize: 2,
      fill: 0xffffff,
      align: 'center',
    });
    text.position.x = -3.5;
    if (carnumber < 10) {
      text.position.x = -2;
    }
    text.position.y = -3;
    text.resolution = 8;

    //   ghost.tint = 0xff0000;

    this.car.addChild(text);
    this.car.zIndex = 5;
    this.addChild(this.car);
  }

  setAnnotationScale(scale = 1) {
    this.annotation.scale.set(scale, scale);
  }

  addAnnotation(
    text,
    color = 0x2c3e50,
    distance = 19,
    angle = 90,
    scale = 0.5,
  ) {
    const degrees = angle * (Math.PI / 180);
    const x =
      Math.cos(degrees) * (0 - 0) - Math.sin(degrees) * (-25 - 0) + 0;
    const y =
      Math.sin(degrees) * (0 - 0) + Math.cos(degrees) * (-25 - 0) + 0;
    this.annotation = new PIXI.Graphics();
    this.annotation.beginFill(color); // Purple

    // Draw a rectangle

    this.annotation.drawRect(x + 10, y, text.length * 4.9 + 10, 10); // drawRect(x, y, width, height)
    this.annotation.endFill();

    // draw white number box
    this.annotation.beginFill(0xffffff);
    this.annotation.moveTo(x + 5, y);
    this.annotation.lineTo(x + 15, y);
    this.annotation.lineTo(x + 10, y + 10);
    this.annotation.lineTo(x, y + 10);

    this.annotation.endFill();
    // draw class
    switch (this.category) {
      case 'LMGTEAm':
        this.annotation.beginFill(0xffa500);
        break;
      case 'LMGTEPro':
        this.annotation.beginFill(0x00ff00);
        break;
      case 'LMP2':
        this.annotation.beginFill(0x0000ff);
        break;

      case 'LMP1':
        this.annotation.beginFill(0xff0000);
        break;
    }
    this.annotation.moveTo(x + 15, y);
    this.annotation.lineTo(x + 20, y);
    this.annotation.lineTo(x + 15, y + 10);
    this.annotation.lineTo(x + 10, y + 10);

    this.annotation.endFill();
    const line = new PIXI.Graphics();
    this.annotation.scale.set(scale, scale);
    line.lineStyle(0.25, 0xffffff);
    line.moveTo(2.5, -2.5);
    line.lineTo(x, y + 10);
    this.annotation.addChild(line);
    line.zIndex = -1;
    const text1 = new PIXI.Text(this.carnumber, {
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: 7,
      fill: 0x001100,
      align: 'center',
    });
    text1.position.x = x + 4;
    text1.position.y = y + 1;
    text1.resolution = 8;

    const text2 = new PIXI.Text(text, {
      fontFamily: '"Courier New", Courier, monospace',
      fontWeight: 'bold',
      fontSize: 8,
      fill: 0xffffff,
      align: 'center',
      fontStyle: 'italic',
    });
    text2.position.x = x + 22;
    text2.position.y = y;

    text2.resolution = 8;
    this.annotation.addChild(text1);
    this.annotation.addChild(text2);
    this.annotation.zIndex = 1000;
    this.addChild(this.annotation);
  }
}
