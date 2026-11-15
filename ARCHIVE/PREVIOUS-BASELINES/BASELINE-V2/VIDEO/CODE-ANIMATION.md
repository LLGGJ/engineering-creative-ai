# Code-Generated Video & Motion Graphics

## Quando usar
Vídeos explicativos, anúncios, demonstrações de produto, gráficos, títulos, UI animada, visualizações de dados e conteúdo repetível.

## Stack possível
- Remotion: vídeo programático em React.
- FFmpeg: montagem, conversão, filtros, áudio e render.
- Canvas/SVG: motion 2D.
- Three.js: cenas 3D em navegador.
- HyperFrames: composição HTML/motion para vídeo, se compatível com o ambiente.

## Processo
1. Escrever roteiro e timeline em frames.
2. Definir FPS, resolução, duração e aspect ratio.
3. Criar composição com componentes reutilizáveis.
4. Usar fontes/assets locais com licença.
5. Sincronizar animação com narração/música.
6. Renderizar preview de baixa resolução.
7. Validar timing, safe areas e legibilidade.
8. Renderizar master e versões finais.
9. Inspecionar arquivo com ffprobe e assistir ao resultado.

Não usar tempo de parede para animações; use frame/time determinístico. Verifique APIs e versões oficiais antes de codificar.
