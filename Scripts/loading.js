async function initiateSession() {

    const sessionRequest = await fetch('https://api.quintondev.com/connect/createSession', {
        method: 'POST',
        headers: {'Content-Type':'application/json'}
    })

    const sessionData = await sessionRequest.json()

    if (sessionData.error) {
        console.log( sessionData.error )
        return
    } else {
        window.location.href = (`../session.html?sessionID=${sessionData.data.sessionID}`)
    }

}

initiateSession()