import  { useEffect, useState } from "react";
import axiosInstance from "../lib/axiosInstance";
import MentorCard from "../components/MentorCard";

const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axiosInstance.get("/auth/mentors");
        setMentors(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching mentors:", error);
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  if (loading) return <div>Loading mentors...</div>;

  return (
    <div className="bg-backgrounds min-h-screen py-4 px-6">
      <h1 className="text-3xl text-center font-bold text-primary mb-6">Meet Our Mentors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mentors.length > 0 ? (
      mentors.map((mentor) => (
        <MentorCard key={mentor._id} mentor={mentor} />
      ))
    ) : (
      <p>No mentors available</p>
    )}
  </div>
</div>
  );
};

export default Mentors;
