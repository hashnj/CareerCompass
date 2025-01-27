/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axiosInstance from "../lib/axiosInstance"; // import axiosInstance


const JobCard = ({ job }) => {
  return (
    <div className="bg-background shadow-lg rounded-lg p-4 border border-gray-200">
      <h2 className="text-xl font-bold">{job.jobName}</h2>
      <p className="text-sm text-primary/70">{job.companyName}</p>
      <p className="text-sm text-primary/60">{job.location}</p>
      <ul className="mt-2 text-sm">
        <li>
          <strong>Role:</strong> {job.jobRole}
        </li>
        <li>
          <strong>Skills:</strong> {job.requiredSkills.join(", ")}
        </li>
      </ul>
      <p className="mt-4 text-text/80 font-thin text-sm">{job.description}</p>
    </div>
  );
};

const Jobs = () => {
  const [jobs, setJobs] = useState([]);  // Default state as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axiosInstance.get("/jobs"); // Using axiosInstance
        setJobs(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch jobs.",err);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p className="text-center mt-8">Loading jobs...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <div className="w-full bg-backgrounds min-h-screen  text-text  mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 underline ">Available Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job._id} job={job} />)
        ) : (
          <p>No jobs available.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;

