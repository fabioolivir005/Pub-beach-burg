# 🍔 PUB BEACH BURG — Cardápio Digital

Um site moderno e responsivo de cardápio digital para hamburguerias, com carrinho de compras integrado ao WhatsApp.

## ✨ Características

✅ **Design Premium & Moderno**
- Interface escura com detalhes em laranja/dourado
- Totalmente responsivo (mobile, tablet, desktop)
- Animações suaves e transições elegantes
- Otimizado para Android e iPhone

✅ **Funcionalidades Completas**
- Cardápio de hambúrgueres com descrições
- Cardápio de bebidas variadas
- Carrinho de compras lateral
- Aumentar/diminuir quantidades
- Cálculo automático de totais
- Integração com WhatsApp

✅ **Integração WhatsApp**
- Gera mensagem formatada automaticamente
- Inclui todos os itens e preços
- Campos para endereço e forma de pagamento
- Envia diretamente para o número da hamburgueria

✅ **Seção Delivery**
- Informações de localização
- Links para WhatsApp e Instagram
- Instruções de como fazer pedidos

✅ **Tecnologia**
- HTML5 semântico
- CSS3 com Grid e Flexbox
- JavaScript vanilla (sem dependências)
- Zero backend necessário
- Hospedagem estática

---

## 📁 Estrutura do Projeto

```
Pub-beach-burg/
├── index.html          # Arquivo principal HTML
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
├── README.md           # Este arquivo
└── img/                # Pasta para imagens (opcional)
    ├── logo.jpg
    ├── pub-classico.jpg
    ├── pub-bacon.jpg
    ├── pub-calabresa.jpg
    └── pub-calabacon.jpg
```

---

## 🚀 Como Usar

### 1. Clonar ou Baixar o Repositório

```bash
git clone https://github.com/fabioolivir005/Pub-beach-burg.git
cd Pub-beach-burg
```

### 2. Abrir o Site Localmente

Basta abrir o arquivo `index.html` no navegador:
- Clique duplo em `index.html`
- Ou arraste `index.html` para o navegador
- Ou execute um servidor local

**Para abrir um servidor local com Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Depois acesse: `http://localhost:8000`

### 3. Testar as Funcionalidades

1. Clique em "Adicionar" em qualquer produto
2. Veja o carrinho atualizar no canto superior direito
3. Clique no botão 🛒 para abrir o carrinho
4. Aumente/diminua quantidades conforme necessário
5. Clique em "Finalizar Pedido"
6. O WhatsApp abrirá com a mensagem pronta para enviar

---

## 🌐 Deploy (Colocar Online)

### Opção 1: GitHub Pages (RECOMENDADO - GRATUITO)

1. Já está configurado neste repositório!
2. Acesse: `https://fabioolivir005.github.io/Pub-beach-burg/`

### Opção 2: Netlify (GRATUITO)

1. Acesse https://www.netlify.com
2. Clique em "Sign up"
3. Conecte sua conta GitHub
4. Selecione este repositório
5. Clique em "Deploy"
6. Pronto! Seu site estará online em minutos

### Opção 3: Vercel (GRATUITO)

1. Acesse https://vercel.com
2. Clique em "Sign Up"
3. Importe este repositório do GitHub
4. Clique em "Deploy"
5. Acesse sua URL pública

### Opção 4: Hosting Tradicional

1. Baixe todos os arquivos (HTML, CSS, JS)
2. Use FTP para enviar para seu servidor web
3. Acesse via seu domínio

---

## 📝 Personalizando o Site

### Mudar o Número do WhatsApp

No arquivo `script.js`, linha 6:
```javascript
const WHATSAPP_PHONE = '5591991009087';
```

Troque pelo número do seu WhatsApp (com código do país, sem espaços ou caracteres especiais).

### Adicionar Novos Produtos

No arquivo `index.html`, adicione novo card no menu desejado:

