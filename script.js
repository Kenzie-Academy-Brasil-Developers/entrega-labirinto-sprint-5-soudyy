const map = [
    'WWWWWWWWWWWWWWWWWWWWW',
    'W   W     W     W W W',
    'W W W WWW WWWWW W W W',
    'W W W   W     W W   W',
    'W WWWW WWWW WWW W W W',
    'W         W     W W W',
    'W WWW WWWWW WWWWW W W',
    'W W   W   W W     W W',
    'W WWWWW W W W WWW W F',
    'S     W W W W W W WWW',
    'WWWWW W W W W W W W W',
    'W     W W W   W W W W',
    'W WWWWWWW W WWW W W W',
    'W       W       W   W',
    'WWWWWWWWWWWWWWWWWWWWW',
];
const body = document.getElementById('field')
const player = document.createElement('div')


const createField = function() {
    let posY = 0
    let posX = 0
    for (let i = 0; i < map.length; i++) {
        const linha = document.createElement('section')
        linha.id = 'linha'
        body.appendChild(linha)
        for (let j = 0; j < map[i].length; j++) {

            player.id = 'player'
            const fieldGenerator = document.createElement('div')
            if (map[i][j] === 'W') {
                fieldGenerator.id = 'wall'
            }
            if (map[i][j] === ' ') {
                fieldGenerator.id = 'caminho'
            }
            if (map[i][j] === 'S') {
                fieldGenerator.id = 'start'
                linha.appendChild(fieldGenerator)
                const inicio = document.getElementById('start')
                inicio.appendChild(player)
            }
            if (map[i][j] === 'F') {
                fieldGenerator.id = 'finish'

            }
            fieldGenerator.dataset.pos = `${i}-${j}`
            linha.appendChild(fieldGenerator)
        }
    }
}
createField()

let x = 1;
let y = 9;
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const compare = document.querySelector(`div[data-pos="${y}-${x}"`)
    const dataParent = document.querySelector('#player').parentElement.dataset.pos

    if (keyName === 'ArrowDown') {
        y++
        if (compare.id === "caminho") {
            compare.appendChild(player)
        }
        if (compare.id === "wall") {
            y -= 2
        }
    }
    if (keyName === 'ArrowUp') {
        y--
        if (compare.id === "caminho") {
            compare.appendChild(player)
        }
        if (compare.id === "wall") {
            y += 2
        }
    }
    if (keyName === 'ArrowLeft') {
        x--
        if (compare.id === "caminho") {
            compare.appendChild(player)
        }
        if (compare.id === "wall") {
            x += 2
        }
    }
    if (keyName === 'ArrowRight') {
        x++
        if (compare.id === "caminho") {
            compare.appendChild(player)
        }
        if (compare.id === "wall") {
            x -= 2
        }
        if (compare.id === "finish") {
            const vitoria = document.createElement('section')
            const h1 = document.createElement('h1')
            vitoria.id = 'victory'
            body.appendChild(vitoria)
            h1.innerText = 'Você conseguiu'
            vitoria.appendChild(h1)
            compare.appendChild(player)

        }
    }

    console.log("comparativo", compare.dataset.pos)
    console.log("Player", dataParent)
    console.log("comparativo", compare.id)


    //console.log(playerMap)
})