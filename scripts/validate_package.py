#!/usr/bin/env python3
"""Validate the additive package manifest and essential repository files."""
from __future__ import annotations
import hashlib, json, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / 'PACKAGE-MANIFEST.json'
REQUIRED = ['README.md','SKILL.md','CHANGELOG.md','LICENSE','CORE/ROUTER.md','docs/ADDITIVE-STRUCTURE-POLICY.md','portal/index.html','tests/test_package.py']

def fail(message: str) -> None:
    print(f'ERROR: {message}', file=sys.stderr)
    raise SystemExit(1)

def main() -> None:
    if not MANIFEST.is_file(): fail('PACKAGE-MANIFEST.json is missing')
    data = json.loads(MANIFEST.read_text(encoding='utf-8'))
    if data.get('name') != 'Engineering Creative AI': fail('unexpected package name')
    if data.get('version') != '3.0.0': fail('manifest version must be 3.0.0 for this release')
    for rel in REQUIRED:
        if not (ROOT / rel).is_file(): fail(f'required file missing: {rel}')
    declared = {entry['path']: entry for entry in data.get('files', [])}
    actual = {p.relative_to(ROOT).as_posix() for p in ROOT.rglob('*') if p.is_file() and p != MANIFEST and '.git' not in p.parts and '__pycache__' not in p.parts}
    missing = sorted(actual - set(declared))
    stale = sorted(set(declared) - actual)
    if missing: fail('files missing from manifest: ' + ', '.join(missing[:20]))
    if stale: fail('manifest paths missing from disk: ' + ', '.join(stale[:20]))
    for rel, entry in declared.items():
        content = (ROOT / rel).read_bytes()
        digest = hashlib.sha256(content).hexdigest()
        if entry.get('sha256') != digest: fail(f'hash mismatch: {rel}')
        if entry.get('bytes') != len(content): fail(f'byte count mismatch: {rel}')
    if data.get('file_count') != len(actual) + 1: fail('file_count mismatch (includes manifest itself)')
    print(f"OK: {data['name']} {data['version']} — {len(actual)+1} files; hashes and required paths valid.")

if __name__ == '__main__': main()
