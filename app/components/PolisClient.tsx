
interface PolisClientProps {
  conversationId: string;
}

export default function PolisClient({
  conversationId,
}: PolisClientProps) {

  return (
    <iframe
      src={`/${conversationId}?ui_lang=ko-KR`}
      style={{
        width: '100%',
        height: '100vh',
        border: 'none'
      }}
      title="Polis Conversation"
    />
  );
}