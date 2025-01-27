import { useState, useEffect } from 'react';
import axiosInstance from '../lib/axiosInstance';
import { toast } from 'react-toastify';

const ShowContent = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get(`/media/list?page=${page}`);
        setVideos(response.data.videos || []); // Assuming API returns { videos: [...] }
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Failed to load videos.');
        toast.error('Failed to load videos.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [page]);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-50">
        <p className="text-center text-gray-700">Loading videos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-50">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  if (!videos.length) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex justify-center items-center">
        <p className="text-center text-gray-700">No videos available.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen max-w-5xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Uploaded Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="p-4 border rounded-lg shadow">
            {video.displayImage ? (
              <img
                src={`data:image/jpeg;base64,${video.displayImage}`}
                alt={video.title}
                className="w-full h-48 object-cover rounded"
              />
            ) : (
              <div className="w-full h-48 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-500 text-sm">No Thumbnail</span>
              </div>
            )}
            <h2 className="text-lg font-semibold text-gray-800 mt-4">{video.title}</h2>
            <p className="text-sm text-gray-600">{video.description}</p>
            <a
              href={`/media/stream/${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm mt-2 block"
            >
              Watch Video
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-200 rounded ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShowContent;
