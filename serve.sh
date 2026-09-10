#!/bin/bash

# Script para iniciar um servidor local do Pub Beach Burg
# Use: bash serve.sh ou ./serve.sh

echo "🍔 PUB BEACH BURG — Servidor Local"
echo "=================================="
echo ""

# Verificar se Python está instalado
if command -v python3 &> /dev/null; then
    echo "✓ Python 3 encontrado"
    echo "🌐 Iniciando servidor na porta 8000..."
    echo ""
    echo "Acesse: http://localhost:8000"
    echo "Pressione Ctrl+C para parar"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✓ Python encontrado"
    echo "🌐 Iniciando servidor na porta 8000..."
    echo ""
    echo "Acesse: http://localhost:8000"
    echo "Pressione Ctrl+C para parar"
    echo ""
    python -m SimpleHTTPServer 8000
elif command -v node &> /dev/null; then
    echo "✓ Node.js encontrado"
    echo "🌐 Iniciando servidor na porta 8000..."
    echo ""
    echo "Acesse: http://localhost:8000"
    echo "Pressione Ctrl+C para parar"
    echo ""
    npx http-server -p 8000
else
    echo "❌ Erro: Nenhum servidor disponível"
    echo ""
    echo "Instale uma das opções:"
    echo "1. Python: https://www.python.org/downloads/"
    echo "2. Node.js: https://nodejs.org/"
    exit 1
fi
