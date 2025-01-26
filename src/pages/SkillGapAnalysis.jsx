import { useEffect, useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

const SkillGapAnalysis = () => {
  const [skillGaps, setSkillGaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkillGaps = async () => {
      try {
        const response = await axios.get("/jobs/skill-gap");
        setSkillGaps(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchSkillGaps();
  }, []);

  if (loading) return <p className="text-center mt-8">Loading skill gaps...</p>;

  return (
    <div className="container min-h-screen mx-auto p-4">
      <h1 className="text-3xl text-primary font-bold mb-4">Skill Gap Analysis</h1>
      {skillGaps > 0 ? (
        <div>
          {skillGaps>0 && skillGaps?.map((gap, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 mb-4"
            >
              <h2 className="text-xl font-bold">{gap.job}</h2>
              <p>
                <strong>Missing Skills:</strong> {gap.missingSkills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center"><Loader2 className="spin text-text"/></div>
      )}
    </div>
  );
};

export default SkillGapAnalysis;
