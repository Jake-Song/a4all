import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReactMarkdown from 'react-markdown'

export default function BlogPage() {
  const content = `
![LLM의 보완](https://ufdietbgvaxakrdftrol.supabase.co/storage/v1/object/public/image//LLM_engine_Human_steering_wheel.png)
저는 평소에 LLM(대규모 언어 모델)을 자주 사용하는 편입니다. 주로 모르는 분야에 대해 알고 싶을 때 사용합니다. 예전에는 인터넷 검색으로 찾아 보거나 책을 읽어야만 했지만 지금은 굉장히 빠르고 편리하게 알고자 하는 것을 이해할 수 있습니다. 코딩할 때도 주로 사용합니다.  

지금까지 제가 생각하는 LLM의 장점은 다음과 같습니다.
 1. 굉장히 넓은 분야를 다룰 수 있다. 
 2. 기존의 지식 탐색이나 인사이트를 얻는 방법에 비해 굉장히 빠르다. 
  
  하지만 사용할수록 LLM이 완벽하지 않다는 점을 느끼게 됩니다. 제가 생각하는 LLM의 단점은 다음과 같습니다.
1. 가끔은 엉뚱한 대답을 내놓기도 하고, 때로는 사실이 아닌 내용을 전달한다.
2.  깊은 수준의 응답이기 보다는  얕은 수준으로 응답하는 경우가 많습니다.

  최근에는 딥 리서치 기능이 나오면서 보다 깊은 수준의 응답을 받을 수 있습니다. LLM의 발전 속도는 놀랍고 더 놀라운 LLM 모델이 나올 거라 생각합니다.

저는 LLM이 인간을 대체할 수 있을 거라 생각하진 않습니다. 인간과 LLM은 서로 보완하는 관계로 발전해 나갈 것이라 생각합니다.  

이 글의 목적은 이러한 LLM을 최대한 활용할 수 있는 방법을 찾아 보기 위해서 입니다. 

### 1. 팩트체크

최근 정치 상황에서 보듯 양극화가 심화되어 가고 있습니다. 정치 뿐 아니라 하나의 사건에 대해 전혀 상반된 관점이 존재합니다. 다양한 관점이 존재한다는 것은 나쁜 것은 아닙니다. 다양한 관점을 가진 사람들이 서로 소통하고 새로운 결론을 도출할 수 있다면 건강한 사회라고 할 수 있을 것입니다. 소통을 시작하려면 서로 동의할 수 있는 사실 또는 정보가 있어야 합니다. 팩트체크를 통해서 토론을 위한 기반 정보를 만들어 내는 것이 중요한 시대입니다. 
 
  만약 정반대의 성향을 가진 집단 모두가 동의할 수 있는 정보를 제공한다는 것은 불가능에 가깝습니다. 하지만 소수라도 동의할 수 있는 정보가 있다면 소통을 시작할 수 있을 것입니다.

 
### 2. 팩트체크에 LLM을 활용할 수 있을 까요?
기존 팩트체크는 시간과 비용이 많이 드는 작업이었습니다. 해당 분야에 전문적인 지식을 가진 기자가 심층 취재를 하여 근거와 합리성에 기반한 기사를 만들었습니다. LLM을 활용한다면 시간과 비용을 획기적으로 줄일 수 있습니다.  

현재 비교적 손쉽게 고품질의 LLM 서비스에 접근할 수 있습니다. 구글의 Gemini나 xAI의 Grok은 현재 무료로 사용할 수 있고, ChatGPT나 Claude와 같은 최신 모델 역시 투자 비용에 비하면 상당히 저렴한 가격으로 제공되고 있습니다.

  LLM은 완벽하지 않기 때문에 (누구나 알고 있지 않나요?) LLM이 생성한 답변은 때때로 검증이 필요합니다. 

### 3. 투표를 통해 LLM의 불완전함을 보완하기

  저는 이러한 LLM의 한계를 사람들의 집단 지성을 통해 보완할 수 있다고 생각합니다. 사용자가 직접 참여해 LLM의 답변이 올바른 지에 대한 의견을 제시하는 방식으로, 단순한 다수결 투표 시스템을 적용했습니다. 

규칙은 
  1. 총 투표 수가 일정 투표 수를 넘을 것. 일정 투표 수는 참여자 규모에 따라 정해질 것입니다. 처음 시작은 10 
    표입니다. 
  2. "도움이 됨", "어느 정도 도움이 됨"의 투표 합계가 70% 이상이 되어야 합니다. 

### 결론
  베타 버전 단계로서 운영을 통해 상황에 따라 구체적인 방법을 조정할 것입니다.

  예를 들어 참여자가 많아 진다면 [트위터(X)의 Community Notes](https://communitynotes.x.com/guide/en/welcome) 알고리즘을 적용해 볼 수 있을 것입니다. 이 알고리즘은 사용자의 성향을 고려해서 문제를 해결하려고 합니다. 사용자의 참여를 통해 머신 러닝 알고리즘으로 성향(진보, 중도, 보수)을 파악하고, 이에 따라 같은 정보라도 세 가지 다른 관점에서 팩트 체크 결과를 제공할 수도 있을 것입니다.
`;

  return (
    <article className="mx-auto px-4 py-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown
            components={{
                // Override default heading components to ensure proper styling
                h1: ({node, ...props}) => <h1 className="text-4xl font-bold mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-3xl font-bold mb-3" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-2xl font-bold mb-2" {...props} />,
                h4: ({node, ...props}) => <h4 className="text-xl font-bold mb-2" {...props} />,
                // Override list components
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                // @ts-expect-error - ReactMarkdown component types are complex
                code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                    <SyntaxHighlighter
                    // @ts-expect-error - SyntaxHighlighter style type is complex
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                    >
                    {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                ) : (
                    <code className={className} {...props}>
                    {children}
                    </code>
                )
                }
            }}
            >
            {content}
            </ReactMarkdown>
        </div>
    </article>
  );
}
