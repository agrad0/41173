const studentContainer = document.querySelectorAll(`[id*=uczen]`);

const btn = document.getElementById("oblicz");

btn.addEventListener(`click`, function(){
    entryFunc(studentContainer)});

function entryFunc(element) {
    for (let i=0; i < 20; i++) {
        let sum = 0;
        let average = 0;
        for (let j=1; j<8; j++) {
            let noteVal = 0;
            let tekst1 = String(element[i].children[j].classList);
            if ((element[i].children[j].value < 6) && (`${element[i].children[8].value}`.includes(tekst1))) {
                let noteVal = Number(element[i].children[j].value);    
                noteVal = noteVal + 0.5;
                element[i].children[j].value = Number(noteVal);
                }
            sum = sum + Number(element[i].children[j].value);
            average = (sum/7).toFixed(2);
            element[i].children[9].innerText = average;

            if (element[i].children[j].value == 1) {
            element[i].children[0].style.backgroundColor = 'red';
            }
            
            if (average >= 4.75) {
                element[i].children[0].style.backgroundColor = "green";
            }

        }
    }
}