```html
<div class="menu-card">
  <div class="card-image">🍔</div>
  <div class="card-content">
    <h3 class="card-title">Seu Produto</h3>
    <p class="card-desc">Descrição do produto aqui.</p>
    <div class="card-footer">
      <span class="card-price">R$ XX,XX</span>
      <button class="btn-add" onclick="addCart('Seu Produto', XX.XX)">Adicionar</button>
    </div>
  </div>
</div>
```

### Mudar Cores

No arquivo `style.css`, seção `:root`:
```css
:root {
  --orange: #f28a12;        /* Cor principal */
  --orange-dark: #d96d0a;   /* Cor hover */
  --cream: #f1eadc;         /* Texto claro */
  /* ... outras cores ... */
}
```

### Mudar Informações de Contato

No arquivo `index.html`, seção Delivery:
- Troque o número do WhatsApp
- Troque o @ do Instagram
- Atualize a localização

---

## 🎨 Tipografia & Design

- **Fonte**: System fonts (rápido e limpo)
- **Cores Principais**: Preto, Laranja, Dourado, Creme
- **Ícones**: Emojis (universal e sem dependências)
- **Responsividade**: Mobile-first, breakpoints em 768px e 480px

---

## 💬 Fluxo do Pedido

1. Cliente entra no site
2. Navega pelos menus (Hambúrgueres, Bebidas, Delivery)
3. Adiciona produtos ao carrinho
4. Abre o carrinho e revisa itens
5. Clica em "Finalizar Pedido"
6. WhatsApp abre com mensagem formatada
7. Cliente preenche endereço e forma de pagamento
8. Envia a mensagem
9. Você (loja) recebe no WhatsApp
10. Confirma pedido, taxa de entrega, etc.

---

## 📱 Responsividade

O site foi otimizado para:
- ✅ iPhone (375px+)
- ✅ Android (360px+)
- ✅ Tablets (768px+)
- ✅ Desktop (1200px+)

Teste em diferentes dispositivos usando as ferramentas de desenvolvedor do navegador (F12).

---

## ⚡ Performance

- Arquivo HTML: ~11 KB
- Arquivo CSS: ~17 KB
- Arquivo JS: ~9 KB
- **Total: ~37 KB** (super rápido!)
- Sem imagens necessárias (usa emojis)
- Sem dependências externas
- Carrega em qualquer conexão

---

## 🔒 Segurança

- ✅ Sem backend necessário
- ✅ Sem banco de dados
- ✅ Sem formulários sensíveis
- ✅ Sem login necessário
- ✅ Todos os dados ficam local até enviar para WhatsApp

---

## 🐛 Troubleshooting

### O WhatsApp não abre ao clicar em "Finalizar Pedido"

**Solução:**
- Verifique se o número do WhatsApp está correto em `script.js`
- Certifique-se de que o formato é: `5591991009087` (sem espaços ou símbolos)
- Tente abrir WhatsApp Web ou o aplicativo manualmente

### O site não carrega os estilos corretamente

**Solução:**
- Verifique se os arquivos `style.css` e `script.js` estão no mesmo diretório
- Abra as ferramentas de desenvolvedor (F12) e veja se há erros no console

### Carrinho desaparece ao recarregar página

**Esperado:** O carrinho é limpo propositalmente ao recarregar (armazenamento local não implementado)

**Se quiser manter o carrinho:**
- Adicione localStorage ao `script.js`
- Salve o carrinho antes de descarregar
- Restaure ao carregar a página

---

## 📞 Suporte & Customização

Precisa de ajuda ou quer customizações?
- Abra uma issue no GitHub
- Contato: leohatake599@gmail.com

---

## 📄 Licença

Este projeto é livre para uso pessoal e comercial.

---

## ✍️ Autor

Criado com ❤️ para **Pub Beach Burg — Salinópolis, PA**

---

## 🎯 Próximas Melhorias

- [ ] Armazenar carrinho em localStorage
- [ ] Dark/Light mode toggle
- [ ] Avaliações de produtos
- [ ] Histórico de pedidos
- [ ] Cupons de desconto
- [ ] Cardápio em PDF
- [ ] Push notifications para pedidos

---

**Sabor, qualidade e atitude — à beira-mar! 🌴🔥**
