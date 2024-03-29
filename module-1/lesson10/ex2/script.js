var tiles = [];
var freeCell = {
    y: 3,
    x: 3
};

function createField() { 
    var x, y, cell; 
    for(y = 0; y < 4; ++y) { 
        for(x = 0; x < 4; ++x) { 
            cell = createCellNull(); 
            cell.y = y;
            cell.x = x; 
            setCellOffset(cell); 
            appendCell(cell); 
        }
    }
}

function createCellNull() {
    var cell = document.createElement("div");
    cell.classList.add("field__cell", "field__cell--null");
    return cell;
}

function setCellOffset(cell) {
    /* + "px" необходимо, так как это значение своиства CSS */
    cell.style.left = (15 + (15 + 81.25) * cell.x) + "px";
    cell.style.top = (15 + (15 + 81.25) * cell.y) + "px";
}

function appendCell(cell) {
    var field = document.getElementById("field");
    field.appendChild(cell);
}

function createTiles() {
    var x, y, cell, n;
    for (y = 0; y < 4; ++y) {
        for (x = 0; x < 4; ++x) {
            n = y * 4 + x + 1;
            /* всего костяшек должно быть 15 */
            if (n < 16) {
                cell = createCellTile();
                cell.y = y;
                cell.x = x;
                cell.innerHTML = n;
                setCellOffset(cell);
                appendCell(cell);
                /* добавляет костяшку в массив */
                tiles.push(cell);
            }
        }
    }
}

createField();
createTiles(); // Добавили!


