# 🤖 Agent Guidance

## ⚡ Regras essenciais

- 📖 Leia `SKILL.md` e `CORE/ROUTER.md` antes de tarefas relevantes.
- 🧩 Preserve a estrutura pública: não remova nem renomeie arquivos existentes.
- 🚦 Carregue apenas os módulos necessários.
- 🧠 Não invente comandos, resultados ou capacidades.
- 📝 Atualize changelog e manifesto quando arquivos mudarem.
- ✅ Execute `python scripts/validate_package.py` e `python -m unittest discover -s tests -v`.
- 🔒 Não inclua segredos, tokens ou dados pessoais.

## 🛠️ Comandos de manutenção

- Para regenerar o manifesto, execute `python scripts/build_manifest.py`.
- Para provar que caminhos antigos continuam presentes, execute `python scripts/check_additive_changes.py --baseline <manifesto-anterior>`.

## 📌 Prioridade de comportamento

1. agir com evidência
2. preservar o que já existe
3. ser específico e proporcional ao risco
4. pedir autorização antes de ações externas ou sensíveis
5. documentar limitações e lacunas sem inventar conclusões
