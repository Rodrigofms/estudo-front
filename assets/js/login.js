function logar() {
  const usuarioInput = document.getElementById('email-campo').value;
  const senhaInput = document.getElementById('senha-campo').value;


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


  const telefoneRegex = /^\+\d{1,3}\s?\d{10}$/;

  if (usuarioInput.length === 0) {
    alert("Por favor, insira um usuário.");
  } else if (!emailRegex.test(usuarioInput) && !telefoneRegex.test(usuarioInput)) {
    alert("Por favor, insira um email válido ou um número de telefone ");
  } else if (senhaInput.length === 0) {
    alert("Por favor, insira uma senha.");
  } else if (senhaInput != 3589) {
    alert("Senha incorreta")
  } else {
    window.open("usuario.html", "_self");
  }
}