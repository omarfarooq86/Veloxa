#!/bin/sh
# Vercel build entrypoint.
#
# The prerender (postbuild) needs a working headless Chromium, which requires
# system libraries (libnss3/libnspr4 and friends) that Vercel's build
# container does not ship. The container also has no apt-get, so we detect
# whichever package manager IS available and install the Chromium deps with
# it before building. Diagnostics are printed either way so a future
# container change is easy to diagnose from the build log.
set -e

echo "=== build container diagnostics ==="
head -5 /etc/os-release 2>/dev/null || echo "(no /etc/os-release)"
for c in apt-get dnf yum microdnf apk zypper; do
  if command -v "$c" >/dev/null 2>&1; then echo "package manager found: $c"; fi
done

# Dependency names for dnf/yum (Amazon Linux) and apt (Debian/Ubuntu) families.
PKGS_RPM="nss nspr atk at-spi2-atk cups-libs libdrm libXcomposite libXdamage libXrandr gtk3 pango alsa-lib libX11 libxcb libXScrnSaver libXext libXrender libXtst mesa-libgbm"
PKGS_APT="libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libasound2 libpango-1.0-0 libcairo2"

install_deps() {
  if command -v dnf >/dev/null 2>&1; then
    dnf install -y $PKGS_RPM || echo "(dnf install failed — continuing to build)"
  elif command -v microdnf >/dev/null 2>&1; then
    microdnf install -y $PKGS_RPM || echo "(microdnf install failed — continuing to build)"
  elif command -v yum >/dev/null 2>&1; then
    yum install -y $PKGS_RPM || echo "(yum install failed — continuing to build)"
  elif command -v apt-get >/dev/null 2>&1; then
    apt-get update -y && apt-get install -y $PKGS_APT || echo "(apt install failed — continuing to build)"
  else
    echo "NO PACKAGE MANAGER FOUND — attempting build without system deps"
  fi
}

install_deps

npx playwright install chromium
npm run build
