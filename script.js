function login() {
  const pwd = document.getElementById("password").value;

  const senhas = {
    "sanguis ex omnibus": "akiva/akiva.html",
    "senha2": "perfil2.html",
    "senha3": "perfil3.html",
    "senha4": "perfil4.html",
    "senha5": "perfil5.html"
  };

  if (senhas[pwd]) {
    window.location.href = `init/${senhas[pwd]}`;
  } else {
    document.getElementById("error").textContent = "Senha incorreta!";
  }
}
