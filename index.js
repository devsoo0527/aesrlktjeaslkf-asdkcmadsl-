const startButton = document.querySelector('.start-button');

startButton.addEventListener('click', () => {
    const solution1 = document.querySelector('#solution1');
    const start = document.querySelector('.start');
    solution1.classList.add('active');
    start.classList.remove('active');
})


const img2 = document.querySelector('.img2');

img2.addEventListener('click', () => {
    const solution1 = document.querySelector('#solution1');
    const solution2 = document.querySelector('#solution2');
    solution2.classList.add('active');
    solution1.classList.remove('active');
})

const solution2Button = document.querySelector('.solution2-button');
solution2Button.addEventListener('click', () => {
    const solution = document.querySelector('.solution2-input');
    if (solution.value === '강아지,카페라떼,라라랜드,긴머리,PO') {
        const solution2 = document.querySelector('#solution2');
        const solution3 = document.querySelector('#solution3');
        solution3.classList.add('active');
        solution2.classList.remove('active');
    } else {
        alert('에릭과 함꼐할 수 없어요! ㅠ ㅠ 다시 한번 풀어보세요!')
    }
})

const solution3Button = document.querySelector('.solution3-button');
solution3Button.addEventListener('click', () => {
    const solution = document.querySelector('.solution3-input');
    if (solution.value === '연하,스타벅스,요가,피자,조인성') {
        const solution3 = document.querySelector('#solution3');
        const solution4 = document.querySelector('#solution4');
        solution4.classList.add('active');
        solution3.classList.remove('active');
    } else {
        alert('쑤가 주는 선물을 받을 수 없어요! 다시 한번 풀어보세요!')
    }
})

const solution4Button = document.querySelector('.solution4-button');
solution4Button.addEventListener('click', () => {
    const solution = document.querySelector('.solution4-input');
    if (solution.value === '마손,제이') {
        const solution4 = document.querySelector('#solution4');
        const solution5 = document.querySelector('#solution5');
        solution5.classList.add('active');
        solution4.classList.remove('active');
    } else {
        alert('얼굴을 찾아주세요 ㅠ ㅠ')
    }
})


const solution5Button = document.querySelector('.solution5-button');
solution5Button.addEventListener('click', () => {
    const solution = document.querySelector('.solution5-input');
    if (solution.value === '9층,페스티벌,뱀,장미,섹시한 남자') {
        const solution5 = document.querySelector('#solution5');
        const solution6 = document.querySelector('#solution6');
        solution6.classList.add('active');
        solution5.classList.remove('active');
    } else {
        alert('써니가 주는 선물을 받을 수 없어요! 다시 한번 풀어보세요!')
    }
})
