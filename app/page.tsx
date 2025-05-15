import PolisConversation from "@/app/components/PolisConversation";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '함께 묻고 함께 답하기',
  description: '함께 문제 해결하기',
}

export default function Home() {
  return (    
    <div className="justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="w-full border-b border-gray-100/30 mt-8 pb-2 text-center">
        <h1 className="text-2xl font-bold">함께 묻고 함께 답하기</h1>
        <p className="text-gray-500">
          함께 문제 해결하기
        </p>
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full mt-20">
        <PolisConversation />
      </main>
    </div>
    
  );
}
