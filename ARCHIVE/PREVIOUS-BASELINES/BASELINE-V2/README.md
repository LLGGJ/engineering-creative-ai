# Engineering Creative AI 2.0

Base modular de conhecimento para Claude: engenharia reversa autorizada, desenvolvimento de software, design 3D cinematográfico e **produção de vídeos do zero até a exportação**.

## O que mudou na 2.0
- Módulo audiovisual completo: roteiro, storyboard, direção, assets, geração, Blender, motion graphics, edição, áudio, legendas, render e QA.
- Separação entre gerar vídeo com modelos, animar por código, criar em 3D e editar filmagem real.
- Estratégia de economia de tokens e uso consciente de conectores.
- Referências públicas pesquisadas e links para skills comunitárias, sem copiar seu conteúdo.
- Portões de qualidade e validação de entregas.

## Instalação
Importe o ZIP como Skill se o ambiente Claude oferecer essa função. Para Claude Code, extraia a pasta da skill em `.claude/skills/engineering-creative-ai/` dentro do projeto ou em `~/.claude/skills/engineering-creative-ai/` para uso global, conforme a documentação da versão instalada. Confirme a estrutura exigida pelo cliente Claude atual.

O pacote não treina pesos do modelo, não instala FFmpeg/Blender/Node automaticamente e não concede acesso a conectores. Ferramentas e permissões devem ser configuradas separadamente.

## Uso
Leia `SKILL.md`, depois `CORE/ROUTER.md` e somente o especialista necessário. Para projetos longos, crie um `PROJECT_STATE.md` usando `CORE/PROJECT-MEMORY-TEMPLATE.md`.

## Licença
MIT para os arquivos originais deste repositório. Referências externas continuam sob suas respectivas licenças e termos. Não há cópia integral de skills de terceiros.
