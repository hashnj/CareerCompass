import { useState, useEffect } from 'react';
import axiosInstance from '../../lib/axiosInstance';
import { toast } from 'react-toastify';

const ShowContent = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get('/media/list'); // Backend endpoint to get videos
        setVideos(response.data.videos); // Assuming API returns { videos: [...] }
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Failed to load videos.');
        toast.error('Failed to load videos.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (isLoading) {
    return <p className="text-center text-gray-700">Loading videos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!videos.length) {
    return <p className="text-center text-gray-700">No videos available.</p>;
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Uploaded Videos</h1>
      <ul className="space-y-4">
        {videos.map((video) => (
          <li key={video.id} className="flex items-start gap-4 p-4 border rounded-lg shadow-sm">
            {/* Thumbnail */}
            {video.displayImage ? (
              <img
                src={`data:image/jpeg;base64,${video.displayImage}`}
                alt={video.title}
                className="w-24 h-24 object-cover rounded"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-500 text-sm">No Thumbnail</span>
              </div>
            )}

            {/* Video Details */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">{video.title}</h2>
              <p className="text-sm text-gray-600">{video.description}</p>
              <a
                href={`data:video/mp4;base64,${video.videoData}`}
                download={`${video.title}.mp4`}
                className="text-blue-500 hover:underline text-sm"
              >
                Download Video
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowContent;
