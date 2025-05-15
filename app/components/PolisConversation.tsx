'use client'; 

import { useEffect } from 'react';

export default function PolisConversation() {
  useEffect(() => {
    // Load Polis script
    const script = document.createElement('script');
    script.src = 'https://pol.is/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="polis"
      data-page_id="PAGE_ID"
      data-conversation_id="7mfvbyhp6b"
      data-lang="ko-KR"
      style={{
        minHeight: '300px',
        width: '60%',
      }}
    />
  );
}