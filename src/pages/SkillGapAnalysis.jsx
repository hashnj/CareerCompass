import { useEffect, useState } from "react";
import axiosInstance from "../lib/axiosInstance"; // import axiosInstance
import { Loader2 } from "lucide-react";
import ResumeUpload from "./ResumeUpload";
import Recommendations from "./Recommendations";

const SkillGapAnalysis = () => {
  const [skillGaps, setSkillGaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkillGaps = async () => {
      try {
        const response = await axiosInstance.get("/jobs/skill-gap"); // Using axiosInstance
        setSkillGaps(Array.isArray(response.data) ? response.data : []); // Ensure skillGaps is always an array
        setLoading(false);
      } catch (err) {
        console.error(err);
        setSkillGaps([]);
        setLoading(false);
      }
    };

    fetchSkillGaps();
  }, []);

  if (loading) return <p className="text-center mt-8">Loading skill gaps...</p>;

  return (
    <div className="min-h-screen bg-backgrounds text-text mx-auto p-4">
      <h1 className="text-3xl text-primary font-bold mb-4">Skill Gap Analysis</h1>
      {skillGaps.length > 0 ? (
        <div>
          {skillGaps.map((gap, index) => (
            <div
              key={index}
              className="bg-background shadow-lg rounded-lg p-4 border border-gray-200 mb-4"
            >
              <h2 className="text-xl font-bold">{gap.job}</h2>
              <p>
                <strong>Missing Skills:</strong> {gap.missingSkills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center min-h-96 items-center text-text ">
          <Loader2 className="m-2 animate-spin text-text" />
          Have you entered your Resume for analysis yet?
        </div>
      )}
      <ResumeUpload />
      <Recommendations />
    </div>
  );
};

export default SkillGapAnalysis;
