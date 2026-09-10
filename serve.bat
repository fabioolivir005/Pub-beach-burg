@echo off
REM Script para iniciar um servidor local do Pub Beach Burg no Windows
REM Use: serve.bat

echo.
echo 🍔 PUB BEACH BURG - Servidor Local
echo ==================================
echo.

REM Verificar se Python está instalado
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Python encontrado
    echo 🌐 Iniciando servidor na porta 8000...
    echo.
    echo Acesse: http://localhost:8000
    echo Pressione Ctrl+C para parar
    echo.
    python -m http.server 8000
    pause
    exit /b
)

REM Verificar se Node.js está instalado
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Node.js encontrado
    echo 🌐 Iniciando servidor na porta 8000...
    echo.
    echo Acesse: http://localhost:8000
    echo Pressione Ctrl+C para parar
    echo.
    npx http-server -p 8000
    pause
    exit /b
)

REM Nenhum servidor disponível
echo ❌ Erro: Nenhum servidor disponível
echo.
echo Instale uma das opções:
echo 1. Python: https://www.python.org/downloads/
echo 2. Node.js: https://nodejs.org/
echo.
pause
