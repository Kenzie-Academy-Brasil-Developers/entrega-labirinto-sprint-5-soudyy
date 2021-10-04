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
    for (let i = 0; i < map.length; i++) {
        const line = document.createElement('section')
        line.id = 'line'
        body.appendChild(line)
        for (let j = 0; j < map[i].length; j++) {

            player.id = 'player'
            const fieldGenerator = document.createElement('div')
            if (map[i][j] === 'W') {
                fieldGenerator.id = 'wall'
            }
            if (map[i][j] === ' ') {
                fieldGenerator.id = 'way'
            }
            if (map[i][j] === 'S') {
                fieldGenerator.id = 'start'
                line.appendChild(fieldGenerator)
                const inicio = document.getElementById('start')
                player.dataset.pos = `${i}-${j}`
                inicio.appendChild(player)
            }
            if (map[i][j] === 'F') {
                fieldGenerator.id = 'finish'
            }
            fieldGenerator.dataset.pos = `${i}-${j}`
            line.appendChild(fieldGenerator)
        }
    }
}
createField()

let x = 0;
let y = 9;


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const dataParent = document.querySelector('#player').parentElement.dataset.pos
    if (keyName === 'ArrowDown') {
        y++
        const compare = document.querySelector(`div[data-pos="${y}-${x}"`)
        if (compare.id === "way") {
            compare.appendChild(player)
        } else if (compare.id === 'wall') {
            y--
        }
    }
    if (keyName === 'ArrowUp') {
        y--
        const compare = document.querySelector(`div[data-pos="${y}-${x}"`)
        if (compare.id === "way") {
            compare.appendChild(player)
        } else if (compare.id === 'wall') {
            y++
        }
    }
    if (keyName === 'ArrowLeft') {
        x--
        const compare = document.querySelector(`div[data-pos="${y}-${x}"`)
        if (compare.id === "way") {
            compare.appendChild(player)
        } else if (compare.id === 'wall' || compare.id === "start") {
            x++
        }
    }
    if (keyName === 'ArrowRight') {
        x++
        const compare = document.querySelector(`div[data-pos="${y}-${x}"`)
        if (compare.id === "way") {
            compare.appendChild(player)
        } else if (compare.id === 'wall') {
            x--
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

})