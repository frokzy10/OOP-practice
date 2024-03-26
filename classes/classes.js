class Rectangle {
    constructor(w, h) {
        this._width = w;
        this._height = h;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (value <= 0) {
            this._width = 1;
        } else {
            this._width = value;
        }
    }

    calcArea() {
        return this._width * this._height;
    }
}

const rect = new Rectangle(5, 10);
rect.width = -2;
console.log(rect.width);
