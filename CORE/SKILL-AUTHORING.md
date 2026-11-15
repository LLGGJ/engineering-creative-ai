# Skill Authoring Standard

## Estrutura mínima
- `SKILL.md` com frontmatter válido (`name`, `description`).
- Instruções de roteamento e regras de segurança.
- Módulos especializados pequenos, com propósito claro.
- Exemplos e critérios de avaliação.

## Boas práticas
- Descrição curta e acionável, incluindo quando usar a Skill.
- Carregamento sob demanda; evite um arquivo monolítico.
- Evite duplicação: defina fonte canônica e use links internos.
- Diferencie instruções, exemplos, ferramentas e capacidades reais.
- Inclua limitações e comportamento de falha.
- Mantenha linguagem neutra e sem instruções para ignorar políticas superiores.

## Evolução
Não apague caminhos publicados. Marque módulos antigos como `DEPRECATED`, adicione o sucessor e documente a migração. Atualize manifesto, changelog e testes.
