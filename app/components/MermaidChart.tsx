'use client';

import { useEffect } from 'react';
import mermaid from 'mermaid';

interface MermaidChartProps {
  chart: string;
}

export default function MermaidChart({ chart }: MermaidChartProps) {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
    });
    mermaid.contentLoaded();
  }, [chart]);

  return (
    <div className="mermaid w-full max-w-[1200px] mx-auto my-8 flex justify-center">
      {chart}
    </div>
  );
} 