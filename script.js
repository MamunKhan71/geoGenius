
function addToResultList(calBackFunc, result) {
    const listUpdate = document.getElementById('areaList');
    const newLi = document.createElement('li'); // Separate createElement
    newLi.classList.add('mb-4', 'text-center', 'flex', 'items-center', 'justify-between', 'gap-4'); // Add classes
    newLi.innerHTML = `
            <span class="list-decimal list-inside">${calBackFunc}</span>
            <span>${result}</span>
            <button class="btn btn-primary">Convert to m2</button>
    `;
    listUpdate.appendChild(newLi);
}
let area = 0;
function calculateTriangle() {
    const calBackFunc = "Triangle";
    const value1 = document.getElementById('tri1').value;
    const value2 = document.getElementById('tri2').value;
    area = 0.5 * value1 * value2;
    addToResultList(calBackFunc, area.toFixed(2));
}
function calculateRectangle() {
    const calBackFunc = "Rectangle";
    const value1 = document.getElementById('ract1').value;
    const value2 = document.getElementById('ract2').value;
    area = value1 * value2;
    addToResultList(calBackFunc, area.toFixed(2));



}
function calculateParallelogram() {
    const calBackFunc = "Parallelogram";
    const value1 = document.getElementById('para1').value;
    const value2 = document.getElementById('para2').value;
    area = value1 * value2;
    addToResultList(calBackFunc, area.toFixed(2));


}
function calculateRhomb() {
    const calBackFunc = "Rhombus";

    const value1 = document.getElementById('rhmo1').value;
    const value2 = document.getElementById('rhmo2').value;
    area = 0.5 * value1 * value2;
    addToResultList(calBackFunc, area);



}
function calculatePentagon() {
    const calBackFunc = "Pentagon";

    const value1 = document.getElementById('penta1').value;
    const value2 = document.getElementById('penta2').value;
    area = 0.5 * value1 * value2;
    addToResultList(calBackFunc, area.toFixed(2));


}
function calculateEllipse() {
    const calBackFunc = "Ellipse";

    const value1 = document.getElementById('ellips1').value;
    const value2 = document.getElementById('ellips2').value;
    area = Math.PI * value1 * value2;
    addToResultList(calBackFunc, area.toFixed(2));



}
