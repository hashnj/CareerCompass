import  { useEffect, useState } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/jobs");
        setJobs(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch jobs." , err);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p className="text-center mt-8">Loading jobs...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Available Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
          >
            <h2 className="text-xl font-bold">{job.jobName}</h2>
            <p className="text-sm text-gray-600">{job.companyName}</p>
            <p className="text-sm text-gray-600">{job.location}</p>
            <ul className="mt-2 text-sm">
              <li>
                <strong>Role:</strong> {job.jobRole}
              </li>
              <li>
                <strong>Skills:</strong> {job.requiredSkills.join(", ")}
              </li>
            </ul>
            <p className="mt-4 text-gray-700">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
