# Portal visual

Site estático demonstrativo do Engineering Creative AI. Sem etapa de build e sem dependências JS externas. Fontes Google são opcionais; com falha de rede usa fontes sans-serif locais.

## Local

```bash
python -m http.server 8000 --directory portal
```

## GitHub Pages

Configure Pages para servir a pasta `/portal` se o fluxo de publicação escolhido permitir selecionar diretório. Alternativamente, publique o conteúdo da pasta como site estático. Não confundir a existência do portal com uma publicação já realizada.

A animação de partículas é desativada quando `prefers-reduced-motion: reduce` está ativo.
