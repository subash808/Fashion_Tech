const scriptURL = 'https://script.google.com/macros/s/AKfycbwJiM1-LO8fGbqofsWm-yYgHbkuZw8gwTSbPY0U3DoGBhk_NhHh2bJcXj24MInddRVH/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Recevied your message successfully!"

            setTimeout(function () {
                msg.innerHTML = ""
            }, 2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


