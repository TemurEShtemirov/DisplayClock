const digits = [
    [1, 1, 1, 0, 1, 1, 1], //0
    [0, 0, 1, 0, 0, 1, 0], //1
    [1, 0, 1, 1, 1, 0, 1], //2
    [1, 0, 1, 1, 0, 1, 1], //3
    [0, 1, 1, 1, 0, 1, 0], //4
    [1, 1, 0, 1, 0, 1, 1], //5
    [1, 1, 0, 1, 1, 1, 1], //6
    [1, 0, 1, 0, 0, 1, 0], //7
    [1, 1, 1, 1, 1, 1, 1], //8
    [1, 1, 1, 1, 0, 1, 1], //9
]
const segmentsEls = []
document.querySelectorAll(".digit").forEach(numberEl => {
    segmentsEls.push(Array.from(numberEl.children))
})

intervalFunction();
setInterval(intervalFunction, 1000);

function intervalFunction() {
    const timeDigits = getTimeDigits()
    timeDigits.forEach((timeDigit, timeDigitIndex) => {
        const segmentsEl = segmentsEls[timeDigitIndex];
        segmentsEl.forEach((segmentEl, segmentElIdx) => {
            segmentEl.dataset.active = digits[timeDigit][segmentElIdx]
        })
    })
}
function getTimeDigits() {
    const splitDigits = n => [Math.floor(n / 10), n % 10]
    const time = new Date();
    return [
        splitDigits(time.getHours()),
        splitDigits(time.getMinutes()),
        splitDigits(time.getSeconds())
    ].flat();
}