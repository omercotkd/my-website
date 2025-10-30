import { useEffect, useState } from "react";
import { useI18nContext } from "@/i18n/i18n-react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: navBarTranslations.about(), href: "#about" },
    { label: navBarTranslations.skills(), href: "#skills" },
    { label: navBarTranslations.experience(), href: "#experience" },
    { label: navBarTranslations.certificates(), href: "#certificates" },
    { label: navBarTranslations.contact(), href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {};

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
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="text-primary transition-colors hover:text-accent"
          >
            <span className="font-mono">{"<OC />"}</span>
          </a>
          <Box
            component="div"
            display={{ md: "flex", xs: "none" }}
            alignItems="center"
            gap={"2rem"}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
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
              {language === "en" ? "HE" : "EN"}
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          </button>
        </Box>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            {/* <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2 w-full justify-start"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'עברית' : 'English'}
            </Button> */}
          </div>
        )}
      </Container>
    </Box>
  );
};
