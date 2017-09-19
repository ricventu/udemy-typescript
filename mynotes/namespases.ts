namespace MyMath {
    const PI = 3.14;

    export function calcCircumference(diameter:number) {
        return diameter * PI;
    }

    function nonPublicFunction() {
    }


    export namespace Square {
        export function calcRectangle(width:number, height: number) {
            return width * height;
        }
    }
}



// app.js

/// referece path="namespaces.ts" />   // include file

import Square = MyMath.Square;

Square.calcRectangle(2,3);
