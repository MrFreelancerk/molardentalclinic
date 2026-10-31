#!/usr/bin/env python3
"""Crop each icon SVG's viewBox to its artwork.

The supplied icons were exported on a large square canvas, so the drawing only
fills ~64% of the box and renders tiny next to text. This renders each file at
its native size, measures the ink bounds with ImageMagick, and rewrites the
opening <svg> tag with a viewBox around the artwork (plus a small margin).
"""

import pathlib
import re
import subprocess
import sys

SVG_DIR = pathlib.Path(__file__).resolve().parent.parent / "public" / "icons"
NATIVE = 1254  # the exporters' canvas size, 1:1 with viewBox units
MARGIN = 0.05  # fraction of the artwork size kept as breathing room


def ink_bbox(path: pathlib.Path) -> tuple[int, int, int, int]:
    png = pathlib.Path("/tmp") / f"bbox-{path.stem}.png"
    subprocess.run(
        ["rsvg-convert", "-w", str(NATIVE), "-h", str(NATIVE), "-b", "none",
         str(path), "-o", str(png)],
        check=True,
    )
    out = subprocess.run(
        ["magick", "identify", "-format", "%@", str(png)],
        check=True, capture_output=True, text=True,
    ).stdout.strip()
    match = re.fullmatch(r"(\d+)x(\d+)\+(\d+)\+(\d+)", out)
    if not match:
        raise SystemExit(f"{path.name}: unexpected geometry {out!r}")
    w, h, x, y = (int(v) for v in match.groups())
    return x, y, w, h


def rewrite(path: pathlib.Path, bbox: tuple[int, int, int, int]) -> None:
    x, y, w, h = bbox
    pad = round(max(w, h) * MARGIN)
    view_box = f"{x - pad} {y - pad} {w + pad * 2} {h + pad * 2}"

    text = path.read_text()
    start = text.index("<svg")
    end = text.index(">", start) + 1
    tag = (
        '<svg xmlns="http://www.w3.org/2000/svg" '
        f'viewBox="{view_box}" preserveAspectRatio="xMidYMid meet">'
    )
    path.write_text(text[:start] + tag + text[end:])


def main() -> int:
    for path in sorted(SVG_DIR.glob("*.svg")):
        bbox = ink_bbox(path)
        rewrite(path, bbox)
        print(f"{path.name:28} -> viewBox from {bbox}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
