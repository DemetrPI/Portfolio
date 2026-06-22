export const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        experience: "Experience",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      mobileMenu: {
        open: "Open navigation",
        close: "Close navigation",
      },
      hero: {
        eyebrow: "Platform Engineering / Cloud Ops / DevSecOps",
        title: "Dmytro Pishchenkov",
        subtitle:
          "Software Engineer focused on Kubernetes, cloud infrastructure, security, and automation.",
        body: "I build and operate reliable cloud platforms with Terraform, Kubernetes, Go, Python, and a security-first mindset shaped by enterprise support and compliance experience.",
        resume: "Resume placeholder",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      about: {
        eyebrow: "Profile",
        title: "From compliance thinking to resilient platforms",
        body: "My background combines cloud security support, infrastructure automation, and compliance-driven analysis. That mix helps me approach platform work with a strong bias toward auditability, controlled change, and zero-downtime operations.",
        highlights: [
          "Kubernetes abstractions and operator-style automation",
          "Infrastructure as Code for repeatable cloud environments",
          "Cloud security posture, workload protection, and incident troubleshooting",
        ],
      },
      experience: {
        eyebrow: "Enterprise background",
        title: "Scaling, securing, and optimizing enterprise infrastructure",
        body: "My background spans deep technical security support for Microsoft cloud ecosystems and large-scale infrastructure automation, optimization, and platform engineering work across Cisco / Splunk environments.",
        items: [
          {
            title: "Microsoft Defender for Cloud support (via LTIMindtree)",
            description:
              "Provided advanced DevSecOps support for enterprise environments, focusing on Cloud Security Posture Management, workload protection, and complex cloud security incident resolution.",
          },
          {
            title: "Splunk (Cloud Operations)",
            description:
              "Engineered Terraform and Python automation for a large-scale AWS RDS fleet upgrade and Intel-to-Graviton migration, a team initiative that delivered $500k+ in cost optimization. Developed SPL-based observability dashboards and used Splunk Dynamic Templates (Loki) to track infrastructure state and lifecycle events.",
          },
          {
            title: "Platform Engineering (Cisco/Splunk)",
            description:
              "Extended Cisco / Splunk platform work into Kubernetes operator development, building higher-level abstractions for stateful workloads in Go. Focused on PostgreSQL Day-1/Day-2 lifecycle automation, leveraging AI-augmented workflows for rapid iteration and debugging.",
          },
        ],
      },
      skills: {
        eyebrow: "Capabilities",
        title: "Current engineering stack",
        groups: [
          {
            title: "Cloud & Orchestration",
            items: [
              "AWS",
              "Azure",
              "Oracle Cloud",
              "GCP",
              "Kubernetes",
              "Docker",
            ],
          },
          {
            title: "IaC & CI/CD",
            items: [
              "Terraform",
              "GitHub Actions",
              "GitOps (Argo CD)",
              "Qbec",
              "Blue/Green Deployments",
            ],
          },
          {
            title: "Security & DevSecOps",
            items: [
              "Microsoft Defender for Cloud",
              "CSPM",
              "CWPP",
              "OPSEC",
              "Zero Trust",
            ],
          },
          {
            title: "Programming",
            items: ["Go", "Python", "Bash", "React"],
          },
          {
            title: "Data & Observability",
            items: [
              "PostgreSQL",
              "Splunk",
              "Prometheus",
              "Firebase",
              "MongoDB",
              "Splunk SPL",
              "Splunk Dynamic Templates (Loki)",
            ],
          },
        ],
      },
      projects: {
        eyebrow: "Selected work",
        title: "Platform engineering projects",
        note: "Selected projects spanning Kubernetes operator development, serverless delivery, and secure communication infrastructure.",
        live: "Live demo",
        repo: "Repository",
        items: [
          {
            title: "Splunk Operator: PostgreSQL Platform Controllers",
            focus:
              "Go, Kubernetes, Operators, PostgreSQL, CloudNativePG, AI-Augmented Dev",
            description:
              "Engineered core APIs, including PostgresCluster, PostgresDatabase, and class-based provisioning primitives, to establish a higher-level PostgreSQL platform layer for Splunk on Kubernetes. Added CNPG-backed reconciliation and Day-1/Day-2 lifecycle management for enterprise stateful workloads.",
            repoUrl:
              "https://github.com/splunk/splunk-operator/tree/feature/database-controllers",
          },
          {
            title: "Serverless Cloud-Native Web Application",
            focus: "Go, GCP Cloud Run, Docker, Firebase, React",
            description:
              "Architected and deployed a multilingual web application with a Go-based REST API and React frontend. Containerized the backend for Google Cloud Run, enabling scale-to-zero delivery, and integrated Firebase for NoSQL-backed state and localization support.",
            liveUrl: "https://hgame.i-dmytro.org/",
            repoUrl: "https://github.com/DmytroPI-dev/go-hangman",
          },
          {
            title: "Secure Communication Infrastructure",
            focus: "Go, WebSockets, WebRTC, TURN, AES-GCM, OCI, Terraform",
            description:
              "Architected a secure real-time communication platform deployed on OCI and provisioned entirely with Terraform. Built a hardened deployment path with custom coturn configuration, DTLS fingerprint verification, ephemeral state cleanup, and AES-GCM payload encryption.",
            demoNote:
              "Access rooms using a fictional city and today's date (DDMMYY).",
            liveUrl: "https://messenger.dmytro-dev.net",
            repoUrl: "https://github.com/DmytroPI-dev/secure-messenger",
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s build reliable infrastructure",
        body: "I am open to platform engineering, cloud operations, and DevSecOps conversations.",
        email: "Email",
        schedule: "Schedule",
        formTitle: "Quick message",
        name: "Your name",
        emailPlaceholder: "Your email",
        subject: "Subject",
        message: "Message",
        send: "Send",
      },
      footer:
        "© Dmytro Pishchenkov 2026 | Built with React, deployed via CI/CD, and hosted on Microsoft Azure.",
      languageLabel: "Select language",
    },
  },
  uk: {
    translation: {
      nav: {
        about: "Про мене",
        experience: "Досвід",
        skills: "Навички",
        projects: "Проєкти",
        contact: "Контакти",
      },
      mobileMenu: {
        open: "Відкрити навігацію",
        close: "Закрити навігацію",
      },
      hero: {
        eyebrow: "Platform Engineering / Cloud Ops / DevSecOps",
        title: "Дмитро Піщенков",
        subtitle:
          "Software Engineer з фокусом на Kubernetes, хмарну інфраструктуру, безпеку та автоматизацію.",
        body: "Я створюю та підтримую надійні cloud-платформи з Terraform, Kubernetes, Go і Python, використовуючи security-first підхід, сформований досвідом enterprise support та compliance.",
        resume: "Резюме placeholder",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      about: {
        eyebrow: "Профіль",
        title: "Від compliance-мислення до стійких платформ",
        body: "Мій досвід поєднує підтримку хмарної безпеки, автоматизацію інфраструктури та compliance-орієнтований аналіз. Це допомагає мені будувати платформи з акцентом на аудитованість, контрольовані зміни та операції без простою.",
        highlights: [
          "Kubernetes-абстракції та operator-style автоматизація",
          "Infrastructure as Code для повторюваних cloud-середовищ",
          "Cloud security posture, workload protection та troubleshooting складних інцидентів",
        ],
      },
      experience: {
        eyebrow: "Enterprise background",
        title: "Масштабування, захист та оптимізація enterprise-інфраструктури",
        body: "Мій досвід охоплює глибоку технічну підтримку безпеки для хмарних екосистем Microsoft, а також масштабну автоматизацію інфраструктури, оптимізацію та platform engineering у середовищах Cisco / Splunk.",
        items: [
          {
            title: "Підтримка Microsoft Defender for Cloud (через LTIMindtree)",
            description:
              "Надавав розширену DevSecOps-підтримку для enterprise-середовищ, фокусуючись на Cloud Security Posture Management, захисті робочих навантажень та вирішенні складних інцидентів хмарної безпеки.",
          },
          {
            title: "Splunk (Cloud Operations)",
            description:
              "Розробляв автоматизацію з Terraform та Python для масштабного оновлення парку AWS RDS і міграції з Intel на Graviton, командної ініціативи, що принесла понад $500 тис. економії. Створив SPL-дашборди для моніторингу стану інфраструктури та використовував Splunk Dynamic Templates (Loki).",
          },
          {
            title: "Platform Engineering (Cisco/Splunk)",
            description:
              "Розширював роботу над платформами Cisco/Splunk через розробку Kubernetes-операторів і створення високорівневих абстракцій для stateful-навантажень на Go. Фокусувався на автоматизації Day-1/Day-2 життєвого циклу PostgreSQL з використанням AI-асистування для швидкої ітерації та дебагінгу.",
          },
        ],
      },
      skills: {
        eyebrow: "Компетенції",
        title: "Поточний інженерний стек",
        groups: [
          {
            title: "Cloud & Orchestration",
            items: [
              "AWS",
              "Azure",
              "Oracle Cloud",
              "GCP",
              "Kubernetes",
              "Docker",
            ],
          },
          {
            title: "IaC & CI/CD",
            items: [
              "Terraform",
              "GitHub Actions",
              "GitOps (Argo CD)",
              "Qbec",
              "Blue/Green Deployments",
            ],
          },
          {
            title: "Security & DevSecOps",
            items: [
              "Microsoft Defender for Cloud",
              "CSPM",
              "CWPP",
              "OPSEC",
              "Zero Trust",
            ],
          },
          {
            title: "Programming",
            items: ["Go", "Python", "Bash", "React"],
          },
          {
            title: "Data & Observability",
            items: [
              "PostgreSQL",
              "Splunk",
              "Prometheus",
              "Firebase",
              "MongoDB",
              "Splunk SPL",
              "Splunk Dynamic Templates (Loki)",
            ],
          },
        ],
      },
      projects: {
        eyebrow: "Вибрані роботи",
        title: "Platform engineering проєкти",
        note: "Вибрані проєкти, що охоплюють розробку Kubernetes-операторів, serverless-доставку та безпечну комунікаційну інфраструктуру.",
        live: "Live demo",
        repo: "Repository",
        items: [
          {
            title: "Splunk Operator: PostgreSQL Platform Controllers",
            focus:
              "Go, Kubernetes, Operators, PostgreSQL, CloudNativePG, AI-Augmented Dev",
            description:
              "Розробив ключові API, зокрема PostgresCluster, PostgresDatabase та примітиви class-based provisioning, щоб створити високорівневий платформний прошарок PostgreSQL для Splunk у Kubernetes. Додав CNPG-backed reconciliation та управління Day-1/Day-2 життєвим циклом для enterprise stateful-навантажень.",
            repoUrl:
              "https://github.com/splunk/splunk-operator/tree/feature/database-controllers",
          },
          {
            title: "Serverless Cloud-Native Web Application",
            focus: "Go, GCP Cloud Run, Docker, Firebase, React",
            description:
              "Спроєктував та розгорнув багатомовний вебзастосунок з Go REST API та React-фронтендом. Контейнеризував бекенд для Google Cloud Run (scale-to-zero) та інтегрував Firebase для керування NoSQL-станом і підтримки локалізації.",
            liveUrl: "https://hgame.i-dmytro.org/",
            repoUrl: "https://github.com/DmytroPI-dev/go-hangman",
          },
          {
            title: "Secure Communication Infrastructure",
            focus: "Go, WebSockets, WebRTC, TURN, AES-GCM, OCI, Terraform",
            description:
              "Спроєктував платформу безпечної комунікації в реальному часі, розгорнуту в OCI, з інфраструктурою, повністю описаною в Terraform. Побудував захищений шлях розгортання з власною конфігурацією coturn, перевіркою DTLS fingerprint, ефемерним очищенням стану та AES-GCM шифруванням корисного навантаження.",
            demoNote:
              "Для доступу до кімнат використовуйте вигадане місто та поточну дату (DDMMYY).",
            liveUrl: "https://messenger.dmytro-dev.net",
            repoUrl: "https://github.com/DmytroPI-dev/secure-messenger",
          },
        ],
      },
      contact: {
        eyebrow: "Контакти",
        title: "Побудуймо надійну інфраструктуру",
        body: "Я відкритий до розмов про platform engineering, cloud operations та DevSecOps.",
        email: "Email",
        schedule: "Запланувати",
        formTitle: "Коротке повідомлення",
        name: "Ваше ім'я",
        emailPlaceholder: "Ваш email",
        subject: "Тема",
        message: "Повідомлення",
        send: "Надіслати",
      },
      footer:
        "© Дмитро Піщенков 2026 | Побудовано на React, розгорнуто через CI/CD та розміщено на Microsoft Azure.",
      languageLabel: "Оберіть мову",
    },
  },
  pl: {
    translation: {
      nav: {
        about: "O mnie",
        experience: "Doświadczenie",
        skills: "Umiejętności",
        projects: "Projekty",
        contact: "Kontakt",
      },
      mobileMenu: {
        open: "Otwórz nawigację",
        close: "Zamknij nawigację",
      },
      hero: {
        eyebrow: "Platform Engineering / Cloud Ops / DevSecOps",
        title: "Dmytro Pishchenkov",
        subtitle:
          "Software Engineer skupiony na Kubernetes, infrastrukturze cloud, bezpieczeństwie i automatyzacji.",
        body: "Buduję i utrzymuję niezawodne platformy cloud z użyciem Terraform, Kubernetes, Go i Python, wykorzystując podejście security-first wynikające z doświadczenia w enterprise support i compliance.",
        resume: "CV placeholder",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      about: {
        eyebrow: "Profil",
        title: "Od myślenia compliance do odpornych platform",
        body: "Moje doświadczenie łączy wsparcie bezpieczeństwa chmurowego, automatyzację infrastruktury oraz analizę opartą na wymaganiach compliance. Dzięki temu podchodzę do platform engineering z naciskiem na audytowalność, kontrolowane zmiany i operacje bez przestojów.",
        highlights: [
          "Abstrakcje Kubernetes i automatyzacja w stylu operatorów",
          "Infrastructure as Code dla powtarzalnych środowisk cloud",
          "Cloud security posture, workload protection i rozwiązywanie złożonych incydentów",
        ],
      },
      experience: {
        eyebrow: "Enterprise background",
        title:
          "Skalowanie, zabezpieczanie i optymalizacja infrastruktury enterprise",
        body: "Moje doświadczenie obejmuje głębokie wsparcie techniczne ds. bezpieczeństwa ekosystemów chmurowych Microsoft, a także automatyzację infrastruktury na dużą skalę, optymalizację i platform engineering w środowiskach Cisco / Splunk.",
        items: [
          {
            title: "Wsparcie Microsoft Defender for Cloud (przez LTIMindtree)",
            description:
              "Zapewniałem zaawansowane wsparcie DevSecOps dla środowisk enterprise, ze szczególnym uwzględnieniem Cloud Security Posture Management, ochrony obciążeń roboczych oraz rozwiązywania złożonych incydentów bezpieczeństwa w chmurze.",
          },
          {
            title: "Splunk (Cloud Operations)",
            description:
              "Tworzyłem automatyzację z użyciem Terraform i Python dla dużej aktualizacji floty AWS RDS oraz migracji z Intel na Graviton, zespołowej inicjatywy, która przyniosła ponad 500 tys. USD oszczędności. Zbudowałem dashboardy observability oparte na SPL do śledzenia stanu infrastruktury oraz wykorzystywałem Splunk Dynamic Templates (Loki).",
          },
          {
            title: "Platform Engineering (Cisco/Splunk)",
            description:
              "Rozszerzałem prace nad platformą Cisco / Splunk o rozwój operatorów Kubernetes i budowanie abstrakcji wyższego poziomu dla obciążeń stateful w Go. Skupiałem się na automatyzacji cyklu życia Day-1/Day-2 PostgreSQL, wykorzystując wspomagane przez AI workflow do szybkiej iteracji i debugowania.",
          },
        ],
      },
      skills: {
        eyebrow: "Kompetencje",
        title: "Aktualny stack inżynierski",
        groups: [
          {
            title: "Cloud & Orchestration",
            items: [
              "AWS",
              "Azure",
              "Oracle Cloud",
              "GCP",
              "Kubernetes",
              "Docker",
            ],
          },
          {
            title: "IaC & CI/CD",
            items: [
              "Terraform",
              "GitHub Actions",
              "GitOps (Argo CD)",
              "Qbec",
              "Blue/Green Deployments",
            ],
          },
          {
            title: "Security & DevSecOps",
            items: [
              "Microsoft Defender for Cloud",
              "CSPM",
              "CWPP",
              "OPSEC",
              "Zero Trust",
            ],
          },
          {
            title: "Programming",
            items: ["Go", "Python", "Bash", "React"],
          },
          {
            title: "Data & Observability",
            items: [
              "PostgreSQL",
              "Splunk",
              "Prometheus",
              "Firebase",
              "MongoDB",
              "Splunk SPL",
              "Splunk Dynamic Templates (Loki)",
            ],
          },
        ],
      },
      projects: {
        eyebrow: "Wybrane prace",
        title: "Projekty platform engineering",
        note: "Wybrane projekty obejmujące rozwój operatorów Kubernetes, serverless delivery oraz bezpieczną infrastrukturę komunikacyjną.",
        live: "Live demo",
        repo: "Repository",
        items: [
          {
            title: "Splunk Operator: PostgreSQL Platform Controllers",
            focus:
              "Go, Kubernetes, Operators, PostgreSQL, CloudNativePG, AI-Augmented Dev",
            description:
              "Opracowałem kluczowe API, w tym PostgresCluster, PostgresDatabase oraz mechanizmy class-based provisioning, aby zbudować wyższą warstwę platformową PostgreSQL dla Splunk na Kubernetes. Dodałem CNPG-backed reconciliation i zarządzanie cyklem życia Day-1/Day-2 dla enterprise stateful workloads.",
            repoUrl:
              "https://github.com/splunk/splunk-operator/tree/feature/database-controllers",
          },
          {
            title: "Serverless Cloud-Native Web Application",
            focus: "Go, GCP Cloud Run, Docker, Firebase, React",
            description:
              "Zaprojektowałem i wdrożyłem wielojęzyczną aplikację internetową z Go REST API i frontendem w React. Skonteneryzowałem backend dla Google Cloud Run, umożliwiając scale-to-zero, i zintegrowałem Firebase do obsługi stanu NoSQL oraz lokalizacji.",
            liveUrl: "https://hgame.i-dmytro.org/",
            repoUrl: "https://github.com/DmytroPI-dev/go-hangman",
          },
          {
            title: "Secure Communication Infrastructure",
            focus: "Go, WebSockets, WebRTC, TURN, AES-GCM, OCI, Terraform",
            description:
              "Zaprojektowałem bezpieczną platformę komunikacji w czasie rzeczywistym wdrożoną na OCI, z infrastrukturą w pełni opisaną w Terraform. Zbudowałem zabezpieczoną ścieżkę wdrażania z niestandardową konfiguracją coturn, weryfikacją DTLS fingerprint, czyszczeniem stanu tymczasowego i szyfrowaniem ładunku AES-GCM.",
            demoNote:
              "Aby uzyskać dostęp do pokoi, użyj fikcyjnego miasta i dzisiejszej daty (DDMMYY).",
            liveUrl: "https://messenger.dmytro-dev.net",
            repoUrl: "https://github.com/DmytroPI-dev/secure-messenger",
          },
        ],
      },
      contact: {
        eyebrow: "Kontakt",
        title: "Zbudujmy niezawodną infrastrukturę",
        body: "Jestem otwarty na rozmowy o platform engineering, cloud operations i DevSecOps.",
        email: "Email",
        schedule: "Umów spotkanie",
        formTitle: "Krótka wiadomość",
        name: "Twoje imię",
        emailPlaceholder: "Twój email",
        subject: "Temat",
        message: "Wiadomość",
        send: "Wyślij",
      },
      footer:
        "© Dmytro Pishchenkov 2026 | Zbudowane w React, wdrożone przez CI/CD i hostowane na Microsoft Azure.",
      languageLabel: "Wybierz język",
    },
  },
};
