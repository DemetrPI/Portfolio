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
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  Activity,
  Briefcase,
  CalendarDays,
  Cloud,
  Code2,
  Github,
  Headphones,
  Linkedin,
  Mail,
  Menu,
  RadioTower,
  ShieldCheck,
  TerminalSquare,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import resumePdf from "../assets/curriculum.pdf";
import profilePhoto from "../assets/images/me.png";
import { languageThemes, languages, socialLinks } from "./data/profile.js";

const navItems = ["about", "experience", "skills", "projects", "contact"];
const projectIcons = [ShieldCheck, Cloud, TerminalSquare];
const experienceIcons = [Briefcase, Headphones, Activity];

function SectionHeading({ eyebrow, title, palette }) {
  return (
    <Stack gap="2" maxW="760px">
      <Text
        color={palette.primary}
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
          bg="white"
          border="1px solid"
          borderColor={palette.border}
          boxShadow="0 18px 44px rgba(15, 23, 42, 0.16)"
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
              <Text color="#64748b" fontSize="xs" lineHeight="1.5">
                {note}
              </Text>
            ) : null}
            <Text color={palette.primary} fontSize="xs" fontWeight="600" lineHeight="1.5">
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
  const currentLanguage = i18n.language?.slice(0, 2) || "en";
  const palette = languageThemes[currentLanguage] || languageThemes.en;
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
    color: currentLanguage === "pl" ? palette.text : "white",
    fontWeight: "700",
    letterSpacing: "0.04em",
    textShadow: currentLanguage === "pl" ? "none" : "0 1px 2px rgba(0, 0, 0, 0.34)",
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

  const changeLanguage = (languageCode) => {
    window.localStorage.setItem("portfolioLanguage", languageCode);
    i18n.changeLanguage(languageCode);
    setIsMobileMenuOpen(false);
  };

  return (
    <Box bg="#f8fafc" color={palette.text} minH="100vh">
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
        bg="rgba(255, 255, 255, 0.86)"
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
                    color={palette.primary}
                    px="3"
                    py="1"
                    rounded="full"
                  >
                    {t("hero.eyebrow")}
                  </Badge>
                  <Heading fontSize={{ base: "4xl", md: "6xl" }} lineHeight="0.98">
                    {t("hero.title")}
                  </Heading>
                  <Text color={palette.primary} fontSize={{ base: "xl", md: "2xl" }} fontWeight="700">
                    {t("hero.subtitle")}
                  </Text>
                  <Text color="#43516a" fontSize={{ base: "md", md: "lg" }} lineHeight="1.75" maxW="720px">
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
                  <Text color="#64748b" fontSize="sm">
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
                  <Text color="#43516a" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
                    {t("about.body")}
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 3 }} gap="4">
                    {t("about.highlights", { returnObjects: true }).map((highlight) => (
                      <Box
                        bg={palette.cardGradient}
                        border="1px solid"
                        borderColor={palette.border}
                        boxShadow="0 16px 40px rgba(31, 41, 55, 0.08)"
                        key={highlight}
                        p="5"
                        rounded="xl"
                      >
                        <ShieldCheck color={palette.primary} size={22} />
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
                <Grid gap="6" templateColumns={{ base: "1fr", lg: "0.8fr 1.2fr" }}>
                  <Box
                    bg={palette.cardGradient}
                    border="1px solid"
                    borderColor={palette.border}
                    boxShadow={palette.glow}
                    p={{ base: "6", md: "8" }}
                    rounded="2xl"
                  >
                    <Text color="#43516a" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
                      {t("experience.body")}
                    </Text>
                  </Box>
                  <SimpleGrid columns={{ base: 1, md: 3 }} gap="4">
                    {experienceItems.map((item, index) => {
                      const ExperienceIcon = experienceIcons[index] || Briefcase;
                      return (
                        <Stack
                        bg="white"
                          border="1px solid"
                          borderColor={palette.border}
                          boxShadow="0 16px 40px rgba(31, 41, 55, 0.08)"
                          gap="4"
                          key={item.title}
                          p="5"
                          rounded="xl"
                        >
                          <Box
                            bg={palette.buttonGradient}
                            boxShadow="0 10px 22px rgba(31, 41, 55, 0.12)"
                            color={currentLanguage === "pl" ? palette.text : "white"}
                            p="3"
                            rounded="lg"
                            w="fit-content"
                          >
                            <ExperienceIcon size={22} />
                          </Box>
                          <Stack gap="2">
                            <Heading fontSize="md" lineHeight="1.25">
                              {item.title}
                            </Heading>
                            <Text color="#43516a" fontSize="sm" lineHeight="1.65">
                              {item.description}
                            </Text>
                          </Stack>
                        </Stack>
                      );
                    })}
                  </SimpleGrid>
                </Grid>
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
                      boxShadow="0 16px 40px rgba(31, 41, 55, 0.08)"
                      key={group.title}
                      p="6"
                      rounded="2xl"
                    >
                      <HStack gap="3" mb="5">
                        <Code2 color={palette.primary} size={22} />
                        <Heading fontSize="lg">{group.title}</Heading>
                      </HStack>
                      <Flex gap="2" wrap="wrap">
                        {group.items.map((item) => (
                          <Badge bg={palette.muted} color={palette.primary} key={item} px="3" py="1" rounded="full">
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
                <Text color="#64748b" maxW="720px">
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
                        boxShadow="0 16px 40px rgba(31, 41, 55, 0.08)"
                        gap="5"
                        key={project.title}
                        p="6"
                        rounded="2xl"
                      >
                        <Box bg={palette.muted} color={palette.primary} p="3" rounded="xl" w="fit-content">
                          <ProjectIcon size={24} />
                        </Box>
                        <Stack gap="2">
                          <Heading fontSize="xl" lineHeight="1.2">
                            {project.title}
                          </Heading>
                          <Text color={palette.primary} fontSize="sm" fontWeight="700">
                            {project.focus}
                          </Text>
                          <Text color="#43516a" lineHeight="1.7">
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
                                color={currentLanguage === "pl" ? palette.text : "white"}
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
                  <Text color="#43516a" lineHeight="1.7">
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
                      <Input aria-label={t("contact.name")} name="name" placeholder={t("contact.name")} required />
                      <Input aria-label={t("contact.emailPlaceholder")} name="email" placeholder={t("contact.emailPlaceholder")} required type="email" />
                      <Input aria-label={t("contact.subject")} name="subject" placeholder={t("contact.subject")} required />
                      <Textarea aria-label={t("contact.message")} minH="140px" name="message" placeholder={t("contact.message")} required />
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
          <Text color="#64748b" fontSize="sm">
            {t("footer")}
          </Text>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
