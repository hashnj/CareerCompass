import { useState, useEffect } from "react";
import axiosInstance from "../lib/axiosInstance"; // import axiosInstance

const ResumeUpload = () => {
  const [resumes, setResumes] = useState([]);  
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const fetchResumes = async () => {
    try {
      const response = await axiosInstance.get("/resumes"); // Using axiosInstance
      setResumes(Array.isArray(response.data) ? response.data : []);
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
      await axiosInstance.post("/resumes/upload", formData, { // Using axiosInstance
        headers: { "Content-Type": "multipart/form-data" },
      });
      fetchResumes(); 
      setSelectedFile(null);
    } catch (err) {
      setError("Failed to upload resume.",err);
    }
  };

  return (
    <div className="mx-auto w-full text-text bg-background rounded-lg  p-4">
      <h1 className="text-3xl font-bold mb-4">Upload Your Resume to Get Analyzed</h1>
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
        {resumes.length > 0 ? (
          resumes.map((resume) => (
            <li
              key={resume._id}
              className="bg-backgrounds w-fit p-4 mb-2 rounded-lg shadow-md"
            >
              <p>
                <strong>File Name:</strong> {resume.fileName}
              </p>
              <p>
                <strong>Skills:</strong> {resume.skills.join(", ")}
              </p>
            </li>
          ))
        ) : (
          <p>No resumes uploaded yet.</p>
        )}
      </ul>
    </div>
  );
};

export default ResumeUpload;
