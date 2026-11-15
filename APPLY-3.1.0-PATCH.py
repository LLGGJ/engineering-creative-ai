#!/usr/bin/env python3
"""
Apply the Engineering Creative AI 3.1.0 corrective overlay.
Run from the repository root after extracting this ZIP into the repository.
This script is additive: it does not delete, rename, or move existing paths.
"""
from pathlib import Path
import json
import subprocess
import sys

ROOT = Path(__file__).resolve().parent
EXPECTED = {
    "SKILL.md": "# ENGINEERING CREATIVE AI — Master Skill 3.0.3",
    "CORE/ROUTER.md": "# Core Router",
    "README.md": "# 🚀 ENGINEERING CREATIVE AI",
    "CHANGELOG.md": "# Changelog",
    "scripts/validate_package.py": "manifest version must be 3.0.3",
    "tests/test_package.py": "self.assertEqual(data['version'], '3.0.3')",
}

def read(rel):
    p = ROOT / rel
    if not p.is_file():
        raise RuntimeError(f"Arquivo obrigatório não encontrado: {rel}")
    return p.read_text(encoding="utf-8")

def write(rel, content):
    (ROOT / rel).write_text(content, encoding="utf-8", newline="\n")

def replace_once(text, old, new, rel):
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f"Âncora inesperada em {rel}: esperava 1 ocorrência, encontrei {count}: {old[:90]!r}")
    return text.replace(old, new, 1)

