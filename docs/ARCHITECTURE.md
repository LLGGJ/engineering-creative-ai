# Arquitetura do pacote

## Camadas

1. **Entry point:** `SKILL.md` estabelece princípios e roteamento.
2. **Core:** regras operacionais, seleção de módulos, ferramentas e memória.
3. **Especialistas:** conhecimento orientado a domínios.
4. **Workflows:** sequências repetíveis de trabalho.
5. **Knowledge/Video:** playbooks e referências práticas.
6. **Quality system:** checklists, avaliações e testes.
7. **Presentation:** portal estático independente.

## Decisão de design
O projeto é uma biblioteca de instruções, não um runtime de agentes. Execução real depende do cliente de IA, ferramentas conectadas, ambiente local e permissões. Scripts incluídos validam o pacote; não executam engenharia reversa ou produção de vídeo automaticamente.
