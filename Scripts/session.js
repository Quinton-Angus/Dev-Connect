const codeInput = document.getElementById('codeInput')

async function verifyCode(code) {

    const params = new URLSearchParams(window.location.search)

    const sessionID = params.get('sessionID')
    
    const verify = await fetch('https://api.quintondev.com/connect/verify', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            sessionID: sessionID,
            code: code
        })
    })

    const verifyData = await verify.json()

    if (verifyData.error) {
        return console.log(verifyData.error)
    } else {
        window.location.href = '../index.html'
    }
}

codeInput.addEventListener('input', () => {
    let input = codeInput.value
    
    if (input.length === 6) {

        codeInput.disabled = true

        verifyCode(input)

    }
})