const initiateBtn = document.getElementById('initiateBtn')

async function initiateSession() {
    window.location.href = '../loading.html'

    const sessionRequest = await fetch('https://api.quintondev.com/connect/sessionCreate', {
        method: 'POST',
        headers: {'Content-Type':'application/json'}
    })
}

console.log(initiateBtn)

if (initiateBtn) {
    console.log('adding')
    initiateBtn.addEventListener('click', () => { initiateSession() })
}
