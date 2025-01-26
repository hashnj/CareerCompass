/* eslint-disable react/prop-types */

const ResumeCard = ({ resume }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
      <h2 className="text-xl font-bold">{resume.fileName}</h2>
      <p className="mt-2">
        <strong>Skills:</strong> {resume.skills.join(", ")}
      </p>
      <p className="text-sm text-gray-600">
        Uploaded: {new Date(resume.uploadDate).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ResumeCard;
