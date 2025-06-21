import PolisClient from '../components/PolisClient';

export default function DiscussionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Join the Discussion</h1>
      <div className="rounded-lg shadow-lg dark:shadow-gray-800/50 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <PolisClient
          conversationId="93hsh7vtae"
        />
      </div>
    </div>
  );
} 