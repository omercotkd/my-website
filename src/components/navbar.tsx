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
    return () => { window.removeEventListener("scroll", handleScroll); };
  }, []);

  const navItems = [
    { label: navBarTranslations.about(), href: "#about", id: "about" },
    { label: navBarTranslations.skills(), href: "#skills", id: "skills" },
    { label: navBarTranslations.experience(), href: "#experience", id: "experience" },
    { label: navBarTranslations.certificates(), href: "#certificates", id: "certificates" },
    { label: navBarTranslations.contact(), href: "#contact", id: "contact" },
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
        >
          {item.label}
          <Typography
            bottom={0}
            left={0}
            width={0}
            height="2px"
            component="span"
            position="absolute"
          />
        </Typography>
      ))}
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
      //     .duration-300 {
      //   --tw-duration: .3s;
      //   transition-duration: .3s;
      // }
      className={`transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <Container>
        <Box
          component="div"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          height={64}
        >
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
            onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); }}
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
            paddingTop={"1rem"}
          >
            {NavStack}
          </Box>
        )}
      </Container>
    </Box>
  );
};
