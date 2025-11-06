import type React from "react";
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

const ContactIconButton = ({
  href,
  Icon,
}: {
  href: string;
  Icon: React.ElementType;
}) => {
  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        minWidth: "46px",
        minHeight: "46px",
        bgcolor: "glow.200",
        color: "text.primary",
        borderRadius: "25%",
        border: "1px solid",
        borderColor: "glow.50",
        ":hover" : {
          backgroundColor: "glow.100",
          boxShadow: "0 4px 8px var(--mui-palette-glow-50)",
          ".contact-icon": {
            transform: "scale(1.1)",
            transition: "transform 0.3s",
          }
        }
      }}
    >
      <Icon
        style={{
          width: "20px",
          height: "20px",
          color: "var(--mui-palette-primary-main)",
        }}
        className="contact-icon"
      />
    </Button>
  );
};

export const GitHubIconButton = () => {
  return <ContactIconButton href={MY_GITHUB_URL} Icon={GitHubIcon} />;
};

export const LinkedInIconButton = () => {
  return <ContactIconButton href={MY_LINKEDIN_URL} Icon={LinkedInIcon} />;
};

export const EmailIconButton = () => {
  return <ContactIconButton href={MY_EMAIL_URL} Icon={EmailIcon} />;
};
