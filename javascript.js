const button = document.querySelector('button')
const text = document.querySelector('.text')

const recognition = createRecognition()
let listening = false

button.addEventListener('click', () => {
    if(!recognition) return;

    listening ? recognition.stop() : recognition.start()

    button.addEventListener.innerHTML = listening ? "Aperte para falar" : "Parar de escutat"

    button.classList.toggle('bg-purple-200')
    button.classList.toggle('text-red-500')
})

function createRecognition() {
    const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition
    const recognition = SpeechRecognition !==undefined ? new SpeechRecognition() : null

    if(!recognition) {
        text.innerHTML = "Speech Recognition is not found."
        return null
    }

    recognition.lang = "pt-br"

    recognition.onstart = () => listening = true
    recognition.onend = () => listening = false
    recognition.onerror = e => console.log('error', e)
    recognition.onresult = e => text.innerHTML = e.result[0][0].transcript

    return recognition
}