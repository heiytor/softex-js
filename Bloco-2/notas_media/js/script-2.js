// Obtém o input das notas
const grades1 = Number(prompt('Digite sua nota'));
const grades2 = Number(prompt('Digite sua nota'));

// Obtendo os IDS do body e salvando na memoria
const bodyGrades1 = document.getElementById('grades-1');
const bodyGrades2 = document.getElementById('grades-2');
const bodyGrades3 = document.getElementById('grades-3');
const bodyAverage = document.getElementById('average');

// Faz o calculo de quantos pontos é necessario e coloca dentro do body
if (isNaN(grades1) || isNaN(grades2)) {
    bodyAverage.innerHTML = 'Digite notas válidas.';
} else if (grades1 < 0 || grades1 > 10 || grades2 < 0 || grades2 > 10) {
    bodyAverage.innerHTML = 'Digite notas válidas(entre 0 e 10).';
} else {
    const grades3 = 21 - grades1 - grades2
    bodyGrades1.innerHTML = grades1;
    bodyGrades2.innerHTML = grades2;
    bodyGrades3.innerHTML = grades3;
}

