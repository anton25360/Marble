document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()

    let color1 = document.querySelector('[name="color1"]').value
    let color2 = document.querySelector('[name="color2"]').value
    let text = document.querySelector('[name="text"]').value
    let bg = document.querySelector('[name="bg"]').value

    
    document.querySelector('.container').style.backgroundImage = "linear-gradient(to right, "+ color1 +", "+ color2 +")"

    document.querySelector('.textTest').innerHTML = "<h1 style='background: linear-gradient(to right,"+ color1 +", "+ color2 +"); display:inline-block; background-clip: text; -webkit-text-fill-color: transparent; font-size:150px;'>"+text+"</h1>"

    // background: linear-gradient(to right,#FF5F6D,#FFC371);


})