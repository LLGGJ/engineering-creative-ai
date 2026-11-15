# Addendum v3.1.0 — GitHub Pages & Legal Compliance

Este addendum é aditivo. Ele não substitui workflows, diretórios ou documentos existentes.

## GitHub Pages

Novo workflow: `.github/workflows/deploy-github-pages.yml`.

- Publica o conteúdo estático de `landing-page/`.
- Dispara em pushes para `main` quando `landing-page/**` ou o próprio workflow muda, e manualmente.
- Usa Actions oficiais `configure-pages`, `upload-pages-artifact` e `deploy-pages`.
- Não altera o workflow existente `build-landing-page.yml`.

### Ativação manual única

No GitHub: `Settings` → `Pages` → `Build and deployment` → `Source` → selecione `GitHub Actions`.

Após o commit e a execução bem-sucedida, a URL esperada para este repositório é:
`https://llggj.github.io/engineering-creative-ai/`

A URL só estará disponível depois de ativar Pages e o workflow terminar com sucesso. Se a organização usar domínio customizado ou restrições de Pages, a URL poderá ser diferente.

## Módulo legal

Novo módulo em `WEB/LEGAL-COMPLIANCE/`, mais especialista, workflow e prompt em diretórios já existentes. O conteúdo é educacional e operacional; exige dados reais, análise contextual e revisão jurídica. Não é uma declaração de conformidade.

## Política de preservação

O pacote overlay contém apenas arquivos novos. Extraia-o sobre a raiz do repositório, mantendo a opção de mesclar pastas. Não use opção de substituir diretórios inteiros. Nenhum arquivo existente está incluído no ZIP para substituição.
