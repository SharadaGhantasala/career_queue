import React, { useState } from "react";
import { Button, Input, Box } from "@chakra-ui/react";

const ResumeUpload = ({ onResumeUpload }) => {
    const [resumeFile, setResumeFile] = useState(null);

    const handleFileChange = (event) => {
        setResumeFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (resumeFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const resumeText = e.target.result;
                onResumeUpload(resumeText); // Pass the extracted resume text to the parent component
            };
            reader.readAsText(resumeFile);
        }
    };

    return (
        <Box m={4}>
            <Input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
            <Button mt={2} colorScheme="teal" onClick={handleUpload}>
                Upload Resume
            </Button>
        </Box>
    );
};

export default ResumeUpload;
