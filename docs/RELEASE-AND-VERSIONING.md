# Release e versionamento

Usar Semantic Versioning (`MAJOR.MINOR.PATCH`) para o pacote:

- PATCH: correções compatíveis e documentação.
- MINOR: novos módulos, workflows, checklists ou ferramentas compatíveis.
- MAJOR: mudanças de contrato que exigem migração explícita.

Cada release deve atualizar `CHANGELOG.md` e `PACKAGE-MANIFEST.json`, executar os testes e revisar a lista de caminhos. Releases não devem apagar conteúdo legado. Registrar hash SHA-256 para facilitar verificação de integridade.
