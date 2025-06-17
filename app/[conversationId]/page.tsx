export default function ConversationPage({
  params,
}: {
  params: { conversationId: string };
}) {
  const uiLang = 'ko-KR';

  return (
    <div className="flex justify-center w-[60%] mx-auto border border-gray-100/30 rounded-lg p-4 mt-24">
      <iframe
        src={`/${params.conversationId}?ui_lang=${uiLang}`}
        style={{
          width: '100%',
          height: '100vh',
          border: 'none'
        }}
        title="Polis Conversation"
      />
    </div>
  );
} 