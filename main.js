document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()

    //get values from form
    let color1 = document.querySelector('[name="color1"]').value
    let color2 = document.querySelector('[name="color2"]').value
    let text = document.querySelector('[name="text"]').value
    let bg = document.querySelector('[name="bg"]').value
    let letter = text.charAt(0)

    //gradient strip
    document.querySelector('.gradientStrip').style.backgroundImage = "linear-gradient(to right, "+ color1 +", "+ color2 +")"

    //badge content
    document.querySelector('.badge').innerHTML = "<h1 style='background: linear-gradient(to right,"+ color1 +", "+ color2 +"); display:inline-block; background-clip:text; -webkit-background-clip: text; -webkit-text-fill-color:transparent; font-size:80px; margin:0; padding:25px 50px;'>"+text+"</h1>"
    document.querySelector('.badge').style.background = bg

    //icon content
    document.querySelector('.icon').innerHTML = "<h1 style='background: linear-gradient(to right,"+ color1 +", "+ color2 +"); display:inline-block; background-clip:text; -webkit-background-clip: text; -webkit-text-fill-color:transparent; font-size:83px; margin:0; padding:30px;'>"+letter+"</h1>"
    document.querySelector('.icon').style.background = bg

})