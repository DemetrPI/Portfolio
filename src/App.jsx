import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HoverCard,
  HStack,
  IconButton,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  Theme,
} from "@chakra-ui/react";
import {
  Activity,
  Briefcase,
  CalendarDays,
  Cloud,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  RadioTower,
  ShieldCheck,
  Sun,
  TerminalSquare,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import resumePdf from "../assets/curriculum.pdf";
import profilePhoto from "../assets/images/me.png";
import { languageThemes, languages, socialLinks } from "./data/profile.js";

const navItems = ["about", "experience", "skills", "projects", "contact"];
const projectIcons = [TerminalSquare, Activity, Cloud];
const experienceIcons = [TerminalSquare, Activity, ShieldCheck];

function createAppearancePalette(basePalette, isDark) {
  if (!isDark) {
    return {
      ...basePalette,
      appBg: "#f8fafc",
      accentText: basePalette.accentText || basePalette.primary,
      bodyText: "#43516a",
      buttonText: basePalette.buttonText || "#ffffff",
      buttonTextShadow: basePalette.buttonText === "#1f1720" ? "none" : "0 1px 2px rgba(0, 0, 0, 0.34)",
      cardShadow: "0 16px 40px rgba(31, 41, 55, 0.08)",
      elevatedBg: "#ffffff",
      footerText: "#64748b",
      headerBg: "rgba(255, 255, 255, 0.86)",
      hoverCardBg: "#ffffff",
      iconPanelShadow: "0 10px 22px rgba(31, 41, 55, 0.12)",
      inputBg: "rgba(255, 255, 255, 0.9)",
      locationText: "#64748b",
      sectionNote: "#64748b",
    };
  }

  return {
    ...basePalette,
    appBg: "#08111e",
    accentText: basePalette.darkAccentText || "#a8c7ff",
    bodyText: "#b6c3d9",
    buttonGradient: basePalette.darkButtonGradient || basePalette.buttonGradient,
    buttonText: basePalette.darkButtonText || basePalette.buttonText || "#ffffff",
    buttonTextShadow: basePalette.darkButtonTextShadow || "0 1px 2px rgba(0, 0, 0, 0.34)",
    cardGradient:
      "linear-gradient(145deg, rgba(7, 18, 33, 0.94), rgba(13, 25, 43, 0.96) 46%, rgba(255, 255, 255, 0.04))",
    cardShadow:
      "0 18px 46px rgba(2, 6, 23, 0.52), 0 10px 26px rgba(15, 23, 42, 0.36)",
    elevatedBg: "rgba(10, 19, 34, 0.92)",
    footerText: "#8ea2c5",
    headerBg: "rgba(6, 14, 26, 0.82)",
    heroGradient:
      "linear-gradient(135deg, rgba(7, 18, 33, 0.98), rgba(17, 31, 53, 0.96) 52%, rgba(255, 255, 255, 0.04))",
    hoverCardBg: "rgba(8, 18, 32, 0.98)",
    iconPanelShadow:
      "0 12px 28px rgba(2, 6, 23, 0.44), 0 0 0 1px rgba(255, 255, 255, 0.04)",
    inputBg: "rgba(7, 16, 30, 0.9)",
    locationText: "#8ea2c5",
    muted: "rgba(255, 255, 255, 0.08)",
    sectionNote: "#8ea2c5",
    surface: "#0b1627",
    text: "#edf4ff",
    border: "rgba(152, 177, 214, 0.22)",
  };
}

function SectionHeading({ eyebrow, title, palette }) {
  return (
    <Stack gap="2" maxW="760px">
      <Text
        color={palette.accentText}
        fontSize="sm"
        fontWeight="700"
        letterSpacing="0.08em"
        textTransform="uppercase"
      >
        {eyebrow}
      </Text>
      <Heading color={palette.text} fontSize={{ base: "2xl", md: "4xl" }} lineHeight="1.1">
        {title}
      </Heading>
    </Stack>
  );
}

function ProjectActionHoverCard({ children, label, note, palette, url }) {
  return (
    <HoverCard.Root closeDelay={120} openDelay={250} positioning={{ placement: "top" }}>
      <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
      <HoverCard.Positioner>
        <HoverCard.Content
          bg={palette.hoverCardBg}
          border="1px solid"
          borderColor={palette.border}
          boxShadow={palette.cardShadow}
          maxW="280px"
          p="4"
          rounded="xl"
        >
          <HoverCard.Arrow />
          <Stack gap="2">
            <Text color={palette.text} fontSize="sm" fontWeight="700">
              {label}
            </Text>
            {note ? (
              <Text color={palette.footerText} fontSize="xs" lineHeight="1.5">
                {note}
              </Text>
            ) : null}
            <Text color={palette.accentText} fontSize="xs" fontWeight="600" lineHeight="1.5">
              {url}
            </Text>
          </Stack>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </HoverCard.Root>
  );
}

function App() {
  const { i18n, t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [appearance, setAppearance] = useState(() => {
    if (typeof window === "undefined") return "light";

    const storedAppearance = window.localStorage.getItem("portfolioAppearance");
    if (storedAppearance === "light" || storedAppearance === "dark") return storedAppearance;

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const currentLanguage = i18n.language?.slice(0, 2) || "en";
  const palette = createAppearancePalette(
    languageThemes[currentLanguage] || languageThemes.en,
    appearance === "dark",
  );
  const nav = t("nav", { returnObjects: true });
  const skillGroups = t("skills.groups", { returnObjects: true });
  const experienceItems = t("experience.items", { returnObjects: true });
  const projects = t("projects.items", { returnObjects: true });
  const resumeHref = resumePdf;

  const accentStripe = useMemo(
    () =>
      currentLanguage === "en"
        ? `linear-gradient(90deg, ${palette.primary}, ${palette.accent} 48%, ${palette.secondary})`
        : `linear-gradient(90deg, ${palette.primary}, ${palette.secondary})`,
    [currentLanguage, palette],
  );
  const heroButtonStyles = {
    bg: palette.buttonGradient,
    border: "1px solid",
    borderColor: palette.border,
    boxShadow: `${palette.buttonGlow || palette.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.42)`,
    color: palette.buttonText,
    fontWeight: "700",
    letterSpacing: "0.04em",
    textShadow: palette.buttonTextShadow,
    transition: "transform 160ms ease, box-shadow 160ms ease, filter 160ms ease",
    _hover: {
      boxShadow: `${palette.buttonGlow || palette.glow}, 0 22px 44px rgba(15, 23, 42, 0.16)`,
      filter: "saturate(1.08)",
      textDecoration: "none",
      transform: "translateY(-2px)",
    },
    _active: {
      boxShadow: palette.buttonGlow || palette.glow,
      transform: "translateY(0)",
    },
  };
  const formFieldStyles = {
    bg: palette.inputBg,
    borderColor: palette.border,
    color: palette.text,
    _placeholder: {
      color: palette.footerText,
    },
    _focusVisible: {
      borderColor: palette.primary,
      boxShadow: `0 0 0 1px ${palette.primary}`,
    },
  };

  useEffect(() => {
    window.localStorage.setItem("portfolioAppearance", appearance);
  }, [appearance]);

  const changeLanguage = (languageCode) => {
    window.localStorage.setItem("portfolioLanguage", languageCode);
    i18n.changeLanguage(languageCode);
    setIsMobileMenuOpen(false);
  };

  const toggleAppearance = () => {
    setAppearance((currentAppearance) =>
      currentAppearance === "dark" ? "light" : "dark",
    );
  };

  return (
    <Theme appearance={appearance}>
      <Box bg={palette.appBg} color={palette.text} minH="100vh">
      <Box
        aria-hidden="true"
        bg={palette.drawerGradient}
        boxShadow={palette.glow}
        display={{ base: "none", md: "block" }}
        h="100vh"
        left="0"
        pointerEvents="none"
        position="fixed"
        top="0"
        w="10px"
        zIndex="30"
      />
      <Box bg={accentStripe} h="5px" />
      <Box
        as="header"
        bg={palette.headerBg}
        borderBottom="1px solid"
        borderColor={palette.border}
        position="sticky"
        top="0"
        zIndex="20"
        style={{ backdropFilter: "blur(16px)" }}
      >
        <Container maxW="1180px" py="4">
          <Flex align="center" gap="4" justify="space-between">
            <Box as="a" href="#top" fontWeight="800">
              DP
            </Box>
            <HStack as="nav" display={{ base: "none", md: "flex" }} gap="1">
              {navItems.map((item) => (
                <Button
                  as="a"
                  href={`#${item}`}
                  key={item}
                  size="sm"
                  variant="ghost"
                  color={palette.text}
                >
                  {nav[item]}
                </Button>
              ))}
            </HStack>
            <HStack gap="2">
              <HStack aria-label={t("languageLabel")} gap="1">
                {languages.map((language) => {
                  const isActive = currentLanguage === language.code;
                  return (
                    <Button
                      aria-pressed={isActive}
                      bg={isActive ? palette.primary : "transparent"}
                      color={isActive ? "white" : palette.text}
                      border="1px solid"
                      borderColor={isActive ? palette.primary : palette.border}
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      size="sm"
                      variant="plain"
                    >
                      {language.shortLabel}
                    </Button>
                  );
                })}
              </HStack>
              <IconButton
                aria-label={appearance === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                bg={palette.cardGradient}
                border="1px solid"
                borderColor={palette.border}
                boxShadow={palette.cardShadow}
                color={palette.accentText}
                onClick={toggleAppearance}
                size="sm"
                variant="ghost"
                _hover={{ bg: palette.muted, transform: "translateY(-1px)" }}
              >
                {appearance === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </IconButton>
              <Button
                aria-controls="mobile-navigation"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? t("mobileMenu.close") : t("mobileMenu.open")}
                display={{ base: "inline-flex", md: "none" }}
                onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
                size="sm"
                variant="outline"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </Button>
            </HStack>
          </Flex>
          <Stack
            as="nav"
            borderTop={isMobileMenuOpen ? "1px solid" : "0"}
            borderColor={palette.border}
            display={{ base: isMobileMenuOpen ? "flex" : "none", md: "none" }}
            gap="1"
            id="mobile-navigation"
            mt={isMobileMenuOpen ? "4" : "0"}
            pt={isMobileMenuOpen ? "4" : "0"}
          >
            {navItems.map((item) => (
              <Button
                as="a"
                color={palette.text}
                href={`#${item}`}
                justifyContent="flex-start"
                key={item}
                onClick={() => setIsMobileMenuOpen(false)}
                variant="ghost"
              >
                {nav[item]}
              </Button>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box as="main" id="top">
        <Box bg={palette.heroGradient}>
          <Container maxW="1180px" py={{ base: "14", md: "24" }}>
            <Grid alignItems="center" gap={{ base: "10", lg: "16" }} templateColumns={{ base: "1fr", lg: "1.05fr 0.95fr" }}>
              <Stack gap="7">
                <Stack gap="4">
                  <Badge
                    alignSelf="flex-start"
                    bg={palette.muted}
                    color={palette.accentText}
                    px="3"
                    py="1"
                    rounded="full"
                  >
                    {t("hero.eyebrow")}
                  </Badge>
                  <Heading fontSize={{ base: "4xl", md: "6xl" }} lineHeight="0.98">
                    {t("hero.title")}
                  </Heading>
                  <Text color={palette.accentText} fontSize={{ base: "xl", md: "2xl" }} fontWeight="700">
                    {t("hero.subtitle")}
                  </Text>
                  <Text color={palette.bodyText} fontSize={{ base: "md", md: "lg" }} lineHeight="1.75" maxW="720px">
                    {t("hero.body")}
                  </Text>
                </Stack>
                <Flex gap="3" wrap="wrap">
                  <Button
                    as="a"
                    href={resumeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...heroButtonStyles}
                  >
                    {t("hero.resume")}
                  </Button>
                  <Button
                    as="a"
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...heroButtonStyles}
                  >
                    <Github size={18} />
                    {t("hero.github")}
                  </Button>
                  <Button
                    as="a"
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...heroButtonStyles}
                  >
                    <Linkedin size={18} />
                    {t("hero.linkedin")}
                  </Button>
                </Flex>
              </Stack>
              <Box
                bg={palette.cardGradient}
                border="1px solid"
                borderColor={palette.border}
                boxShadow={palette.glow}
                maxW="420px"
                mx={{ base: "auto", lg: "0" }}
                overflow="hidden"
                rounded="2xl"
              >
                <Image alt="Dmytro Pishchenkov" aspectRatio="1" objectFit="cover" src={profilePhoto} w="100%" />
                <Box p="5">
                  <Text color={palette.locationText} fontSize="sm">
                    Krakow, Poland
                  </Text>
                </Box>
              </Box>
            </Grid>
          </Container>
        </Box>

        <Container maxW="1180px" py={{ base: "14", md: "20" }}>
          <Stack gap={{ base: "16", md: "24" }}>
            <Box as="section" id="about" scrollMarginTop="96px">
              <Grid gap="8" templateColumns={{ base: "1fr", lg: "0.9fr 1.1fr" }}>
                <SectionHeading eyebrow={t("about.eyebrow")} palette={palette} title={t("about.title")} />
                <Stack gap="6">
                  <Text color={palette.bodyText} fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
                    {t("about.body")}
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 3 }} gap="4">
                    {t("about.highlights", { returnObjects: true }).map((highlight) => (
                      <Box
                        bg={palette.cardGradient}
                        border="1px solid"
                        borderColor={palette.border}
                        boxShadow={palette.cardShadow}
                        key={highlight}
                        p="5"
                        rounded="xl"
                      >
                        <ShieldCheck color={palette.accentText} size={22} />
                        <Text fontSize="sm" fontWeight="700" lineHeight="1.55" mt="4">
                          {highlight}
                        </Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Grid>
            </Box>

            <Box as="section" id="experience" scrollMarginTop="96px">
              <Stack gap="8">
                <SectionHeading eyebrow={t("experience.eyebrow")} palette={palette} title={t("experience.title")} />
                <Text color={palette.sectionNote} maxW="720px">
                  {t("experience.body")}
                </Text>
                <SimpleGrid columns={{ base: 1, md: 3 }} gap="5">
                  {experienceItems.map((item, index) => {
                    const ExperienceIcon = experienceIcons[index] || Briefcase;
                    return (
                      <Stack
                        bg={palette.cardGradient}
                        border="1px solid"
                        borderColor={palette.border}
                        boxShadow={palette.cardShadow}
                        gap="5"
                        h="100%"
                        key={item.title}
                        p="6"
                        rounded="2xl"
                      >
                        <Box
                          bg={palette.muted}
                          color={palette.accentText}
                          p="3"
                          rounded="xl"
                          w="fit-content"
                        >
                          <ExperienceIcon size={22} />
                        </Box>
                        <Stack gap="2">
                          <Heading fontSize="md" lineHeight="1.25">
                            {item.title}
                          </Heading>
                          <Text color={palette.bodyText} fontSize="sm" lineHeight="1.65">
                            {item.description}
                          </Text>
                        </Stack>
                      </Stack>
                    );
                  })}
                </SimpleGrid>
              </Stack>
            </Box>

            <Box as="section" id="skills" scrollMarginTop="96px">
              <Stack gap="8">
                <SectionHeading eyebrow={t("skills.eyebrow")} palette={palette} title={t("skills.title")} />
                <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="5">
                  {skillGroups.map((group) => (
                    <Box
                      bg={palette.cardGradient}
                      border="1px solid"
                      borderColor={palette.border}
                      boxShadow={palette.cardShadow}
                      key={group.title}
                      p="6"
                      rounded="2xl"
                    >
                      <HStack gap="3" mb="5">
                        <Code2 color={palette.accentText} size={22} />
                        <Heading fontSize="lg">{group.title}</Heading>
                      </HStack>
                      <Flex gap="2" wrap="wrap">
                        {group.items.map((item) => (
                          <Badge bg={palette.muted} color={palette.accentText} key={item} px="3" py="1" rounded="full">
                            {item}
                          </Badge>
                        ))}
                      </Flex>
                    </Box>
                  ))}
                </SimpleGrid>
              </Stack>
            </Box>

            <Box as="section" id="projects" scrollMarginTop="96px">
              <Stack gap="8">
                <SectionHeading eyebrow={t("projects.eyebrow")} palette={palette} title={t("projects.title")} />
                <Text color={palette.sectionNote} maxW="720px">
                  {t("projects.note")}
                </Text>
                <SimpleGrid columns={{ base: 1, lg: 3 }} gap="5">
                  {projects.map((project, index) => {
                    const ProjectIcon = projectIcons[index] || RadioTower;
                    const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl !== "#");
                    const hasRepoUrl = Boolean(project.repoUrl && project.repoUrl !== "#");

                    return (
                      <Stack
                        bg={palette.cardGradient}
                        border="1px solid"
                        borderColor={palette.border}
                        boxShadow={palette.cardShadow}
                        gap="5"
                        key={project.title}
                        p="6"
                        rounded="2xl"
                      >
                        <Box bg={palette.muted} color={palette.accentText} p="3" rounded="xl" w="fit-content">
                          <ProjectIcon size={24} />
                        </Box>
                        <Stack gap="2">
                          <Heading fontSize="xl" lineHeight="1.2">
                            {project.title}
                          </Heading>
                          <Text color={palette.accentText} fontSize="sm" fontWeight="700">
                            {project.focus}
                          </Text>
                          <Text color={palette.bodyText} lineHeight="1.7">
                            {project.description}
                          </Text>
                        </Stack>
                        <Flex gap="3" mt="auto" wrap="wrap">
                          {project.liveUrl ? (
                            <ProjectActionHoverCard
                              label={t("projects.live")}
                              note={project.demoNote}
                              palette={palette}
                              url={project.liveUrl}
                            >
                              <Button
                                as="a"
                                href={project.liveUrl}
                                rel={hasLiveUrl ? "noopener noreferrer" : undefined}
                                size="sm"
                                target={hasLiveUrl ? "_blank" : undefined}
                                variant="outline"
                              >
                                {t("projects.live")}
                              </Button>
                            </ProjectActionHoverCard>
                          ) : null}
                          {project.repoUrl ? (
                            <ProjectActionHoverCard
                              label={t("projects.repo")}
                              palette={palette}
                              url={project.repoUrl}
                            >
                              <Button
                                as="a"
                                bg={palette.buttonGradient}
                                color={palette.buttonText}
                                href={project.repoUrl}
                                rel={hasRepoUrl ? "noopener noreferrer" : undefined}
                                size="sm"
                                target={hasRepoUrl ? "_blank" : undefined}
                              >
                                {t("projects.repo")}
                              </Button>
                            </ProjectActionHoverCard>
                          ) : null}
                        </Flex>
                      </Stack>
                    );
                  })}
                </SimpleGrid>
              </Stack>
            </Box>

            <Box as="section" id="contact" scrollMarginTop="96px">
              <Grid
                bg={palette.cardGradient}
                border="1px solid"
                borderColor={palette.border}
                boxShadow={palette.glow}
                gap="8"
                p={{ base: "6", md: "8" }}
                rounded="2xl"
                templateColumns={{ base: "1fr", lg: "0.9fr 1.1fr" }}
              >
                <Stack gap="6">
                  <SectionHeading eyebrow={t("contact.eyebrow")} palette={palette} title={t("contact.title")} />
                  <Text color={palette.bodyText} lineHeight="1.7">
                    {t("contact.body")}
                  </Text>
                  <Stack gap="3">
                    <Button as="a" href={socialLinks.email} justifyContent="flex-start" variant="outline">
                      <Mail size={18} />
                      {t("contact.email")}
                    </Button>
                    <Button as="a" href={socialLinks.calendly} target="_blank" rel="noopener noreferrer" justifyContent="flex-start" variant="outline">
                      <CalendarDays size={18} />
                      {t("contact.schedule")}
                    </Button>
                  </Stack>
                </Stack>
                <Box>
                  <Heading fontSize="xl" mb="5">
                    {t("contact.formTitle")}
                  </Heading>
                  <Box as="form" action="https://formspree.io/f/xeqwajpz" method="POST">
                    <Stack gap="4">
                      <Input aria-label={t("contact.name")} name="name" placeholder={t("contact.name")} required {...formFieldStyles} />
                      <Input aria-label={t("contact.emailPlaceholder")} name="email" placeholder={t("contact.emailPlaceholder")} required type="email" {...formFieldStyles} />
                      <Input aria-label={t("contact.subject")} name="subject" placeholder={t("contact.subject")} required {...formFieldStyles} />
                      <Textarea aria-label={t("contact.message")} minH="140px" name="message" placeholder={t("contact.message")} required {...formFieldStyles} />
                      <Button alignSelf="flex-start" type="submit" {...heroButtonStyles}>
                        {t("contact.send")}
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box as="footer" borderTop="1px solid" borderColor={palette.border} py="6">
        <Container maxW="1180px">
          <Text color={palette.footerText} fontSize="sm">
            <Trans
              i18nKey="footer"
              components={{
                name: (
                  <a
                    href="https://github.com/DemetrPI/Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "underline" }}
                  >
                    {t("footerName")}
                  </a>
                ),
              }}
            />
          </Text>
        </Container>
      </Box>
      </Box>
    </Theme>
  );
}

export default App;
