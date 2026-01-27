"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";

const STORAGE_KEY = "article-font-size";
const DEFAULT_SIZE = 16;
const MIN_SIZE = 14;
const MAX_SIZE = 22;
const STEP = 2;

interface FontSizeControlProps {
  children: React.ReactNode;
}

export function FontSizeControl({ children }: FontSizeControlProps) {
  const [fontSize, setFontSize] = React.useState(DEFAULT_SIZE);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (parsed >= MIN_SIZE && parsed <= MAX_SIZE) {
        setFontSize(parsed);
      }
    }
    setMounted(true);
  }, []);

  const handleChange = (value: number[]) => {
    const newSize = value[0];
    setFontSize(newSize);
    localStorage.setItem(STORAGE_KEY, String(newSize));
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-muted">
        <span className="text-sm text-muted-foreground">A</span>
        <Slider
          value={[fontSize]}
          onValueChange={handleChange}
          min={MIN_SIZE}
          max={MAX_SIZE}
          step={STEP}
          className="w-32"
        />
        <span className="text-xl text-muted-foreground">A</span>
        {mounted && (
          <span
            className="text-muted-foreground ml-2"
            style={{ fontSize: `${fontSize}px` }}
          >
            {fontSize}px
          </span>
        )}
      </div>
      <div style={{ fontSize: `${fontSize}px` }}>{children}</div>
    </div>
  );
}
