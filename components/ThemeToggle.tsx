'use client';

import { useEffect, useState } from 'react';

type Mode = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'shiun-theme';
const ORDER: Mode[] = ['system', 'light', 'dark'];
const LABEL: Record<Mode, string> = {
  system: 'auto',
  light: 'light',
  dark: 'dark',
};

function applyMode(mode: Mode) {
  if (typeof document === 'undefined') return;
  if (mode === 'system') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', mode);
  }
}

function readMode(): Mode {
  if (typeof window === 'undefined') return 'system';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
  return 'system';
}

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMode(readMode());
    setMounted(true);
  }, []);

  function cycle() {
    const next = ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length] ?? 'system';
    setMode(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
    applyMode(next);
  }

  return (
    <button
      type="button"
      onClick={cycle}
      className="theme-toggle"
      aria-label={`theme: ${LABEL[mode]} (click to cycle)`}
      title={`theme: ${LABEL[mode]}`}
    >
      {/* Match the inline-script default ('auto') until React hydrates,
          to avoid a hydration-mismatch warning when the user has a stored
          override. */}
      {mounted ? LABEL[mode] : 'auto'}
    </button>
  );
}
