let ptxt = document.getElementById('player txt')
let rbtn = document.getElementById('restbtn')
let boxs = Array.from(document.getElementsByClassName('box'))
let winIndicator = getComputedStyle(document.body).getPropertyValue('--win-blocks')

const O = "O"
const X = "X"
let cplr = X
let a = Array(9).fill(null)
const start = () => {
    boxs.forEach(box => box.addEventListener('click', Clicked))
}

function Clicked(e) {
    const id = e.target.id
    if(!a[id]){
        a[id] = cplr
        e.target.innerText = cplr

        if(win() !==false){
            ptxt.innerHTML = `${cplr} has won!`
            let winning_blocks = win()

            winning_blocks.map( box => boxs[box].style.backgroundColor=winIndicator)
            return
        }
        cplr = cplr == X ? O : X
    }
}

const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function win() {
    for (const condition of winCombos) {
        let [x, y, z] = condition

        if(a[x] && (a[x] == a[y] && a[x] == a[z])) {
            return [x,y,z]
        }
    }
    return false
}

rbtn.addEventListener('click', resrt)

function resrt() {
    a.fill(null)

    boxs.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })
    cplr = X
    ptxt.innerHTML = 'Tic Tac Toe'
}

start()