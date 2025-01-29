//  MAIN PAGE
const informations = {
    name: "Nathan CORNELIE",
    job: "DevOps Engineer",
    about:
      "Hi, I'm Nathan, a DevOps Engineer based in Luxembourg. " +
       "Passionate about building efficient and scalable web applications with Vue,"
       +" I'm eager to contribute my expertise to impactful projects. ",
  
    interest: [
      "DevOps",
      "Software Engineering",
      "Web Development",
    ],
    educations: [
      { title: "Master's degree in Computer Engineering ", school: "Specialization in Cybersecurity | Telecom NANCY, France" },
     
    ],
    publications: [
      {
        image: "/pub1.webp",
        title: "An example preprint / working paper",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ]" +
          "ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.",
        date: "Apr 7, 2019",
      },
      {
        image: "/pub2.webp",
        title: "An example preprint / working paper",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ]" +
          "ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.",
        date: "Apr 7, 2019",
      },
    ],
    my_researches:{
      content: "In my spare time, I create applications to meet daily needs and support client projects. This passion keeps me engaged with the latest technologies and allows me to focus on writing clean, high-quality code.",
      image : ""
    }
  };
  
  // EXPERIENCES PAGE
  const experiences = [{
    title: "DevOps Engineer",
    company: "Banque de Luxembourg",
    dates: "October 2024",
    logo: { link: "bol.png", size: 200 },
    jobs: [
        {
            image: "python.png",
            tasks: [
                {
                    title: "Test Automation Script",
                    subtitle: ["Automation of manual processes", "Sending report emails"]
                }
            ]
        }, {
            image: "automic.png",
            tasks: [
                {
                    title: "Script Improvement",
                    subtitle: []
                }, {
                    title: "Process Maintenance",
                    subtitle: []
                }, {
                    title: "Development of Automation Scripts",
                    subtitle: []
                },
            ]
        }, {
            image: "angular.png",
            tasks: [
                {
                    title: "Application Development",
                    subtitle: ["Development of an application to improve monitoring on the environment"]
                }
            ]
        },
    ]
},
{
    title: "Cloud DevOps Engineer Intern",
    company: "Excellium",
    dates: "March 2024 - August 2024",
    logo: { link: "excellium.png", size: 180 },
    jobs: [
        {
            image: "ansible.png",
            tasks: [
                {
                    title: "Development of Automation Scripts with Ansible",
                    subtitle: ["Firewall configuration", "Installation and configuration of VPN"]
                }
            ]
        }, {
            image: "react.png",
            tasks: [
                {
                    title: "Web Application Development",
                    subtitle: ["Management application for nomenclature for a client"]
                }
            ]
        }, {
            image: "docker.png",
            tasks: [
                {
                    title: "Azure DevOps Pipeline for Docker Image Security",
                    subtitle: ["Scan, signing, and cloud storage of Docker images"]
                }
            ]
        }, {
            image: "python.png",
            tasks: [
                {
                    title: "Development of Scripts for Firewall Rule Verification",
                    subtitle: ["Development of a script aimed at improving and cleaning up firewall rules"]
                }
            ]
        },
    ]
},
{
    title: "Web Developer Intern",
    company: "BIAC Log SA",
    dates: "June 2023 - August 2023",
    logo: { link: "biac.png", size: 180 },
    jobs: [
        {
            image: "vue.png",
            tasks: [
                {
                    title: "Web Application Development",
                    subtitle: ["Creating pages to meet new client requests"]
                }
            ]
        }, {
            image: "dot_net.png",
            tasks: [
                {
                    title: "API Development",
                    subtitle: ["Algorithm optimization", "Development of API routes"]
                }
            ]
        },
    ]
}
];

  const educations = [
    {
      titre: "Stage Développeur",
      lieu: "BIAC Log SA Luxembourg",
      debut: "Juin 2023",
      fin: "Août 2023",
      image: "claim_logo.png",
      missions: [
        {
          titre:
            "Développement de pages pour d’une application sur mesure de gestion pour une société luxembourgeoise en VueJS et Typescript",
          taches: [],
        },
        {
          titre:
            "Amélioration d’une API pour répondre aux besoins des pages avec le Framework .NET en C#",
          taches: [],
        },
      ],
    },
  ];
  
  const awards = [
    {
      titre: "Stage Développeur",
      lieu: "BIAC Log SA Luxembourg",
      debut: "Juin 2023",
      fin: "",
      image: "/claim_logo.png",
      missions: [
        {
          titre:
            "Développement de pages pour d’une application sur mesure de gestion pour une société luxembourgeoise en VueJS et Typescript",
          taches: [],
        },
        {
          titre:
            "Amélioration d’une API pour répondre aux besoins des pages avec le Framework .NET en C#",
          taches: [],
        },
      ],
    },
  ];
  // ARTICLES PAGE
  const articles = [
    {
      titre:
        "L’Intelligenza Artificiale Rivoluziona l’Onboarding dei Dipendenti: Automazione, Personalizzazione e Produttività",
      description:
        "L’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettonoL’uso dell’intelligenza artificiale  permettono",
      date: "12th March 2024",
      lien: "https://www.claim-project.it/lintelligenza-artificiale-rivoluziona-lonboarding-dei-dipendenti-automazione-personalizzazione-e-produttivita/",
    },
    {
      titre:
        "L’Intelligenza Artificiale Rivoluziona l’Onboarding dei Dipendenti: Automazione, Personalizzazione e Produttività",
      description:
        "L’uso dell’intelligenza artificiale nell’onboarding dei dipendenti sta rapidamente trasformando il modo in cui le aziende accolgono e integrano i nuovi assunti. Le tecnologie AI non solo automatizzano processi ripetitivi, ma permettono",
      date: "12th March 2024",
      lien: "https://www.claim-project.it/lintelligenza-artificiale-rivoluziona-lonboarding-dei-dipendenti-automazione-personalizzazione-e-produttivita/",
    },
  ];
  // CONFERENCE PAGE
  const conferences = [
    {
      name: "ECML PKDD 2024",
      place: "Vilnius, LITHUANIA",
      date: "9th-13rd September 2024",
      link: "https://ecmlpkdd.org/2024/",
      image: "conference.png"
    },
    {
      name: "Medical Imaging with Deep Learning Conference",
      place: "Paris, FRANCE",
      date: "24th December 2023",
      link: "https://albarqouni.github.io/",
      image: "conference.png"
  
    },
    {
      name: "Medical Imaging with Deep Learning Conference",
      place: "Paris, FRANCE",
      date: "24th December 2023",
      link: "https://albarqouni.github.io/",
      image: "conference.png"
  
    },
  ];
  const my_researches = {
    content: "",
    image: ""
  }
  const links = {
    linkedin: "https://www.linkedin.com/in/nathan-cornelie/",
    github: "https://github.com/NathanCornelie",
    scholar: "https://scholar.google.com/citations?user=n1VGy-gAAAAJ&hl=it",
    medium: "https://medium.com/@diletta.chiaro",
  };
  export { conferences, informations, experiences, educations, awards, links,articles, my_researches };
  