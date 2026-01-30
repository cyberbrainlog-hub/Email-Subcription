const scriptURL = 'https://script.google.com/macros/s/AKfycbysDY9On4bSAvdoJeP-alI2mypLT6XYh4IqSZ5PbZlB3-RHN_tZmuMGpCW_Hb1a0BWHtw/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("reply");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then( () => {
            msg.innerHTML = "Thank you for submiting"
            setTimeout( () => {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})