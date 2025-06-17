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
    const embedUrl = process.env.EMBED_URL;
    if (!embedUrl) {
      throw new Error('EMBED_URL environment variable is not defined');
    }
    script.src = embedUrl;
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
      data-ui_lang="ko-KR"
      data-bg_white="false"
      style={{
        minHeight: '400px',
        width: '100%',
      }}
    />
  );
}