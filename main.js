document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()

    let color1 = document.querySelector('[name="color1"]').value
    let color2 = document.querySelector('[name="color2"]').value

    //alert(color1 + " and " + color2)

    // document.querySelector('body').innerHTML = '<div class="container" style="height: 400px; width: 400px; border: 2px solid red;"></div>'

    console.log(color1);
    console.log(color2);
    
    document.querySelector('.container').innerHTML = '<div style="height:100%; width: 100%; background-image: linear-gradient(to right,'+ color1 +', '+ color2 +');"></div>'
    document.querySelector('.container2').style.backgroundImage = "linear-gradient(to right, "+ color1 +", "+ color2 +")"

    // body.style.backgroundImage = "linear-gradient(to right, "+ color_1.value +", "+ color_2.value +")";

    

})