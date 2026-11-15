#!/usr/bin/env python3
"""Regenerate PACKAGE-MANIFEST.json with sizes and SHA-256 hashes."""
import hashlib, json
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / 'PACKAGE-MANIFEST.json'
old = json.loads(MANIFEST.read_text(encoding='utf-8')) if MANIFEST.exists() else {}
files = []
for path in sorted(ROOT.rglob('*')):
    if path.is_file() and path != MANIFEST and '.git' not in path.parts and '__pycache__' not in path.parts:
        content = path.read_bytes()
        files.append({'path': path.relative_to(ROOT).as_posix(), 'bytes': len(content), 'sha256': hashlib.sha256(content).hexdigest()})
old.update({'file_count': len(files) + 1, 'files': files})
MANIFEST.write_text(json.dumps(old, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(f"Manifest updated: {len(files) + 1} files.")
