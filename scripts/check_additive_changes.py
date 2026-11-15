#!/usr/bin/env python3
"""Fail if paths listed in a previous package manifest disappeared."""
import argparse, json, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--baseline', required=True, help='Path to a previous PACKAGE-MANIFEST.json')
    args = parser.parse_args()
    baseline_path = Path(args.baseline)
    if not baseline_path.is_absolute(): baseline_path = (ROOT / baseline_path).resolve()
    if not baseline_path.is_file():
        print(f'ERROR: baseline manifest not found: {baseline_path}', file=sys.stderr); return 2
    baseline = json.loads(baseline_path.read_text(encoding='utf-8'))
    current = json.loads((ROOT / 'PACKAGE-MANIFEST.json').read_text(encoding='utf-8'))
    old_paths = {item['path'] if isinstance(item, dict) else item for item in baseline.get('files', [])}
    new_paths = {item['path'] for item in current.get('files', [])}
    # The manifest itself is not listed in files; treat it as a stable root path.
    old_paths.add('PACKAGE-MANIFEST.json')
    new_paths.add('PACKAGE-MANIFEST.json')
    missing = sorted(old_paths - new_paths)
    if missing:
        print('ERROR: additive compatibility violation; removed paths: ' + ', '.join(missing), file=sys.stderr)
        return 1
    print(f'OK: preserved {len(old_paths)} paths from baseline {baseline.get("version", "unknown")}')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
