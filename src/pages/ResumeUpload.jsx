import { useState, useEffect } from "react";
import axios from "axios";

const ResumeUpload = () => {
  const [resumes, setResumes] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const fetchResumes = async () => {
    try {
      const response = await axios.get("/resumes");
      setResumes(response.data);
    } catch (err) {
      setError("Failed to fetch resumes.",err);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("resume", selectedFile);

    try {
      await axios.post("/resumes/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      fetchResumes(); // Refresh resumes after upload
      setSelectedFile(null);
    } catch (err) {
      setError("Failed to upload resume.",err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Upload Your Resume</h1>
      <form onSubmit={handleUpload} className="mb-4">
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Upload
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}

      <h2 className="text-xl font-bold mt-8">Uploaded Resumes</h2>
      <ul className="mt-4">
        {resumes.map((resume) => (
          <li
            key={resume._id}
            className="bg-gray-100 p-4 mb-2 rounded-lg shadow-md"
          >
            <p>
              <strong>File Name:</strong> {resume.fileName}
            </p>
            <p>
              <strong>Skills:</strong> {resume.skills.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeUpload;
