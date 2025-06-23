import PolisClient from "@/app/components/PolisClient";

export default function TestPage() {
 
  return (
    <div className="flex justify-center w-[60%] mx-auto border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-24 bg-gray-50 dark:bg-gray-800">
      <PolisClient conversationId='93hsh7vtae' />
    </div>
  );
} 
