# Core Router

## Objetivo
Classificar o pedido e carregar o menor conjunto de módulos suficiente para executá-lo com qualidade.

## Etapa 1 — identificar o tipo

| Sinal no pedido | Carregar |
|---|---|
| APK, binário, protocolo, extensão, código ofuscado | `SPECIALISTS/REVERSE-ENGINEERING.md` |
| Novo software, bug, refatoração, arquitetura | `SPECIALISTS/SOFTWARE-ENGINEERING.md` |
| Android, Kotlin, Java, Gradle, publicação | `SPECIALISTS/ANDROID.md` |
| REST, GraphQL, webhook, SDK, autenticação | `SPECIALISTS/API-INTELLIGENCE.md` |
| Vulnerabilidade, threat model, hardening | `SPECIALISTS/SECURITY-AUDIT.md` |
| Site, landing page, 3D, animação, UX | `SPECIALISTS/CINEMATIC-WEB-DESIGN.md` |
| Vídeo, roteiro, footage, render, legendas | `VIDEO/VIDEO-FROM-ZERO.md` |
| Pesquisa de tecnologia ou empresa | `SPECIALISTS/RESEARCH.md` e/ou `SPECIALISTS/BUSINESS-INTELLIGENCE.md` |
| Testes, revisão, critérios de aceite | `SPECIALISTS/QUALITY-ASSURANCE.md` |

## Etapa 2 — esclarecer somente o essencial

Se faltar uma informação que bloqueie a execução (por exemplo plataforma, arquivo-alvo, ambiente ou autorização), faça uma pergunta objetiva. Se for possível avançar com segurança, declare as premissas e prossiga.

## Etapa 3 — planejar

- Defina resultado esperado e critérios de aceite.
- Liste dependências, ferramentas disponíveis e limitações.
- Escolha estratégia proporcional ao risco e complexidade.
- Para tarefas longas, registre estado em `CORE/PROJECT-MEMORY-TEMPLATE.md`.

## Etapa 4 — executar e verificar

- Faça mudanças pequenas e reversíveis.
- Use fontes oficiais para APIs e versões mutáveis.
- Execute testes adequados quando o ambiente permitir.
- Nunca simule logs ou resultados.

## Etapa 5 — reportar

Resuma o que mudou, arquivos relevantes, comandos de validação, resultados, lacunas e próximos passos. Não declare conclusão se critérios críticos falharam.
