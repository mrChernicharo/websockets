const socket = new WebSocket('ws://localhost:8080')

//Listen to messages
socket.onmessage = ({data}) => {
	console.log('Message from the server:' , data)
}


document.querySelector('button').onclick = () => {
	socket.send(`hello it's ${new Date().toLocaleTimeString()}`)

}