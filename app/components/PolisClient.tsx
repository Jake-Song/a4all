'use client';

import { useState, useEffect } from 'react';

interface Comment {
  txt: string;
  pid: string;
  tid: string;
  created: string;
  author: string;
}

interface Vote {
  pid: string;
  tid: string;
  vote: number;
}

interface PolisClientProps {
  conversationId: string;
  siteId?: string;
  pageId?: string;
}

export default function PolisClient({
  conversationId,
  siteId,
  pageId,
}: PolisClientProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [votes, setVotes] = useState<Vote[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = 'http://localhost:5000/api/v3';

  useEffect(() => {
    initializeParticipant();
  }, [conversationId]);

  const initializeParticipant = async () => {
    try {
      setLoading(true);
      // First, try to initialize with cookie auth
      const response = await fetch(
        `${API_BASE_URL}/participationInit?conversation_id=${conversationId}&pid=mypid&lang=en`,
        {
          credentials: 'include', // This is crucial for cookie-based auth
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to initialize participant: ${response.status} ${errorText}`);
      } else {
        console.log('Participant initialized successfully');
      }

      // After successful initialization, fetch comments
      await fetchComments();
    } catch (err) {
      console.error('Error in initializeParticipant:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      setLoading(true);
      const url = new URL(`${API_BASE_URL}/comments`);
      url.searchParams.append('conversation_id', conversationId);
      
      console.log('Fetching comments from:', url.toString());
      
      const response = await fetch(url.toString(), {
        method: 'GET',
        credentials: 'include', // Include cookies in the request
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response);
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Failed to fetch comments: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      console.log('Received data:', data);
      setComments(data);
    } catch (err) {
      console.error('Error in fetchComments:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/comments`, {
        method: 'POST',
        credentials: 'include', // Include cookies in the request
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversation_id: conversationId,
          txt: newComment,
          site_id: siteId,
          page_id: pageId,
        }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to submit comment: ${response.status} ${errorText}`);
      }
      await fetchComments();
      setNewComment('');
    } catch (err) {
      console.error('Error in submitComment:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const submitVote = async (pid: string, tid: string, vote: number) => {
    try {
      const response = await fetch(`${API_BASE_URL}/votes`, {
        method: 'POST',
        credentials: 'include', // Include cookies in the request
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversation_id: conversationId,
          pid: pid,
          tid: tid,
          vote: vote,
        }),
        // Vote data structure
        // VoteData {
        //     tid: number;
        //     conversation_id: string;
        //     vote: -1 | 0 | 1;
        //     pid?: string;
        //     xid?: string;
        //     high_priority?: boolean;
        //     lang?: string;
        //  }
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to submit vote: ${response.status} ${errorText}`);
      }
      await fetchComments();
    } catch (err) {
      console.error('Error in submitVote:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.tid} className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-800">{comment.txt}</p>
              <div className="mt-2 flex items-center space-x-4">
                <button
                  onClick={() => submitVote(comment.pid, comment.tid, 1)}
                  className="text-green-500 hover:text-green-700"
                >
                  Agree
                </button>
                <button
                  onClick={() => submitVote(comment.pid, comment.tid, 0)}
                  className="text-red-500 hover:text-red-700"
                >
                  Neutral
                </button>
                <button
                  onClick={() => submitVote(comment.pid, comment.tid, -1)}
                  className="text-red-500 hover:text-red-700"
                >
                  Disagree
                </button>
                </div>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={submitComment} className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Add Your Comment</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded-lg"
          rows={4}
          placeholder="Share your thoughts..."
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
} 