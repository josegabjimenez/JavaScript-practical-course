// Square

const calculateSquarePerimeter = () => {
    const result = document.getElementById("squareResult");
    const side = document.getElementById("squareSide").value;
    const perimeter = side * 4;
    result.value = `${perimeter} cm`;
}

const calculateSquareArea = () => {
    const result = document.getElementById("squareResult");
    const side = document.getElementById("squareSide").value;
    const area = Math.pow(side,2);
    result.value = `${area.toFixed(2)} cm²`;
}

//Triangle

const calculateTrianglePerimeter = () => {
    const result = document.getElementById("triangleResult");
    const sideA = parseFloat(document.getElementById("triangleSideA").value);
    const sideB = parseFloat(document.getElementById("triangleSideB").value);
    const base = parseFloat(document.getElementById("triangleBase").value);
    const height = parseFloat(document.getElementById("triangleHeight").value);

    if(sideA && sideB && base && height){
        const perimeter = sideA + sideB + base;
        result.value = `${perimeter} cm`;
        return;
    } else {
        result.value = `0 cm`;
    }

}

const calculateTriangleArea = () => {
    const result = document.getElementById("triangleResult");
    const sideA = parseFloat(document.getElementById("triangleSideA").value);
    const sideB = parseFloat(document.getElementById("triangleSideB").value);
    const base = parseFloat(document.getElementById("triangleBase").value);
    const height = parseFloat(document.getElementById("triangleHeight").value);
    
    if(sideA && sideB && base && height){
        const area = (base * height)/2;
        result.value = `${area} cm²`;
    } else {
        result.value = `0 cm²`;
    }
}

// Circle

const calculateCirclePerimeter = () => {
    const result = document.getElementById("circleResult");
    const radius = document.getElementById("circleRadius").value;
    const pi = Math.PI;
    const perimeter = 2 * pi * radius;
    result.value = `${perimeter.toFixed(2)} cm`;
}

const calculateCircleArea = () => {
    const result = document.getElementById("circleResult");
    const radius = document.getElementById("circleRadius").value;
    const pi = Math.PI;
    const area = pi * Math.pow(radius,2);
    result.value = `${area.toFixed(2)} cm²`;
}