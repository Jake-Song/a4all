import PolisConversation from "@/app/components/PolisConversation";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '함께 묻고 함께 답하기',
  description: '함께 문제 해결하기',
}

export default function Home() {
  return (    
    <div className="justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="w-full border-b border-gray-100/30 mt-8 pb-2 text-left">
        <h1 className="text-2xl font-bold ml-4">함께 묻고 함께 답하기</h1>
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
        <div className="p-4">
          <h1 className="text-center text-2xl font-bold border-b border-gray-100/30 pb-4 mt-12 mb-4">참여하기</h1>
          <p className="text-gray-500">
            1. 해당 안건에 대한 자신의 의견을 작성해 주세요.
          </p>
          <p className="text-gray-500">
            2. 찬성 혹은 반대 하고 싶은 의견이 있으면 투표해 주세요.
          </p>
          <p className="text-gray-500">
            3. 7명이상 투표하면 시각화된 데이터를 확인할 수 있습니다. 
          </p>
        </div>
        <div className="p-4">
          <h1 className="text-center text-2xl font-bold border-b border-gray-100/30 pb-4 mb-4">어떻게 동작하나요?</h1>
          <p className="text-gray-500">
            1. Pol.is 서비스를 통해 안건을 생성합니다. 
          </p>
          <p className="text-gray-500">
            2. ML 알고리즘을 이용하여 서로 다른 의견을 가진 그룹을 분류합니다.
          </p>
          <p className="text-gray-500">
            3. 각 그룹의 의견을 모아 시각화합니다.
          </p>
          <p className="text-gray-500">
            4. 서로 다른 관점과 의견을 가진 그룹들 간에 합의점을 찾습니다.
          </p>
          <p className="text-gray-500">
             5. Pol.is 플랫폼 알아보기{" "}
             <a href="https://compdemocracy.org/knowledge-base/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                (https://compdemocracy.org/knowledge-base/)
             </a>
          </p>
        </div>
        <div className="flex justify-center w-[60%] mx-auto border border-gray-100/30 rounded-lg p-4">
          <PolisConversation />
        </div>
      </main>
      <footer className="w-full border-t border-gray-100/30 mt-8 py-4 text-center text-gray-500">
        <p>© 2025 함께 묻고 함께 답하기. All rights reserved.</p>
      </footer>
    </div>
    
  );
}
