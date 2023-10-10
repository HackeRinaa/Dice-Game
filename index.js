function play() {
    var dices = document.querySelectorAll(".dice");
    var dice1 = dices[0];
    var dice2 = dice[1];
    var img1 = Math.floor(Math.random() * 6)
    var img2 = Math.floor(Math.random() * 6)
    dice1.setAttribute("img" , "./images/dice5.png");
    dice2.setAttribute("img" , "./images/dice3.png");
}

/*    <script>
        function play() {
            <!-- var dices = document.querySelectorAll(".dice");
            var dice1 = dices[0];
            var dice2 = dice[1];
            var img1 = Math.floor(Math.random() * 6)
            var img2 = Math.floor(Math.random() * 6)
            dice1.setAttribute("img" , "./images/dice5.png");
            dice2.setAttribute("img" , "./images/dice3.png"); -->
        }
    </script> */