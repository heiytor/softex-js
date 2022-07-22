// Obtendo as notas
const grades1 = Number(prompt('Digite sua nota:'));
const grades2 = Number(prompt('Digite sua nota:'));
const grades3 = Number(prompt('Digite sua nota:'));

// Obtendo os IDS do body e salvando na memoria
const bodyGrades1 = document.getElementById('grades-1');
const bodyGrades2 = document.getElementById('grades-2');
const bodyGrades3 = document.getElementById('grades-3');
const bodyAverage = document.getElementById('average');

// Confere se a média é o suficiente ou não para ser aprovado
if (isNaN(grades1) || isNaN(grades2) || isNaN(grades3)) {
    bodyAverage.innerHTML = "Digite notas válidas.";
} else if (grades1 > 10 || grades2 > 10 || grades3 > 10 || grades1 < 0 || grades2 < 0 || grades3 < 0) {
    bodyAverage.innerHTML = "Digite notas válidas. (Entre 0 e 10)";
} else {
    bodyGrades1.innerHTML = grades1;
    bodyGrades2.innerHTML = grades2;
    bodyGrades3.innerHTML = grades3;
    const average = ((grades1 + grades2 + grades3) / 3 >= 7) ? true : false;
    if (average) {
        const grades = (grades1 + grades2 + grades3) / 3;
        bodyAverage.innerHTML = `Você passou! Sua média foi ${grades.toFixed(2)}.`;
    } else {
        const grades = (grades1 + grades2 + grades3) / 3;
        bodyAverage.innerHTML = `Você não passou! Sua média foi ${grades.toFixed(2)}`;
    };
}
