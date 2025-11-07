import { useEffect, useState } from "react";
import { useI18nContext } from "@/i18n/i18n-react";
import { type Locales } from "@/i18n/i18n-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GlobeIcon, XIcon, MenuIcon } from "@/components/icons";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const translation = useI18nContext();

  const language = translation.locale;

  const navBarTranslations = translation.LL.navbar;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: navBarTranslations.about(), href: "#about", id: "about" },
    { label: navBarTranslations.skills(), href: "#skills", id: "skills" },
    {
      label: navBarTranslations.certificates(),
      href: "#certificates",
      id: "certificates",
    },
    {
      label: navBarTranslations.experience(),
      href: "#experience",
      id: "experience",
    },
    { label: navBarTranslations.contact(), href: "#contact-info", id: "contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    const nextLanguage: Locales = language === "en" ? "he" : "en";

    translation.setLocale(nextLanguage);
  };

  const NavStack = (
    <>
      <Button
        variant="hover"
        color="primary"
        size="small"
        onClick={toggleLanguage}
        style={{
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <GlobeIcon
          style={{
            width: "1rem",
            height: "1rem",
          }}
        />
        {language.toUpperCase()}
      </Button>
      {navItems.map((item) => (
        <Typography
          component="a"
          key={item.id}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(item.href);
          }}
          position={"relative"}
          color="text.muted"
          fontSize="16px"
          className="transition-all"
          sx={{
            "&:hover": {
              color: "primary.main",
              "& span": {
                width: "100%",
              },
            },
          }}
        >
          {item.label}
          <Box
            component="span"
            bottom={0}
            left={0}
            position="absolute"
            display="inline-block"
            borderRadius={2}
            height={2}
            bgcolor={"primary.main"}
            width={0}
            sx={{
              transition: "width 0.15s ease-out ",
            }}
          />
        </Typography>
      ))}
    </>
  );

  return (
    <Box
      component="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={50}
      width="100%"
      bgcolor={isScrolled ? "background.default" : "background.transparent"}
    >
      <Container>
        <Box
          component="div"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          height={64}
        >
          <Box
            component="div"
            display={{ md: "flex", xs: "none" }}
            alignItems="center"
            gap={"2rem"}
          >
            {NavStack}
          </Box>
          {/* Mobile Menu Button */}
          <Button
            variant="text"
            sx={{
              color: "grey.100",
              display: { md: "none" },
            }}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XIcon
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            ) : (
              <MenuIcon
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            )}
          </Button>
          {/* Logo */}
          <Typography
            component="a"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            fontSize="16px"
            color="primary"
            fontFamily={"monospace"}
            className="light-primary-hover"
          >
            {"<OC />"}
          </Typography>
        </Box>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <Box
            component="div"
            display={{ md: "none", xs: "flex" }}
            flexDirection={"column"}
            gap={"1rem"}
            alignItems={"flex-start"}
            borderTop={"1px solid"}
            borderColor={"divider"}
            paddingY={"1rem"}
          >
            {NavStack}
          </Box>
        )}
      </Container>
    </Box>
  );
};
