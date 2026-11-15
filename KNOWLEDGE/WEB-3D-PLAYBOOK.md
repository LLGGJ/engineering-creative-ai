# Web 3D Cinematográfico — Playbook

## Pipeline visual
1. Pesquisa da marca e público.
2. Conceito e narrativa.
3. Moodboard e direção de arte.
4. Wireframe e hierarquia.
5. Protótipo de movimento.
6. Integração 3D.
7. Responsividade e acessibilidade.
8. Otimização e validação.

## Ferramentas possíveis
- Three.js: renderização 3D no navegador.
- React Three Fiber: integração declarativa com React.
- GSAP: animações e timelines.
- ScrollTrigger: animação vinculada à rolagem.
- Blender: modelagem e preparação de assets.
- glTF/GLB: formatos comuns para entrega de modelos.

Confira versões e documentação atual antes de recomendar configuração específica.

## Performance
- Reduzir polígonos e draw calls.
- Comprimir texturas e modelos.
- Carregar assets sob demanda.
- Usar níveis de detalhe quando adequado.
- Respeitar limites de GPU móvel.
- Pausar animações fora de tela quando possível.
- Oferecer fallback estático.
- Respeitar `prefers-reduced-motion`.

## UX
A animação nunca deve impedir leitura, navegação ou conversão. CTAs devem ser claros e funcionais. Não usar scroll hijacking que retire controle do usuário.