def main():
    for rel, marker in EXPECTED.items():
        if marker not in read(rel):
            raise RuntimeError(f"Versão/base inesperada em {rel}. Não apliquei alterações para evitar sobrescrever conteúdo diferente.")

    # SKILL: versão, roteamento LGPD e regra específica para sites de clientes.
    p = read("SKILL.md")
    p = replace_once(p, "# ENGINEERING CREATIVE AI — Master Skill 3.0.3",
                     "# ENGINEERING CREATIVE AI — Master Skill 3.1.0", "SKILL.md")
    p = replace_once(p, "- Inteligência comercial: `SPECIALISTS/BUSINESS-INTELLIGENCE.md`.",
                     "- Inteligência comercial: `SPECIALISTS/BUSINESS-INTELLIGENCE.md`.\n- Privacidade/LGPD e cookies: `SPECIALISTS/PRIVACY-LGPD-COMPLIANCE.md`, `WORKFLOWS/PRIVACY-AND-COOKIE-AUDIT.md` e `WEB/LEGAL-COMPLIANCE/README.md`.",
                     "SKILL.md")
    old_rule = """Quando o pedido for criar ou reformular um site, analisar uma imagem, processar arquivos, revisar código, escrever documentação, produzir vídeo ou executar qualquer tarefa digital, a skill deve priorizar a execução direta no ambiente, arquivo ou ferramenta disponíveis.

- Se houver ferramenta, acesso autorizado, dados e permissões necessárias, execute a tarefa diretamente.
- Se a tarefa exigir publicação, serviço externo, gasto, mudança em produção ou acesso sensível, peça autorização antes da ação.
- Use prompts apenas quando o usuário pedir explicitamente um briefing/prompt, ou quando a execução real for impossível por ausência de ferramenta, permissão ou alcance do cliente.
- Não substitua uma análise, edição ou implementação real por um prompt genérico sem necessidade.
- Pesquise informações públicas quando possível; separe fatos confirmados de suposições; inclua arquitetura, conteúdo, responsividade, acessibilidade, SEO, performance, integrações, animações e critérios de aceite."""
    new_rule = """Quando o pedido envolver uma tarefa digital, escolha a entrega conforme o contexto e a intenção do usuário.

- Para sites de empresas/clientes externos, entregue um prompt de implementação completo para a ferramenta de desenvolvimento escolhida; não implemente o site final em nome da empresa, salvo pedido explícito em contrário.
- Para projetos próprios do usuário, demos técnicas, auditorias, protótipos e ferramentas internas, priorize a execução direta quando houver ferramentas, arquivos, autorização e contexto suficientes.
- Se a tarefa exigir publicação, serviço externo, gasto, mudança em produção ou acesso sensível, peça autorização antes da ação.
- Não substitua uma execução possível por um prompt genérico; não substitua um prompt solicitado por implementação não solicitada.
- Pesquise informações públicas quando possível; separe fatos confirmados de suposições; inclua arquitetura, conteúdo, responsividade, acessibilidade, SEO, performance, integrações, animações e critérios de aceite."""
    p = replace_once(p, old_rule, new_rule, "SKILL.md")
    write("SKILL.md", p)

    # Router: LGPD route and client website prompt policy.
    p = read("CORE/ROUTER.md")
    p = replace_once(p, "| Pesquisa de tecnologia ou empresa                  | `SPECIALISTS/RESEARCH.md` e/ou `SPECIALISTS/BUSINESS-INTELLIGENCE.md`    |",
                     "| Pesquisa de tecnologia ou empresa                  | `SPECIALISTS/RESEARCH.md` e/ou `SPECIALISTS/BUSINESS-INTELLIGENCE.md`    |\n| LGPD, privacidade, cookies, políticas legais         | `SPECIALISTS/PRIVACY-LGPD-COMPLIANCE.md` e `WORKFLOWS/PRIVACY-AND-COOKIE-AUDIT.md` |",
                     "CORE/ROUTER.md")
    p = replace_once(p, "- Se o usuário pedir um briefing/prompt, entregue um prompt sem perder de vista que o agente poderia executar diretamente quando o ambiente permitir.",
                     "- Para site de empresa/cliente externo, entregue prompt completo para a ferramenta de desenvolvimento; não gere o site final, salvo pedido explícito.\n- Para projeto próprio, protótipo ou ferramenta interna, prefira execução direta quando possível.\n- Se o usuário pedir um briefing/prompt, entregue o prompt solicitado.",
                     "CORE/ROUTER.md")
    write("CORE/ROUTER.md", p)

    # Validator and unit tests follow the new release.
    p = read("scripts/validate_package.py")
    p = replace_once(p, "if data.get('version') != '3.0.3': fail('manifest version must be 3.0.3 for this release')",
                     "if data.get('version') != '3.1.0': fail('manifest version must be 3.1.0 for this release')",
                     "scripts/validate_package.py")
    write("scripts/validate_package.py", p)

    p = read("tests/test_package.py")
    p = replace_once(p, "self.assertEqual(data['version'], '3.0.3')",
                     "self.assertEqual(data['version'], '3.1.0')", "tests/test_package.py")
    p = replace_once(p, """    def test_skill_requires_direct_execution_for_user_tasks(self):
        text = (ROOT / 'SKILL.md').read_text(encoding='utf-8').lower()
        router = (ROOT / 'CORE' / 'ROUTER.md').read_text(encoding='utf-8').lower()
        self.assertIn('execução direta', text)
        self.assertIn('execução direta', router)
        self.assertNotIn('entregue um prompt completo para a ferramenta de desenvolvimento escolhida', text)
""", """    def test_client_business_sites_use_prompt_workflow(self):
        text = (ROOT / 'SKILL.md').read_text(encoding='utf-8').lower()
        router = (ROOT / 'CORE' / 'ROUTER.md').read_text(encoding='utf-8').lower()
        self.assertIn('sites de empresas/clientes externos', text)
        self.assertIn('prompt de implementação completo', text)
        self.assertIn('site de empresa/cliente externo', router)
        self.assertIn('prompt completo', router)

    def test_lgpd_specialist_is_routed(self):
        skill = (ROOT / 'SKILL.md').read_text(encoding='utf-8')
        router = (ROOT / 'CORE' / 'ROUTER.md').read_text(encoding='utf-8')
        self.assertIn('SPECIALISTS/PRIVACY-LGPD-COMPLIANCE.md', skill)
        self.assertIn('SPECIALISTS/PRIVACY-LGPD-COMPLIANCE.md', router)
        self.assertTrue((ROOT / 'SPECIALISTS' / 'PRIVACY-LGPD-COMPLIANCE.md').is_file())
        self.assertTrue((ROOT / 'WORKFLOWS' / 'PRIVACY-AND-COOKIE-AUDIT.md').is_file())

    def test_pages_workflow_publishes_landing_page_without_removing_portal(self):
        workflow = (ROOT / '.github' / 'workflows' / 'deploy-github-pages.yml').read_text(encoding='utf-8')
        self.assertIn('path: landing-page', workflow)
        self.assertTrue((ROOT / 'portal' / 'index.html').is_file())
        self.assertTrue((ROOT / 'landing-page' / 'index.html').is_file())
""", "tests/test_package.py")
    write("tests/test_package.py", p)

    # README: align version, published directory, and setup note; keep both portal trees.
    p = read("README.md")
    p = p.replace("version-3.0.3-", "version-3.1.0-")
    p = p.replace("engineering-creative-ai-v3.0.3", "engineering-creative-ai-v3.1.0")
    p = p.replace("**Engineering Creative AI · 3.0.3**", "**Engineering Creative AI · 3.1.0**")
    p = p.replace("A partir da versão 3.0.3,", "A partir da versão 3.1.0,")
    old_portal = """O diretório `portal/` contém uma página estática independente com identidade visual cinematográfica, efeitos leves, animação de partículas, elementos 3D em CSS e suporte a `prefers-reduced-motion`. Ela pode ser publicada via GitHub Pages. O README do GitHub não executa JavaScript livremente; por isso os efeitos ficam no portal, não embutidos no Markdown.

Para testar localmente:

```bash
python -m http.server 8000 --directory portal
```

Abra `http://localhost:8000`."""
    new_portal = """O repositório mantém duas experiências, sem excluir nenhuma:

- `portal/`: portal visual compacto para execução local e documentação.
- `landing-page/`: landing page cinematográfica com cena Three.js; é a fonte configurada no workflow de publicação do GitHub Pages.

Para testar o portal compacto localmente:

```bash
python -m http.server 8000 --directory portal
```

Abra `http://localhost:8000`.

Para testar a landing page cinematográfica, execute `python -m http.server 8000 --directory landing-page` e abra `http://localhost:8000`.

**Configuração única necessária no GitHub:** abra Settings → Pages → Build and deployment e selecione `GitHub Actions` como Source. O workflow não consegue habilitar essa configuração de conta sozinho; sem ela, `actions/configure-pages` retorna erro."""
    p = replace_once(p, old_portal, new_portal, "README.md")
    write("README.md", p)

    # Changelog: record release while retaining Unreleased and historical entries.
    p = read("CHANGELOG.md")
    release = """# Changelog

## [3.1.0] - 2026-11-15

### Added

- Módulo de especialista LGPD/privacidade e workflow de auditoria de cookies integrado ao roteador principal.
- Templates e checklists legais para revisão humana de privacidade, cookies, termos e mapeamento de dados.
- Processo de correção do manifesto com regeneração automática de hashes e contagem de arquivos.
- Publicação do diretório `landing-page/` via GitHub Pages, mantendo `portal/` como experiência local complementar.

### Changed

- Política de sites de empresas/clientes externos alinhada para gerar prompts completos de implementação; projetos próprios e protótipos continuam elegíveis para execução direta.
- Validador, testes, README e versão principal alinhados em 3.1.0.
- README esclarece a configuração manual necessária de GitHub Pages.

## [Unreleased]

"""
    p = replace_once(p, "# Changelog\n\n## [Unreleased]\n\n", release, "CHANGELOG.md")
    write("CHANGELOG.md", p)

    # Ensure the root manifest's metadata is upgraded before regeneration.
    manifest_path = ROOT / "PACKAGE-MANIFEST.json"
    data = json.loads(manifest_path.read_text(encoding="utf-8"))
    data["version"] = "3.1.0"
    data["release_date"] = "2026-11-15"
    data["description"] = "Additive modular engineering knowledge system for AI coding agents, including privacy/LGPD workflows, cinematic landing page and automated package validation."
    manifest_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    # Regenerate all hashes/byte counts only after every overlay file is present.
    build = ROOT / "scripts" / "build_manifest.py"
    if not build.is_file():
        raise RuntimeError("scripts/build_manifest.py não encontrado.")
    subprocess.run([sys.executable, str(build)], cwd=ROOT, check=True)

    print("Patch 3.1.0 aplicado. Próximo passo: executar os testes e revisar o diff.")
    print("Nenhum arquivo ou pasta existente foi removido, renomeado ou movido.")

if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"ERRO: {exc}", file=sys.stderr)
        sys.exit(1)
