'use client'; 

import { useEffect } from 'react';

interface PolisConversationProps {
  conversationId?: string;
}

export default function PolisConversation({
  conversationId
}: PolisConversationProps) {
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
      data-conversation_id={conversationId}
      data-lang="ko-KR"
      style={{
        minHeight: '400px',
        width: '100%',
      }}
    />
  );
}