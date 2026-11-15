# Skill Authoring & Maintenance

Baseado nas recomendações públicas oficiais da Anthropic para Skills.

## Estrutura
- `SKILL.md` funciona como entrada/índice, não como enciclopédia.
- Use frontmatter YAML válido com `name` e `description`.
- Descrição deve indicar o que a skill faz e quando deve ser acionada.
- Mantenha instruções principais concisas; divida conhecimento por domínio.
- Use progressive disclosure: abrir referências somente quando necessárias.
- Arquivos longos devem ter sumário e links internos.
- Scripts devem ter finalidade clara, dependências, instruções e testes.

## Qualidade
- Escreva instruções acionáveis, não slogans.
- Evite duplicação e regras contraditórias.
- Inclua exemplos de entrada/saída, falhas e limites.
- Teste em sessões novas com prompts representativos.
- Compare casos com e sem a skill quando possível.
- Verifique que os links e caminhos internos existem.
- Não assumir que todos os clientes de IA implementam a mesma instalação ou ferramentas.

Fonte oficial: https://docs.anthropic.com/claude/docs/agents-and-tools/agent-skills/best-practices
Claude Code Skills: https://code.claude.com/docs/en/skills
Agent Skills standard: https://agentskills.io/
