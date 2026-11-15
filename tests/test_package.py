import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

class PackageStructureTests(unittest.TestCase):
    def test_manifest_exists_and_version(self):
        data = json.loads((ROOT / 'PACKAGE-MANIFEST.json').read_text(encoding='utf-8'))
        self.assertEqual(data['version'], '3.0.3')
        self.assertGreater(data['file_count'], 60)

    def test_previous_baselines_are_preserved(self):
        for version in ('BASELINE-V1', 'BASELINE-V2'):
            self.assertTrue((ROOT / 'ARCHIVE' / 'PREVIOUS-BASELINES' / version / 'README.md').is_file())
            self.assertTrue((ROOT / 'ARCHIVE' / 'PREVIOUS-BASELINES' / version / 'SKILL.md').is_file())

    def test_additive_policy_exists(self):
        text = (ROOT / 'docs' / 'ADDITIVE-STRUCTURE-POLICY.md').read_text(encoding='utf-8')
        self.assertIn('não remover', text.lower())

    def test_portal_has_reduced_motion_support(self):
        css = (ROOT / 'portal' / 'styles.css').read_text(encoding='utf-8')
        self.assertIn('prefers-reduced-motion', css)

    def test_skill_has_frontmatter(self):
        text = (ROOT / 'SKILL.md').read_text(encoding='utf-8')
        self.assertTrue(text.startswith('---\n'))
        self.assertIn('name: engineering-creative-ai', text)

    def test_skill_requires_direct_execution_for_user_tasks(self):
        text = (ROOT / 'SKILL.md').read_text(encoding='utf-8').lower()
        router = (ROOT / 'CORE' / 'ROUTER.md').read_text(encoding='utf-8').lower()
        self.assertIn('execução direta', text)
        self.assertIn('execução direta', router)
        self.assertNotIn('entregue um prompt completo para a ferramenta de desenvolvimento escolhida', text)

if __name__ == '__main__':
    unittest.main()
