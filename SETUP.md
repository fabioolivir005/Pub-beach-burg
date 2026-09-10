<!-- 
  DICAS E INSTRUÇÕES DE SETUP
  
  Este arquivo contém instruções adicionais de configuração
  e customização do site Pub Beach Burg.
-->

# SETUP & CUSTOMIZAÇÃO — PUB BEACH BURG

## 🎯 ANTES DE COLOCAR ONLINE

### 1. Verificar Número do WhatsApp

**Arquivo:** `script.js` — Linha 6

```javascript
const WHATSAPP_PHONE = '5591991009087';
```

**Formato correto:**
- Código do país: 55 (Brasil)
- DDD: 91 (Pará)
- Número: 99100-9087
- **Resultado:** `5591991009087` (sem espaços, sem hífens)

**Testar:** Envie uma mensagem de teste clicando em "Finalizar Pedido"

---

### 2. Customizar Informações de Contato

**Arquivo:** `index.html`

**Seção Delivery:**
```html
<a href="https://wa.me/5591991009087" target="_blank">
  (91) 99100-9087
</a>

<a href="https://instagram.com/pubbeachburg" target="_blank">
  @pubbeachburg
</a>
```

**Trocar por seus dados:**
- WhatsApp: seu número
- Instagram: seu @ (sem o @)
- Localização: sua cidade/estado

---

### 3. Adicionar Imagens (Opcional)

Se quiser adicionar imagens reais dos hambúrgueres:

1. Crie pasta `/img` na raiz do projeto
2. Adicione as imagens:
   - `logo.jpg` (50x50px recomendado)
   - `pub-classico.jpg`
   - `pub-bacon.jpg`
   - `pub-calabresa.jpg`
   - `pub-calabacon.jpg`

3. No `index.html`, troque os emojis pelas imagens:

```html
<!-- ANTES (com emoji): -->
<div class="card-image">🍔</div>

<!-- DEPOIS (com imagem): -->
<div class="card-image">
  <img src="img/pub-classico.jpg" alt="Pub Clássico">
</div>
```

4. No CSS, adicione estilo para imagens:
```css
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## 🎨 CUSTOMIZAÇÕES VISUAIS

### Mudar Cor Principal

**Arquivo:** `style.css` — Linhas 7-21

```css
:root {
  --orange: #f28a12;        /* Cor principal - MUDE AQUI */
  --orange-dark: #d96d0a;   /* Cor hover */
  /* ... outras cores ... */
}
```

**Cores populares:**
- Vermelho: `#ff3333` (com hover: `#cc0000`)
- Verde: `#22c55e` (com hover: `#16a34a`)
- Azul: `#3b82f6` (com hover: `#1d4ed8`)
- Roxo: `#a855f7` (com hover: `#7c3aed`)

---

### Mudar Fundo

**Arquivo:** `style.css` — Linha 27

```css
body {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a0f05 100%);
}
```

**Opções:**
- Fundo sólido: `background: #080808;`
- Gradiente vertical: `linear-gradient(180deg, #000 0%, #333 100%)`
- Gradiente diagonal: `linear-gradient(135deg, #000 0%, #222 100%)`

---

### Mudar Fonte

**Arquivo:** `style.css` — Linha 25

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

**Alternativas (usando fontes seguras):**
- Times New Roman: `'Times New Roman', serif`
- Georgia: `Georgia, serif`
- Courier New: `'Courier New', monospace`
- Trebuchet MS: `'Trebuchet MS', sans-serif`

---

## 📱 TESTAR EM CELULAR

### Via Computador (Simulação)

1. Abra o site no navegador
2. Pressione `F12` (DevTools)
3. Clique no ícone de celular (device toggle)
4. Selecione diferentes dispositivos
5. Teste o carrinho e WhatsApp

### Via Telefone Real

1. Se em rede local: anote seu IP da máquina
2. No celular, acesse: `http://SEU_IP:8000`
3. Teste tudo (carrinho, WhatsApp, responsividade)

---

## 🚀 DEPLOY FINAL

### GitHub Pages (Recomendado - Já Configurado)

O site já está online em:
```
https://fabioolivir005.github.io/Pub-beach-burg/
```

Após fazer mudanças, faça commit e push:
```bash
git add .
git commit -m "Atualizar cardápio"
git push origin main
```

Site atualiza automaticamente em 1-2 minutos.

### Domínio Personalizado

Para usar seu próprio domínio (ex: `pubbeachburg.com`):

1. Compre um domínio (GoDaddy, Namecheap, etc)
2. No GitHub, vá para Settings → Pages
3. Em "Custom domain", adicione seu domínio
4. Configure os DNS do seu domínio para apontar para GitHub Pages

---

## ⚙️ CONFIGURAÇÕES AVANÇADAS

### Armazenar Carrinho Localmente

Para manter o carrinho mesmo após recarregar a página, adicione ao `script.js`:

```javascript
// Salvar carrinho
function saveCart() {
  localStorage.setItem('pbCart', JSON.stringify(cart));
}

// Carregar carrinho
function loadCart() {
  const saved = localStorage.getItem('pbCart');
  if (saved) cart = JSON.parse(saved);
  renderCart();
}

// Chamar ao inicializar
document.addEventListener('DOMContentLoaded', loadCart);

// Chamar quando mudar carrinho
function addCart(itemName, itemPrice) {
  // ... código existente ...
  saveCart(); // Adicione esta linha
}
```

---

### Adicionar Cupom de Desconto

Adicione ao `script.js`:

```javascript
const CUPOM_VALIDO = 'BEACH10'; // 10% de desconto
let cupomAplicado = false;

function aplicarCupom() {
  const cupom = prompt('Digite o cupom:');
  if (cupom === CUPOM_VALIDO) {
    cupomAplicado = true;
    alert('Cupom aplicado! 10% de desconto ✓');
    renderCart();
  } else {
    alert('Cupom inválido ❌');
  }
}

// Modifique formatPrice() para aplicar desconto
function formatPrice(price) {
  if (cupomAplicado) price *= 0.9; // 10% de desconto
  return price.toFixed(2).replace('.', ',');
}
```

---

## 🐛 SOLUÇÃO DE PROBLEMAS

### "Meu carrinho desapareceu"
- Normal! Recarregar a página limpa o carrinho (design intencional)
- Se quiser manter, implemente localStorage (veja seção acima)

### "WhatsApp não abre"
- Verifique o número em `script.js`
- Teste com: `https://wa.me/5591991009087?text=Olá`
- Se não funcionar, o número está errado

### "Site demora a carregar"
- Remova imagens pesadas se estiver usando
- Use emojis (mais rápido)
- Ative compressão GZIP no servidor

### "Não funciona no iPhone/iPad"
- Teste em Safari
- Certifique-se de usar HTTPS (não HTTP)
- Limpe cache do navegador (Cmd+Shift+R)

---

## 📊 ANALYTICS (OPCIONAL)

Para rastrear visitas, adicione ao `index.html` antes do `</body>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX'); <!-- Troque G-XXXXXXX pelo seu ID -->
</script>
```

Obtenha seu ID em: https://analytics.google.com

---

## 📞 SUPORTE

Problemas? Dúvidas?
- GitHub Issues: https://github.com/fabioolivir005/Pub-beach-burg/issues
- Email: leohatake599@gmail.com
- Instagram: @pubbeachburg

---

**Última atualização:** 2024
**Versão:** 1.0.0
**Status:** Pronto para produção ✓
