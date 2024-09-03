@echo off
:: Define o caminho para o executável do Chrome
set "chromePath=C:\Program Files\Google\Chrome\Application\chrome.exe"

:: Define a URL para abrir
set "url=https://seu-link"

:: Inicia o Chrome com a URL especificada
"%chromePath%" "%url%"

:: Pausa o script para visualizar qualquer mensagem (opcional)
pause
