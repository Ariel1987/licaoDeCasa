<!DOCTYPE HTML>
<html lang = "en">
<head>
  
  <title>licaoDeCasa</title>
  <meta charset = "UTF-8" />

</head>
<body>

    <button id="btn1" class="btn" onclick="buttonOneClick()">btn1</button>
    <button id="btn2" class="btn">btn2</button>
    <button id="btn3" class="btn">btn3</button>
    <button id="btn4" class="btn" onclick="buttonFour()">btn4</button>
    <button id="btn5" class="btn">btn5</button>
    
    <script>

        //Você vai adicionar um _eventListener_ no **body** e ouvir qual é o tipo do node que está sendo clicado e fazer os mesmo exercícios 
        //pegando uma **nodelist** de todos os botões. Ou seja, você vai fazer um `querySelector('body')` para pegar somente **um elemento**. 
        //E um `querySelectorAll('.btn')` para pegar o `nodelist` de botões sendo que esses botões terão a classe `btn`. 
        
        

  
        //fazer um console log do nome do botão de cada botão

        console.log("btn1");
        console.log("btn2");
        console.log("btn3");
        console.log("btn4");
        console.log("btn5");
        
        //Alterar o nome do primeiro botão

        document.getElementById('btn1').innerHTML = 'Slash';
        

        //Quando o quarto botão for clicado você deve mandar uma alerta para o usuário dizendo qualquer coisa.
        
        function buttonFour () {
            document.getElementById('btn4').addEventListener('click', alert('Você clicou no 4'));
        }

        
        //Ao clicar no primeiro botão vc tem que alterar o nome do terceiro botão.
        
        function buttonOneClick() {
            document.getElementById("btn1").addEventListener('click', function (e) {
                document.getElementById('btn3').innerHTML = 'Ariel';
            });
        }

        
        

    </script>
</body>
</html>

