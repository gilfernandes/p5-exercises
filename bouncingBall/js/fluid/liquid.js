function Liquid(x, y, w, h, dragCoefficient, fill) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dragCoefficient = dragCoefficient;
    this.fill = fill;
}

Liquid.prototype.display = function () {
    noStroke();
    fill(this.fill);
    rect(this.x, this.y, this.w, this.h);
};