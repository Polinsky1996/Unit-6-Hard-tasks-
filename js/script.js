//Task 1

function f1() {
    let out = '';

    for ( let i = 1; i <= 9; i++) {
        for ( let k = 1; k <= 9; k++) {
            out += `${i}*${k} = ${i * k}<br>`;
        }

        out += '<br>';
    }

    document.querySelector('.out-1').innerHTML = out;
}

document.querySelector('.b-1').onclick = f1;

//Task 2

function f2() {
    let out = '';

    for ( let i = 0; i < 3; i++) {
        for ( let k = 0; k < 5; k++) {
            out += '*';
        }

        out += '<br>';
    }

    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = f2;


//Task 3

function f3() {
    let out = '';

    for ( let i = 5; i > 0; i-- ) {
        for ( let k = 0; k < i; k++) {
            out += '*';
        }

        out += '<br>';
    }

    document.querySelector('.out-3').innerHTML = out;
}

document.querySelector('.b-3').onclick = f3;


//Task 4

function f5() {
    let out = '';

    for ( let i = 0; i < 3; i++) {
        for ( let k = 0; k < 5; k++) {
            out += '*';
        }
        
        out += '<br>';
    }

    document.querySelector('.out-5').innerHTML = out;
}

document.querySelector('.b-5').onclick = f5;


//Task 5

function f5() {
    let out = '';

    for ( let i = 3; i > 0; i--) {
        for ( let j = 1; j < i; j++) {
            out += '&nbsp';
        }

        for ( let k = 0; k < 5; k++) {
            out += '*';
        }
        
        out += '<br>';
    }

    document.querySelector('.out-5').innerHTML = out;
}

document.querySelector('.b-5').onclick = f5;


//Task 6
/*
function f6() {
    let out = '',
        j = 5,
        k = 0;


    for ( let i = 1; i <= 5; i++) {
        k = Math.abs(j - i);

        if ( k == 4 ) {
            out += '*';
        }
        else {
            if ( k == 2) {
                out += '**';
            }
            else {
                out += '***';
            }
        }
        
        j -= 1;
        out += '<br>';
    }

    document.querySelector('.out-6').innerHTML = out;
}

document.querySelector('.b-6').onclick = f6;

*/

//Task 6 (v2)

function f6() {
    let out = '';


    for ( let i = -2; i <= 2; i++) {
        for ( let k = 1; k <= (3 - Math.abs(i)); k++) {
            out += '*';
        }
        
        out += '<br>';
    }

    document.querySelector('.out-6').innerHTML = out;
}

document.querySelector('.b-6').onclick = f6;


//Task 7

function f7() {
    let out = '';

    for ( let i = 0; i < 6; i++) {
        out += '*';
    }

    out += '<br>';

    for ( let i = 0; i < 3; i++) {
        out += '*';
        for ( let i = 0; i < 5; i++) {
            out += '&nbsp&nbsp';
        }
        out += '*<br>';
    }

    for ( let i = 0; i < 6; i++) {
        out += '*';
    }

    document.querySelector('.out-7').innerHTML = out;
}

document.querySelector('.b-7').onclick = f7;


//Task 8

function f8() {
    let out = '';

    for ( let i = 6; i > 1; i--) {
        for ( let k = (i - 1); k > 0; k--) {
            out += `${k} `;
        }
        out += '<br>';
    }

    document.querySelector('.out-8').innerHTML = out;
}

document.querySelector('.b-8').onclick = f8;


//Task 9

function f9() {
    let out = '';

    for ( let i = 1; i <= 5; i++) {
        for ( let s = (5 - i); s > 0; s-- ) {
            out += '&nbsp&nbsp&nbsp';
        }

        for ( let k = i; k > 0; k-- ) {
            out += `${k} `;
        }
        out += '<br>';
    }

    document.querySelector('.out-9').innerHTML = out;
}

document.querySelector('.b-9').onclick = f9;


//Task 10

function f10() {
    let out = '';

    for ( let i = 1; i <= 5; i++) {
        for ( let s = (5 - i); s > 0; s-- ) {
            out += `x `;
        }

        for ( let k = i; k > 0; k--) {
            out += `${k} `;
        }
        out += '<br>';
    }

    document.querySelector('.out-10').innerHTML = out;
}

document.querySelector('.b-10').onclick = f10;


//Task 11

function f11() {
    let out = '';

    for ( let i = 1; i <= 5; i++) {
        for ( let k = 1; k <= i; k++) {
            out += `${i}&nbsp&nbsp`;
        }

        for ( let s = (5 - i); s > 0; s-- ) {
            out += '&nbsp&nbsp&nbsp';
        }

        out += '<br>';
    }

    document.querySelector('.out-11').innerHTML = out;
}

document.querySelector('.b-11').onclick = f11;


//Task 12

function f12() {
    let out = '';

    for ( let i = 5; i >= 1; i-- ) {
        for ( let k = 5; k >= i; k-- ) {
            if (i % 2 != 0) {
                out += `${i}&nbsp&nbsp`;    
            }
            else {
                out += `x&nbsp&nbsp`; 
            }  
        }

        for ( let s = (i - 1); s > 0; s-- ) {
            out += '&nbsp&nbsp&nbsp';
        }

        out += '<br>';
    }

    document.querySelector('.out-12').innerHTML = out;
}

document.querySelector('.b-12').onclick = f12;


//Task 13

function f13() {
    let out = '';
    
    for ( let i = 0; i < 3; i++ ) {
        for ( let s1 = 2; s1 > i; s1-- ) {
            out += '&nbsp&nbsp';
        }

        for (let k = 1; k <= (5 + (i * 2)); k++) {
            out += '*';
        }

        out += '<br>';
    }
    
    document.querySelector('.out-13').innerHTML = out;
}
    
document.querySelector('.b-13').onclick = f13;


//Task 14

function f14() {
    let out = '';
    
    for ( let i = -2; i <= 2; i++) {
        for ( let s = 0; s < Math.abs(i); s++) {
            out += '&nbsp&nbsp';
        }
        for ( let k = 0; k < (6 - (Math.abs(i) * 2)); k++) {
            out += '*';
        }
    
        out += '<br>';
    }
    document.querySelector('.out-14').innerHTML = out;

}

document.querySelector('.b-14').onclick = f14;