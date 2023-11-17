<!DOCTYPE html>
<html>
<head>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma">
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Karma", sans-serif}
.w3-bar-block .w3-bar-item {padding:20px}
</style>
</head>
<body>

<!-- Sidebar (hidden by default) -->
<nav class="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style="display:none;z-index:2;width:40%;min-width:300px" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()"
  class="w3-bar-item w3-button">Fechar</a>
  <a href="#food" onclick="w3_close()" class="w3-bar-item w3-button">Conhecendo ela</a>
  <a href="#sobre" onclick="w3_close()" class="w3-bar-item w3-button">Sobre ela</a>
</nav>

<!-- Top menu -->
<div class="w3-top">
  <div class="w3-white w3-xlarge" style="max-width:1200px;margin:auto">
    <div class="w3-button w3-padding-16 w3-left" onclick="w3_open()">☰</div>
    <div class="w3-right w3-padding-16">Mail</div>
    <div class="w3-center w3-padding-16">MI Amada</div>
  </div>
</div>
  
<!-- !PAGE CONTENT! -->
<div class="w3-main w3-content w3-padding" style="max-width:1200px;margin-top:100px">

  <!-- First Photo Grid-->
  <div class="w3-row-padding w3-padding-16 w3-center" id="food">
    <div class="w3-quarter">
      <img src="https://cdn.discordapp.com/attachments/1130554247113613412/1174846421304881152/image.png?ex=656913fe&is=65569efe&hm=9297383f3666002643ee604305f8c1d4a72c6e25468cb5ea9ca83c15c72dca6c&" alt="Sandwich" style="width:100%">
      <h3>Um lindo chuchu, a mais bela da temporada</h3>
      <p>Sua beleza sendo admirada por muitos, encanta e acalenta com sua beleza impar</p>
    </div>
    <div class="w3-quarter">
      <img src="https://cdn.discordapp.com/attachments/1130554247113613412/1174846852257026160/image.png?ex=65691465&is=65569f65&hm=40c71047ed01588ea85be9fd1bd354cf1761831ffd0fbd552495770cbaf3e1a7&" alt="Steak" style="width:100%">
      <h3>Dona do olhar mais penetrante que há</h3>
      <p>Olhar esse que enxerga sua alma, enfentiça sua cabeça e te leva ao delirio </p>
    </div>
    <div class="w3-quarter">
      <img src="https://cdn.discordapp.com/attachments/1130554247113613412/1174846986831278260/image.png?ex=65691485&is=65569f85&hm=88844adaab88348a638b935d54e5b9a2f70e9dd1ddaa42b51614c9f231757c9c&" alt="Cherries" style="width:100%">
      <h3>Sorriso risonho</h3>
      <p>Tal sorriso que brinca com seu coração e o faz palpitar sem parar</p>
    </div>
    <div class="w3-quarter">
      <img src="https://cdn.discordapp.com/attachments/1130554247113613412/1174853328472129617/c137ad51-afa8-48d8-8e84-e15de2cbdc8e.png?ex=65691a6d&is=6556a56d&hm=576039a4d1ded7d23c5ff5712c05e4a758be3fde8e0bc1cbd2cdd6a674583720&" alt="Pasta and Wine" style="width:100%">
      <h3>Carão de dar inveja</h3>
      <p>Pode tentar mas não vai conseguir ser mais bela que tal deusa</p>
    </div>
  </div>
  
  <!-- Second Photo Grid-->
  <div class="w3-row-padding w3-padding-16 w3-center">
    <div class="w3-quarter">
      <img src="https://media.discordapp.net/attachments/1130554247113613412/1174853330963529748/801444ec-127f-49f5-8cec-24371376c411.png?ex=65691a6d&is=6556a56d&hm=534f41d01c84bb0f57776b85ad4367e4b538e7fd866b0262a207353d22349de5&=&width=386&height=688" alt="Popsicle" style="width:100%">
      <h3>Rosto angelical</h3>
      <p>Tão perigoso na aparência quanto no que inflige as vítimas que não esperam tamanha beleza</p>
    </div>
    <div class="w3-quarter">
      <img src="https://cdn.discordapp.com/attachments/1130554247113613412/1174853329805914112/b0f5dfcb-afe0-4157-94c8-b54f1395f78c.png?ex=65691a6d&is=6556a56d&hm=80e4dbc157f396ee8fc297bcf1bc6d29b87c09cea3505de8950796d36f6535ac&" alt="Salmon" style="width:100%">
      <h3>FOFINHA</h3>
      <p>TEM COISA MAIS FOFINHA QUE ELA? a resposta é sempre não</p>
    </div>
    <div class="w3-quarter">
      <img src="https://cdn.discordapp.com/attachments/1130554247113613412/1174853332104396890/c5ba216b-dd99-4ea1-af95-e5f2c1e18296.png?ex=65691a6e&is=6556a56e&hm=76ac95a167f606debc4350b8d835a7c63f467904a027152962c7e36f1eb1b4b3&" alt="Sandwich" style="width:100%">
      <h3>Perigosa demais</h3>
      <p>Procurada em 7 estados por roubo intencional e não intencional de corações</p>
    </div>
    <div class="w3-quarter">
      <img src="https://cdn.discordapp.com/attachments/1130554247113613412/1174853331487830036/4eb86ba3-a3d5-4d86-b2bd-d1e39ab1913b.png?ex=65691a6d&is=6556a56d&hm=714174b437eccca344950e26db2b9eccd810fa5b74edf8672a931a704ea1344d&" alt="Croissant" style="width:100%">
      <h3>Nós</h3>
      <p>Com toda certeza uma coisa a se ter o prazer de dizer sobre a nossa situação atual, somos nós juntos no final</p>
    </div>
  </div>

  <!-- Pagination -->
  <div class="w3-center w3-padding-32">
    <div class="w3-bar">
      <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
      <a href="#" class="w3-bar-item w3-black w3-button">1</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">2</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">3</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">4</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
    </div>
  </div>
  
  <hr id="about">

  <!-- About Section -->
  <div class="w3-container w3-padding-32 w3-center">  
    <h3>Sobre ela</h3><br>
    <img src="https://cdn.discordapp.com/attachments/1130554247113613412/1174853327847174214/179e8aa3-f065-4468-b022-d0d28e4ebbe1.png?ex=65691a6d&is=6556a56d&hm=c5db64ddc34b52bab32e2cfdf4c496cedea25d133a58486996a19d5150ac1f9e&" alt="Me" class="w3-image" style="display:block;margin:auto" width="800" height="533">
    <div class="w3-padding-32">
      <h4><b>MAW</b></h4>
      <h6><i>Traduzindo do ---- Minha Amada Waw, incrível por natureza, ela com suas diversas capacidades, sendo essas, sociabilidade (duvido achar pessoa mais fofinha pra conversar, super interessada e gentil), gentileza (essa mulher é capaz de tudo pelas pessoas que ela ama e preza, e isso inspira também a gentileza para outras pessoas, eu sou um exemplo), inteligência (capaz de pensar como uma investigadora nata, e uma hábil pesquisadora, que cada vez dá mais e mais orgulho por ser tão aplicada  e inteligente), amável (ela enche de amor até a pessoa não aguentar, sou suspeito a falar, afinal passo até mal por isso) e por fim tudo que falei e mais um conjunto de coisas que com toda certeza inspira o melhora nas pessoas, e como namorado com toda certeza me inspira a ser uma pessoa melhor, eu te amo meu amor obrigado por todo esse tempo que passamos juntos, feliz 1+7 meses :> MAW. </p>
    </div>
  </div>
  <hr>
  
  <!-- Footer -->
  <footer class="w3-row-padding w3-padding-32">
    <div class="w3-third">
      <h3>SÓ para fortes de coração</h3>
      <p>MEU ORGULHO, MULHER INCRIVEL, XEIROSA, FOFINHA, GENTIL, INTELIGENTE, ESPERTA, MASTERMIND E QUE MORA COMIGO ATÉ NA MINHA ALMA.</p>
      <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
    </div>
  
    <div class="w3-third">
      <h3>BLOG POSTS</h3>
      <ul class="w3-ul w3-hoverable">
        <li class="w3-padding-16">
          <img src="/w3images/workshop.jpg" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">A mais bela da temporada</span><br>
          <span>perfeita</span>
        </li>
        <li class="w3-padding-16">
          <img src="/w3images/gondol.jpg" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">Rouba corações</span><br>
          <span>fui roubado</span>
        </li> 
      </ul>
    </div>

    <div class="w3-third w3-serif">
      <h3>POPULAR TAGS</h3>
      <p>
        <span class="w3-tag w3-black w3-margin-bottom">FOFINHA</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Perfecta</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">MAW</span>
        <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Bela</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">GRANDE GOSTOSA</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">tadalafina do meu coração</span>
        <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Branquinha</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">XEIROSA</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Gentileza</span>
        <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">colega de crime</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Melhor namorada</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">arrebenta coração</span>
        <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">FOFINHA 2X</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Como ter pele de porcelana</span>
      </p>
    </div>
  </footer>

<!-- End page content -->
</div>

<script>
// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
</script>

</body>
</html>
