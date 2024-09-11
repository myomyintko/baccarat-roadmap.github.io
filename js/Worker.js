self.onmessage = (e) => {
    if (e.data === "start") {
        updateTime()
    }else if (e.data === "refreshToken"){
        localStorage.getItem("")
    }
}

const updateTime = () => {
    setInterval(() => {
        const currTime = new Date().toLocaleTimeString()
        self.postMessage(currTime)
    }, 1000)
}
