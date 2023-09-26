import React, { useState } from "react";
import "./ProjectModal.css";

interface ProjectModalProps {
  closeModal: () => void;
}

function ProjectModal({ closeModal }: ProjectModalProps) {
  const [projectName, setProjectName] = useState("");
  const [projectThumbnail, setProjectThumbnail] = useState("");

  const handleCreateProject = () => {
    // Implement logic to create a new project with projectName and projectThumbnail
    // You can use state management or API calls here
    const newProject = {
      title: projectName,
      thumbnail_link: projectThumbnail,
      // Other properties as needed
    };
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>New Project</h2>
          <button className="close-button" onClick={closeModal}>
            +
          </button>
        </div>
        <label>Thumbnail</label>
        <input
          type="text"
          value={projectThumbnail}
          onChange={(e) => setProjectThumbnail(e.target.value)}
        />
        <label>Project name</label>
        <input
          type="text"
          value={projectName}
          placeholder="Input Text Here"
          onChange={(e) => setProjectName(e.target.value)}
        />
        <label>Team</label>
        <input
          type="text"
          value={projectName}
          placeholder="Superboard"
          onChange={(e) => setProjectName(e.target.value)}
        />
        <label>Privacy</label>
        <input
          type="text"
          value={projectName}
          placeholder="Public to team"
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button onClick={handleCreateProject}>Create Project</button>
      </div>
    </div>
  );
}

export default ProjectModal;
