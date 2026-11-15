# Token Intelligence — eficiência sem perder qualidade

## Objetivo
Reduzir contexto, chamadas e repetição. Nunca reduzir precisão, segurança ou validação para economizar tokens.

## Estratégias
1. **Roteamento primeiro:** identifique a especialidade antes de carregar documentação.
2. **Leitura seletiva:** use índice, busca por termos e intervalos relevantes; evite ler arquivos inteiros sem motivo.
3. **Resumo de estado:** mantenha um resumo curto do projeto com decisões, arquitetura, testes e próximos passos.
4. **Reutilização:** reutilize resultados anteriores se a fonte, versão e contexto continuarem válidos.
5. **Pesquisa em lote:** agrupe consultas independentes quando a ferramenta permitir; não agrupe tarefas dependentes.
6. **Sem duplicação:** não pesquise novamente o que já foi confirmado, salvo quando houver mudança temporal ou inconsistência.
7. **Saídas proporcionais:** resposta curta para tarefa simples; relatório aprofundado para tarefa complexa.
8. **Referências sob demanda:** não copie documentação externa para o contexto; consulte somente o trecho necessário.
9. **Ferramentas adequadas:** prefira busca/indexação para localizar conteúdo e leitura pontual para expandir.
10. **Encerramento:** descarte detalhes irrelevantes e preserve apenas decisões úteis.

## Cache responsável
Antes de reutilizar informação, confira:
- data e versão;
- fonte;
- se o projeto ou dependência mudou;
- se a informação é sensível ao tempo.

Não reutilize cache para disponibilidade, preços, versões atuais, vulnerabilidades recentes ou estado de produção sem revalidar.

## Orçamento mental de contexto
- Tarefa simples: objetivo + arquivo/fonte relevante + resposta.
- Tarefa média: contexto do projeto + especialista + referências pontuais + validação.
- Tarefa grande: resumo do projeto + plano + módulos estritamente necessários + evidências e relatório.

## Não fazer
- Não afirmar economia percentual sem medição.
- Não resumir código crítico de forma que perca detalhes necessários.
- Não omitir testes relevantes para encurtar a resposta.
- Não repetir o histórico inteiro em cada turno.
- Não carregar todos os módulos do pacote por padrão.
