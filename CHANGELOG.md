# Changelog

## [Unreleased]

### Added

- Landing page cinematográfica independente, com cena 3D Three.js, cards por disciplina e fallback para movimento reduzido ou indisponibilidade de WebGL.
- Workflow do GitHub Actions para empacotar a landing page como artifact estático, sem publicação automática.

## [Unreleased]

- README: banner SVG animado (`.github/assets/banner.svg`), badges de status dos workflows, seção de exemplos de pedidos e alertas de dica/aviso.
- Manifesto regenerado com os novos arquivos; validação local passa.
- README: seção de perguntas frequentes.
- Landing page: módulos em cards com ícones Lucide, animações GSAP/ScrollTrigger e Lenis, seção de uso com Claude, botão de ZIP da branch main e `llms.txt` com o índice de todos os módulos.
- Pages: o deploy exige que GitHub Pages esteja habilitado em Settings → Pages com fonte "GitHub Actions" (o token do workflow não consegue criar o site).

## [3.0.3] - 2026-11-15

### Changed

- Reforçadas as proibições críticas da skill para evitar inventar acessos, ferramentas e resultados.
- Adicionado um template de entrega mais operacional e um bloco de regras para tarefas por tipo.
- Ajustado o roteador para explicitar negação informada, autorização e limites do ambiente.
- Validação e documentação melhoradas para manter coerência entre comportamento, risco e evidência.

## [3.0.2] - 2026-11-15

### Changed

- Adicionada regra explícita de decisão do agente: execução direta, pergunta de bloqueio, autorização ou negação informada.
- Reforçado o padrão de resposta para tarefas reais, com contexto, evidência, riscos e limites.
- Expandido o conjunto de comportamentos esperados por tipo de tarefa (imagem, site, documento, vídeo, código e ações externas).
- Casos de avaliação e critérios de aprovação ajustados para priorizar execução real sobre prompt genérico.

## [3.0.1] - 2026-11-15

### Changed

- Regras de execução do agente ajustadas para priorizar a execução direta da tarefa, com prompts somente quando explicitamente solicitados ou bloqueados por ambiente/permissão.
- Casos de avaliação revisados para refletir criação/análise direta de sites, arquivos e imagens.
- Testes de regressão reforçados para impedir que a skill se converta em simples gerador de prompts.

## [3.0.0] - 2026-11-15

### Added

- União aditiva das bases locais 1.x e 2.x.
- Cópias integrais dos dois baselines em `ARCHIVE/PREVIOUS-BASELINES/` para preservar conteúdo anterior.
- Portal estático cinematográfico com efeitos CSS/Canvas e respeito a `prefers-reduced-motion`.
- Política de estrutura aditiva, versionamento, arquitetura, instalação, qualidade e suporte.
- `AGENTS.md`, `CITATION.cff`, templates GitHub e workflow de validação.
- Validador de manifesto com SHA-256 e testes automatizados com `unittest`.
- Roteador central e módulos adicionais de pesquisa, vídeo e atualização segura.

### Changed

- README e SKILL revisados para explicar capacidades reais, limites, instalação e roteamento.
- Manifesto regenerado para refletir todos os arquivos da distribuição.

### Preserved

- Nenhum arquivo dos dois baselines locais foi descartado; conflitos de caminhos estão preservados no arquivo histórico.

## [2.0.0] - 2026-11-14

- Base modular com pipeline audiovisual completo.

## [1.0.0] - 2026-11-14

- Primeira base modular de conhecimento.
