(function() {
  function performLogin() {
    var usernameField = document.querySelector('input[data-testid="data-testid Username input field"]');
    var passwordField = document.querySelector('input[data-testid="data-testid Password input field"]');
    var loginButton = document.querySelector('button[data-testid="data-testid Login button"]');

    console.log('usernameField:', usernameField);
    console.log('passwordField:', passwordField);
    console.log('loginButton:', loginButton);

    if (usernameField && passwordField && loginButton) {
      // Preenche os campos
      usernameField.focus();
      usernameField.value = "usuário";
      passwordField.focus();
      passwordField.value = "senha";

      // Força a atualização dos campos
      usernameField.dispatchEvent(new Event('input', { bubbles: true }));
      passwordField.dispatchEvent(new Event('input', { bubbles: true }));

      // Adiciona um atraso para garantir que o DOM esteja atualizado
      setTimeout(function() {
        // Remove o foco do campo de senha
        passwordField.blur();

        // Verifica se o botão está visível e habilitado
        if (loginButton && loginButton.offsetParent !== null && !loginButton.disabled) {
          // Simula o clique no botão de login
          loginButton.focus(); // Garantir que o botão receba o foco
          loginButton.click();
          console.log('Botão de login clicado');

          // Espera um tempo para o login ser processado
          setTimeout(function() {
            // Verifica a URL atual para confirmar o login
            if (window.location.href.includes('login')) {
              console.log('Ainda na página de login, aguardando mais um pouco.');
            } else {
              // Redireciona para o dashboard se não estiver na página de login
              window.location.href = 'https://www.exemplo.com/*'; // Substitua pela URL do seu dashboard
              console.log('Redirecionando para o Dashboard');
            }
          }, 5000); // Ajuste o atraso conforme necessário
        } else {
          console.error('Botão de login não está visível ou está desativado');
        }
      }, 2000); // Ajuste o atraso conforme necessário
    } else {
      console.error('Elementos não encontrados: usernameField:', usernameField, ', passwordField:', passwordField, ', loginButton:', loginButton);
    }
  }

  function checkElements() {
    var usernameField = document.querySelector('input[data-testid="data-testid Username input field"]');
    var passwordField = document.querySelector('input[data-testid="data-testid Password input field"]');
    var loginButton = document.querySelector('button[data-testid="data-testid Login button"]');

    if (usernameField && passwordField && loginButton) {
      console.log('Elementos encontrados, realizando login.');
      clearInterval(elementCheckInterval);
      performLogin();
    } else {
      console.log('Aguardando elementos:', usernameField, passwordField, loginButton);
    }
  }

  // Verifica os elementos a cada 500ms
  var elementCheckInterval = setInterval(checkElements, 500);

  // Adiciona um listener para redirecionamento quando a página carregar
  window.addEventListener('load', function() {
    console.log('Página carregada, iniciando verificação dos elementos.');
  });
})();

