document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()

    let color1 = document.querySelector('[name="color1"]').value
    let color2 = document.querySelector('[name="color2"]').value

    console.log(color1);
    console.log(color2);
    
    document.querySelector('.container').style.backgroundImage = "linear-gradient(to right, "+ color1 +", "+ color2 +")"
})