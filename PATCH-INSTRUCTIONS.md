# Aplicação do patch corretivo 3.1.0

1. Extraia o conteúdo deste ZIP na raiz do repositório, mesclando pastas.
2. Execute `python APPLY-3.1.0-PATCH.py` na raiz do repositório.
3. Execute:
   - `python scripts/validate_package.py`
   - `python scripts/check_additive_changes.py --baseline ARCHIVE/PREVIOUS-BASELINES/BASELINE-V1/PACKAGE-MANIFEST.json`
   - `python scripts/check_additive_changes.py --baseline ARCHIVE/PREVIOUS-BASELINES/BASELINE-V2/PACKAGE-MANIFEST.json`
   - `python -m unittest discover -s tests -v`
4. No GitHub, configure Settings → Pages → Build and deployment → Source: GitHub Actions.
5. Faça commit e push; depois acompanhe os dois workflows em Actions.

O patch espera a base pública `f20d96cfcccc716a47a2328d1e487fa34f24641a`.
Se algum arquivo essencial estiver diferente, o script para sem tentar aplicar substituições ambíguas.
O ZIP é um overlay corretivo, não uma cópia completa do repositório.
