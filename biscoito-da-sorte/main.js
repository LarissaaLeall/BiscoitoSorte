const biscoito1 = document.querySelector('.biscoito1')
const biscoito2 = document.querySelector('.biscoito2')
const closedCookie = document.querySelector('#closed-cookie')
const openCookie = document.querySelector('#open-cookie')
const btnFinal = document.querySelector('.btnFinal')
let seeLuck = document.querySelector('.biscoito2 span')

let newPhrases = [
    'Se faltar ânimo não desista, olhe para o céu e encontre a força que você precisa.',
    'Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir.',
    'Um passo e já não estamos mais no mesmo lugar!',
    'A única coisa impossível é aquilo que você não tenta.',
    'Não importa o quão lento você vá, desde que não pare.',
    'Qualquer dificuldade pode ser ultrapassada, já que para todo problema há uma solução.',
    'Ser uma pessoa melhor é o objetivo do dia.',
    'Permita-se começar e recomeçar quantas vezes forem necessárias.',
    'A sua competição é com você mesmo',
    'Se você quer algo, você pode e você consegue!'
]

closedCookie.addEventListener('click', handleclosedCookie)
openCookie.addEventListener('click', handleopenCookie)
btnFinal.addEventListener('click', handleBtnFinal)
document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        toggleScreen()
    }
});

function toggleScreen() {
    biscoito1.classList.toggle("hide")
    biscoito2.classList.toggle("hide")
    seeLuck.innerText = newPhrases[Math.floor(Math.random() * newPhrases.length)]
}

function handleclosedCookie() {
    toggleScreen()
}

function handleopenCookie() {
    toggleScreen()
}


function handleBtnFinal() {
    biscoito2.classList.add('hide')
    biscoito1.classList.remove("hide")
}
