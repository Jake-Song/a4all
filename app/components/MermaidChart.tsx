'use client';

import { useEffect } from 'react';
import mermaid from 'mermaid';
import { useTheme } from '../contexts/ThemeContext';

interface MermaidChartProps {
  chart: string;
}

export default function MermaidChart({ chart }: MermaidChartProps) {
  const { resolvedTheme } = useTheme();
  console.log("resolvedTheme", resolvedTheme);
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: resolvedTheme === 'dark' ? 'dark' : 'default',
      securityLevel: 'loose',
    });
    mermaid.contentLoaded();
  }, [chart, resolvedTheme]);

  return (
    <div className="mermaid w-full max-w-[1200px] mx-auto my-8 flex justify-center">
      {chart}
    </div>
  );
} 