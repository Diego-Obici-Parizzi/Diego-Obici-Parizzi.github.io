# Portfólio de Certificados - Diego Obici Parizzi

Um site elegante e responsivo para exibir seus certificados da Alura, desenvolvido com **HTML, CSS e JavaScript puro** - sem frameworks!

## 📁 Estrutura dos Arquivos

```
portfolio-html/
├── index.html           # Estrutura HTML do site
├── css.css              # Estilos CSS
├── js.js                # Funcionalidades JavaScript
├── certificates/        # Pasta com PDFs dos certificados
│   ├── Certificado 1.pdf
│   ├── Certificado 2.pdf
│   └── ... (24 certificados)
├── img/                 # Pasta para imagens (opcional)
└── README.md            # Este arquivo
```

## 🎯 Funcionalidades

✅ **Exibição de Certificados**: 24 certificados organizados em 5 categorias  
✅ **Filtros por Categoria**: Navegação intuitiva  
✅ **Download de Certificados**: Baixe os PDFs diretamente  
✅ **Design Responsivo**: Funciona em desktop, tablet e mobile  
✅ **Animações Suaves**: Transições elegantes  
✅ **GitHub Pages Ready**: Deploy direto no GitHub  

## 🚀 Como Usar

### 1. Abrir Localmente

Simplesmente abra o arquivo `index.html` no seu navegador:

```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

Ou use um servidor local:

```bash
# Python 3
python -m http.server 8000

# Node.js (com http-server)
npx http-server
```

Depois acesse: `http://localhost:8000`

### 2. Deploy no GitHub Pages

1. **Crie um repositório** chamado `portfolio-certificados`
2. **Faça upload dos arquivos**:
   - index.html
   - css.css
   - js.js
   - Pasta certificates/
   - Pasta img/ (se tiver imagens)

3. **Ative GitHub Pages**:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main (ou master)

4. **Seu site estará em**:
   ```
   https://seu-usuario.github.io/portfolio-certificados/
   ```

## 📝 Adicionar Novos Certificados

1. **Coloque o PDF** na pasta `certificates/`

2. **Edite o arquivo `js.js`** e adicione uma entrada no array `certificates`:

```javascript
{
    id: 'novo-id',
    title: 'Título do Certificado',
    category: 'programming', // ou outra categoria
    fileName: 'Nome do Arquivo.pdf',
    color: '#1e3a8a'
}
```

3. **Categorias disponíveis**:
   - `programming` - Programação e Lógica
   - `infrastructure` - Desenvolvimento e Infraestrutura
   - `database` - Dados e Bancos de Dados
   - `softskills` - Soft Skills e Comunicação
   - `innovation` - Inovação e Multimídia

4. **Cores das categorias**:
   - Programming: `#1e3a8a` (azul)
   - Infrastructure: `#059669` (verde)
   - Database: `#dc2626` (vermelho)
   - Soft Skills: `#7c3aed` (roxo)
   - Innovation: `#f59e0b` (amarelo)

## 🎨 Personalizar

### Alterar Foto de Perfil

Edite `index.html` e procure por:
```html
<img src="https://files.manuscdn.com/..." alt="Diego Obici Parizzi">
```

Substitua a URL pela sua foto.

### Alterar Cores

Edite `css.css` e modifique as variáveis CSS:
```css
:root {
    --primary-color: #1e3a8a;      /* Azul principal */
    --primary-dark: #1e40af;       /* Azul escuro */
    --text-color: #1f2937;         /* Cor do texto */
    /* ... outras cores */
}
```

### Alterar Nome e Subtítulo

Edite `index.html`:
```html
<h1 class="profile-name">Seu Nome</h1>
<p class="profile-subtitle">Seu subtítulo</p>
```

## 📱 Responsividade

O site é totalmente responsivo:
- **Desktop**: Layout completo com sidebar
- **Tablet**: Layout adaptado
- **Mobile**: Otimizado para telas pequenas

## 🔧 Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS
- **JavaScript Vanilla**: Sem dependências externas
- **Google Fonts**: Playfair Display e Inter

## 📊 Certificados Inclusos

### Programação e Lógica (5)
- Começando em Programação
- JavaScript e HTML
- Lógica de Programação (3 cursos)

### Desenvolvimento e Infraestrutura (6)
- Git e GitHub
- Linux Onboarding
- JMS e ActiveMQ
- Microsserviços
- POO com Java
- Spring Boot 3

### Dados e Bancos de Dados (3)
- MongoDB
- Oracle Database
- SQL com MySQL

### Soft Skills e Comunicação (8)
- Comunicação
- Comunicação Assertiva
- Comunicação Não Violenta (2 partes)
- Feedback
- Oratória
- Produção de Vídeos
- Resiliência

### Inovação e Multimídia (2)
- Inteligência Artificial Generativa
- Produção de Vídeos

## 🐛 Troubleshooting

### Certificados não aparecem
- Verifique se os PDFs estão na pasta `certificates/`
- Confirme que o nome em `js.js` está exato
- Abra o console do navegador (F12) para ver erros

### Links não funcionam
- Certifique-se de que o arquivo `js.js` está sendo carregado
- Verifique se não há erros de sintaxe em `js.js`

### Estilos não aparecem
- Confirme que `css.css` está no mesmo diretório que `index.html`
- Limpe o cache do navegador (Ctrl+Shift+Delete)

## 📚 Recursos

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [GitHub Pages](https://pages.github.com/)

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**Diego Obici Parizzi**

- GitHub: [@diego-obici-parizzi](https://github.com/diego-obici-parizzi)
- Site: [diego-obici-parizzi.github.io](https://diego-obici-parizzi.github.io/)

---

Desenvolvido com ❤️ usando HTML, CSS e JavaScript puro
