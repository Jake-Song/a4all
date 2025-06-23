import Link from 'next/link';
import MermaidChart from './components/MermaidChart';

export default function Home() {
  return (
    <>
     
      <div className="p-4">
        <h1 className="text-center text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-4 mt-12 mb-4">참여하기</h1>
        <p>
          ✍️ 해당 안건에 대한 자신의 의견을 작성해 주세요.
        </p>
        <p>
          👍 찬성 혹은 반대 하고 싶은 의견이 있으면 투표해 주세요.
        </p>
        <p>
          📊 7명이상 투표하면 시각화된 데이터를 확인할 수 있습니다. 
        </p>
      </div>
      <div className="w-full">
        <MermaidChart chart={`
            flowchart LR
                A[시작] --> B[✍️ 의견 작성]
                B --> C[👍 다른 의견에 투표]
                C --> D{7명 이상 투표?}
                D -->|예| E[📊 시각화된 데이터 확인]
                D -->|아니오| C
                style A fill:#303030,stroke:#023dbf,stroke-width:2px,color:#fff
                style B fill:#303030,stroke:#023dbf,stroke-width:2px,color:#fff
                style C fill:#303030,stroke:#023dbf,stroke-width:2px,color:#fff
                style D fill:#303030,stroke:#023dbf,stroke-width:2px,color:#fff
                style E fill:#303030,stroke:#023dbf,stroke-width:2px,color:#fff
        `} />
      </div>
     
      <div className="p-4">
        <h1 className="text-center text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">어떻게 동작하나요?</h1>
        <p>
          1. Pol.is 서비스를 통해 안건을 생성합니다. 
        </p>
        <p>
          2. ML 알고리즘을 이용하여 서로 다른 의견을 가진 그룹을 분류합니다.
        </p>
        <p>
          3. 각 그룹의 의견을 모아 시각화합니다.
        </p>
        <p>
          4. 서로 다른 관점과 의견을 가진 그룹들 간에 합의점을 찾습니다.
        </p>
        <p>
           5. Pol.is 플랫폼 알아보기{" "}
           <Link href="https://compdemocracy.org/knowledge-base/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              (https://compdemocracy.org/knowledge-base/)
           </Link>
        </p>
      </div>
      <div className="w-full">
        <MermaidChart chart={`
          flowchart LR
              A[안건 생성] --> B[의견 투표]
              B --> C[의견 그룹 분류]
              C --> D[합의 의견 도출]
              D --> E[결과 공유]
              style A fill:#303030,stroke:#023dbf,stroke-width:2px,color:#fff
              style B fill:#303030,stroke:#023dbf,stroke-width:2px,color:#fff
              style C fill:#303030,stroke:#023dbf,stroke-width:2px,color:#fff
              style D fill:#303030,stroke:#023dbf,stroke-width:2px,color:#fff
              style E fill:#303030,stroke:#023dbf,stroke-width:2px,color:#fff
        `} />
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 w-[90%] max-w-3xl mx-auto my-8 mt-12 justify-center items-center">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col hover:shadow-lg dark:hover:shadow-gray-800/50 transition-shadow duration-300 w-full md:w-96">
          <h3 className="text-xl font-semibold mb-2 text-center">민주주의 확산</h3>
          <p className="mb-4 text-center">민주주의 확산의 구체적인 실행 방안은 무엇일까?</p>
          <div className="flex-grow flex items-center justify-center">
            <Link 
              href="/democracy" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center w-full"
            >
              토론 참여하기
            </Link>
          </div>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col hover:shadow-lg dark:hover:shadow-gray-800/50 transition-shadow duration-300 w-full md:w-96">
          <h3 className="text-xl font-semibold mb-2 text-center">정치 개혁</h3>
          <p className="mb-4 text-center">정치 개혁의 구체적인 실행 방안은 무엇일까?</p>
          <div className="flex-grow flex items-center justify-center">
            <Link 
              href="/policy" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-center w-full"
            >
              토론 참여하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
