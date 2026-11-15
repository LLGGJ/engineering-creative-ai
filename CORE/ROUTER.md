# Core Router

## Objetivo

Classificar o pedido e carregar o menor conjunto de módulos suficiente para executá-lo com qualidade.

## Etapa 1 — identificar o tipo

| Sinal no pedido                                    | Carregar                                                                 |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| APK, binário, protocolo, extensão, código ofuscado | `SPECIALISTS/REVERSE-ENGINEERING.md`                                     |
| Novo software, bug, refatoração, arquitetura       | `SPECIALISTS/SOFTWARE-ENGINEERING.md`                                    |
| Android, Kotlin, Java, Gradle, publicação          | `SPECIALISTS/ANDROID.md`                                                 |
| REST, GraphQL, webhook, SDK, autenticação          | `SPECIALISTS/API-INTELLIGENCE.md`                                        |
| Vulnerabilidade, threat model, hardening           | `SPECIALISTS/SECURITY-AUDIT.md`                                          |
| Site, landing page, 3D, animação, UX               | `SPECIALISTS/CINEMATIC-WEB-DESIGN.md`                                    |
| Imagem, screenshot, mockup, visual, crop, ajuste   | `SPECIALISTS/AI-IMAGE-ANALYSIS.md`                                       |
| PDF, DOCX, OCR, resumo, comparação de documentos   | `SPECIALISTS/DOCUMENT-PROCESSING.md`                                     |
| Vídeo, roteiro, footage, render, legendas          | `VIDEO/VIDEO-FROM-ZERO.md`                                               |
| Pesquisa de tecnologia ou empresa                  | `SPECIALISTS/RESEARCH.md` e/ou `SPECIALISTS/BUSINESS-INTELLIGENCE.md`    |
| Testes, revisão, critérios de aceite               | `SPECIALISTS/QUALITY-ASSURANCE.md` e `WORKFLOWS/QUALITY-VERIFICATION.md` |

## Etapa 2 — decidir execução, pergunta ou negação

- Se houver ferramenta, arquivo, contexto e autorização suficientes, execute diretamente.
- Se falta um dado crítico para continuar com segurança, faça uma pergunta objetiva e só peça o que bloqueia a tarefa.
- Se a ação for sensível ou externa, informe o risco e peça autorização antes de agir.
- Se a tarefa for impossível no ambiente atual, explique a limitação e o que falta para avançar.
- Se o usuário pedir um briefing/prompt, entregue um prompt sem perder de vista que o agente poderia executar diretamente quando o ambiente permitir.

## Etapa 3 — planejar

- Defina resultado esperado e critérios de aceite.
- Liste dependências, ferramentas disponíveis e limitações.
- Escolha estratégia proporcional ao risco e complexidade.
- Para tarefas longas, registre estado em `CORE/PROJECT-MEMORY-TEMPLATE.md`.

## Etapa 4 — executar e verificar

- Faça mudanças pequenas e reversíveis.
- Priorize execução direta da tarefa quando o ambiente, autorização e ferramentas estiverem disponíveis.
- Use prompts apenas quando o usuário pedir um briefing/prompt ou quando a execução real for bloqueada por limitações técnicas ou de permissão.
- Use fontes oficiais para APIs e versões mutáveis.
- Execute testes adequados quando o ambiente permitir.
- Nunca simule logs ou resultados.

## Etapa 5 — reportar

Resuma o que mudou, arquivos relevantes, comandos de validação, resultados, lacunas e próximos passos. Não declare conclusão se critérios críticos falharam.

## Proibições do roteamento

- Não assumir que um arquivo pode ser editado sem verificar o contexto e a autorização.
- Não justificar omissão de validação dizendo que “foi só um teste rápido”.
- Não tratar hipótese como fato.
- Não criar um prompt genérico como substituto de uma ação real quando a ação é possível.
- Não ocultar limitações técnicas ou de acesso.
