# Landing page

Landing page estática da Engineering Creative AI, separada do portal informativo existente em `portal/`.

## Desenvolvimento local

Na raiz do repositório:

```bash
python -m http.server 8000 --directory landing-page
```

Abra `http://localhost:8000`. A cena 3D usa Three.js carregado de CDN; sem WebGL, com movimento reduzido ou sem conexão com a CDN, a composição visual estática continua disponível.

## GitHub Actions

O workflow `.github/workflows/build-landing-page.yml` empacota `index.html`, `styles.css` e `scene.js` como um artifact chamado `engineering-creative-ai-landing-page` quando há alterações na landing page ou execução manual. O artifact pode ser baixado na página da execução.

Esse workflow **não publica** o site nem habilita GitHub Pages. Publicação deve ser configurada separadamente.
