
let lajmet = [
{
    img: "foto/Object1.jpg",
    date: '02/05/2021',
    titulli: 'Kryeministri Kurti në takim me Senatoren Ernst: Kosova e përkushtuar për të forcuar partneritetin me shtetin e Iowa-s'
},
{
    img: "foto/Object2.jpg",
    date: '15/06/2021',
    titulli: 'Kryeministri Kurti priti në takim ish-eurodeputeten Doris Pack aty u bisedua per qeshtje te Kosoves'
},
{
    img: "foto/Object3.jpg",
    date: '28/06/2021',
    titulli: 'Kryeministri Kurti takoi përfaqësuesit e lartë të ShBA-së, Philip Reeker dhe Matthew Palmer'
},
{
    img: "foto/Object4.jpg",
    date: '01/07/2021',
    titulli: 'Kryeministri Kurti në Forumin e Prespës: Duhet të ketë sinkronizim të plotë të Brukselit dhe Washingtonit'
},
{
    img: "foto/Object5.jpg",
    date: '02/07/2021',
    titulli: 'Kryeministri Kurti: Trajektorja e zhvillimit të KOSTT Sh.A., shembull shpresëdhënës i menaxhimit profesional të institucioneve vendore'
},
{
    img: "foto/Object6.jpg",
    date: '04/07/2021',
    titulli: 'Kryeministri Kurti priti në takim Sekretarin e Përgjithshëm të NATO-s, Jens Stoltenberg'
},
{
    img: "foto/Object6.jpg",
    date: '04/07/2021',
    titulli: 'Kryeministri Kurti priti në takim Sekretarin e Përgjithshëm të NATO-s, Jens Stoltenberg'
},
]

var ball = document.querySelector('.section')
lajmet.forEach(element => {
    var cardH = document.createElement('article')
    cardH.style.display = 'block'
    ball.appendChild(cardH)

    var card = document.createElement('div')
    // card.style.width = '100%'
    card.style.height = '200px'
    card.style.padding = '15px'
    card.style.display = 'flex'
    card.style.justifyContent = 'space-around'
    card.style.alignItems = 'center'
    card.style.backgroundColor = 'white'
    cardH.appendChild(card)

    var foto = document.createElement('img')
    foto.src = element.img
    foto.classList.add('fotoJS')
    foto.style.Width = '100%'
    foto.style.display = 'inline-block'
    card.appendChild(foto)

    var div = document.createElement("div")
    div.style.display = 'inline-block'
    div.style.padding = '15px'
    div.classList.add('textLajme')
    card.appendChild(div)

    var d = document.createElement('span')
    d.innerHTML = element.date
    d.style.display = 'block'
    d.style.fontSize = '20px'
    div.appendChild(d)

    var tit = document.createElement('p')
    tit.innerHTML = element.titulli
    tit.classList.add('pLajme')
    tit.style.fontSize = '20px'
    tit.style.fontWeight = '600'
    tit.style.display = 'inline-block'
    div.appendChild(tit)
});

function vitiS(){
    var viti = document.getElementById('viti').value
    console.log(viti)
}

function muajiS(){
    var muaji = document.getElementById('muajt').value
    console.log(muaji)
}

var fit = lajmet.filter(element => {
    return element.date == viti
})
