import { EmailIcon, GitHubIcon, LinkedInIcon } from "../icons";
import Button from "@mui/material/Button";

const MY_GITHUB_URL = "https://github.com/omercotkd";
const MY_LINKEDIN_URL = "https://linkedin.com/in/<fill later>";
const MY_EMAIL_URL = "mailto:omercotkd+mywebsite@gmail.com";

// TODO: add shadow and hover effects to buttons

export const GitHubButton = () => {
  return (
    <Button
      variant="contained"
      startIcon={
        <GitHubIcon
          style={{
            width: "16px",
            height: "16px",
          }}
        />
      }
      href={MY_GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </Button>
  );
};

export const LinkedInButton = () => {
  return (
    <Button
      variant="outlined"
      startIcon={
        <LinkedInIcon
          style={{
            width: "16px",
            height: "16px",
          }}
        />
      }
      href={MY_LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: "text.primary",
      }}
    >
      LinkedIn
    </Button>
  );
};

export const EmailButton = () => {
  return (
    <Button
      variant="outlined"
      startIcon={
        <EmailIcon
          style={{
            width: "16px",
            height: "16px",
          }}
        />
      }
      href={MY_EMAIL_URL}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: "text.primary",
      }}
    >
      Email
    </Button>
  );
};
