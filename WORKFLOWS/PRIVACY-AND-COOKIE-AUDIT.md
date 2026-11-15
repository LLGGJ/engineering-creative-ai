# Workflow — Privacy & Cookie Audit for Business Websites

## Inputs
- URL ou repositório do site.
- Países/mercados e setor.
- Nome e dados jurídicos confirmados da organização.
- Responsável por privacidade e canal de contato, se existentes.
- Lista de fornecedores e integrações conhecida.

## Steps
1. Mapear páginas, formulários, tags, pixels, embeds e integrações.
2. Fazer varredura de cookies/storage antes e depois de cada escolha.
3. Criar inventário técnico com nome, domínio, finalidade, fornecedor e duração observados.
4. Entrevistar o responsável para validar finalidades, controlador, operadores, retenção e bases legais.
5. Marcar cada informação como `VERIFICADA`, `DECLARADA PELO CLIENTE`, `HIPÓTESE` ou `PENDENTE`.
6. Revisar textos de privacidade, cookies e termos contra a implementação.
7. Verificar banner e preferências com teclado, leitor de tela e mobile.
8. Testar rede: nenhum script opcional deve disparar antes da escolha quando consentimento for exigido.
9. Testar rejeição, aceitação por categoria, persistência, alteração e revogação.
10. Gerar relatório de achados, severidade, evidência, correção e responsável.
11. Bloquear a alegação de conformidade final enquanto houver pendências críticas ou ausência de validação jurídica necessária.

## Deliverables
- `DATA-MAPPING.md`
- `COOKIE-INVENTORY.md`
- `PRIVACY-POLICY-DRAFT.md`
- `COOKIE-POLICY-DRAFT.md`
- `TERMS-DRAFT.md` (se aplicável)
- `AUDIT-REPORT.md`
- `OPEN-QUESTIONS.md`

## Statuses
- `PASS`: evidência observada e requisito atendido.
- `FAIL`: evidência de falha.
- `NEEDS-REVIEW`: depende de decisão jurídica/negocial.
- `NOT-APPLICABLE`: justificativa documentada.
- `NOT-TESTED`: não afirmar que passou.
