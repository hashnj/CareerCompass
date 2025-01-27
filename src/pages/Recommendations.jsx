import { useState, useEffect } from "react";
import axiosInstance from "../lib/axiosInstance"; // import axiosInstance

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]); // Ensure it's an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axiosInstance.get("/jobs/recommendations"); // Using axiosInstance
        setRecommendations(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) return <p className="text-center mt-8">Loading recommendations...</p>;

  return (
    <div className="w-full text-text mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Job Recommendations</h1>
      {recommendations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map((job) => (
            <div
              key={job._id}
              className="bg-background shadow-lg rounded-lg p-4 border border-gray-200"
            >
              <h2 className="text-xl font-bold">{job.jobName}</h2>
              <p className="text-sm text-primary/70">{job.companyName}</p>
              <p className="text-sm text-primary/60">{job.location}</p>
              <p className="mt-2">
                <strong>Match Rate:</strong> {job.matchRate}%
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No recommendations available.</p>
      )}
    </div>
  );
};

export default Recommendations;
