
{

    //change background color

    document.getElementById('box1-bg-btn').addEventListener('click', function() {
        const color = document.getElementById("set-bg-txt").value;
        document.querySelector('#box1').style.backgroundColor = color;
    });

    //change text color
    document.getElementById('box2-color-btn').addEventListener('click', function() {
        const color = document.getElementById("set-color-txt").value;
        document.querySelector('#box2-text').style.color = color;
    });

    //change text size
    document.getElementById('box3-font-size-btn').addEventListener('click', function() {
        const size = document.getElementById("set-font-size-txt").value;
        document.querySelector('#box3-text').style.fontSize = size;
    });

    //set border
    document.getElementById('box4-border-btn').addEventListener('click', function() {
        const border = document.getElementById("set-border-txt").value;
        document.querySelector('#box4').style.border = border;
    });





}





