let A = [1,2,3]
let B = [1,2,3]
result=false

function arraysEqual (A,B) {
    A.forEach(element => {

        result=B.includes(element,0);
    });
    console.log(result);
    };

arraysEqual(A,B);
