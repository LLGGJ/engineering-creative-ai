# Contribuindo

Obrigado por ajudar a melhorar o Engineering Creative AI.

## Antes de propor um módulo

1. Leia `SKILL.md`, `CORE/ROUTER.md` e `docs/ARCHITECTURE.md`.
2. Consulte `docs/MODULE-MIGRATION-MAP.md` para evitar duplicação desnecessária.
3. Explique o problema que o módulo resolve e por que os arquivos atuais não bastam.
4. Prefira módulos pequenos, com gatilhos de uso claros, passos verificáveis e limites explícitos.

## Regra de preservação

Não remova nem renomeie caminhos já publicados. Para substituir uma abordagem, mantenha o arquivo anterior, marque-o como obsoleto se necessário, crie o sucessor e documente a migração.

## Validação obrigatória

```bash
python scripts/build_manifest.py
python scripts/validate_package.py
python scripts/check_additive_changes.py --baseline <manifesto-anterior>
python -m unittest discover -s tests -v
```

Revise o diff antes de abrir um pull request. Não inclua tokens, credenciais, dados pessoais ou arquivos de clientes.

## Pull requests

Descreva objetivo, escopo, caminhos adicionados/alterados, evidências, testes executados, limitações e impacto de compatibilidade. Alterações externas ou destrutivas precisam de justificativa e aprovação explícita.
