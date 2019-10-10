document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()

    //get values from form
    let color1 = document.querySelector('[name="color1"]').value
    let color2 = document.querySelector('[name="color2"]').value
    let text = document.querySelector('[name="text"]').value
    let bg = document.querySelector('[name="bg"]').value

    //gradient strip
    document.querySelector('.gradientStrip').style.backgroundImage = "linear-gradient(to right, "+ color1 +", "+ color2 +")"

    //badge content
    document.querySelector('.badge').innerHTML = "<h1 style='background: linear-gradient(to right,"+ color1 +", "+ color2 +"); display:inline-block; background-clip:text; -webkit-background-clip: text; -webkit-text-fill-color:transparent; font-size:80px; margin:0; padding:30px 70px;'>"+text+"</h1>"

    //badge color
    if (bg == 'dark') {
        document.querySelector('.badge').style.background = 'black'
    } else {
        document.querySelector('.badge').style.background = 'white'
    }
    


})