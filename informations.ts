//  MAIN PAGE
const informations = {
    name: "Nathan CORNELIE",
    job: "DevOps Engineer",
    about:
      "Hi, I'm Nathan, a DevOps Engineer based in Luxembourg."+
       "Passionate about building efficient and scalable web applications with Vue,"
       +" I'm eager to contribute my expertise to impactful projects..",
  
    interest: [
      "DevOps",
      "Software Engineering",
      "Cyber Security",
    ],
    educations: [
      { title: "Master's degree in Computer Engineering ", school: "Specialization in Cybersecurity | Telecom NANCY, France" },
      // {
      //   title: "MSc Statistical Sciences",
      //   school: "University of Naples Federico II",
      // },
      // {
      //   title: "BSc Artificial Intelligence",
      //   school: "Massachusetts Institute of Technology",
      // },
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
    title: "Ingenieur DevOps",
    company: "Banque de Luxembourg",
    dates: "Octobre 2024",
    logo:"bol.jpeg",
    jobs: [
        {
            image: "python.png",
            tasks: [
                {
                    title: "Script d'automatisation de tests",
                    subtitle: ["Automatisation de process manuels", "Envoi de mails de rapport"]
                }
            ]
        }, {
            image: "automic.png",
            tasks: [
                {
                    title: "Amélioration de script",
                    subtitle: []
                }, {
                    title: "Maintenance des process",
                    subtitle: []
                }, {
                    title: "Developpement de script d'automatisation",
                    subtitle: []
                },
            ]
        }, {
            image: "angular.jpeg",
            tasks: [
                {
                    title: "Developpement Application",
                    subtitle: ["Developpemet d'une application pour améliorer le monitoring sur l'environement"]
                }
            ]
        },
    ]
},
{
    title: "Stage Ingenieur Cloud DevOps",
    company: "Excellium",
    dates: "Mars 2024 - Aout 2024",
    logo:"excellium.png",
    jobs: [
        {
            image: "ansible.png",
            tasks: [
                {
                    title: "Developpement de scripts d'automatisation avec ansible",
                    subtitle: ["configuration de firewall", "Installation et configuration VPN "]
                }
            ]
        }, {
            image: "react.png",
            tasks: [
                {
                    title: "Developpement d'Applicqtion web",
                    subtitle: ["Appllication de gestion de la nomenclature pour un client"]
                }
            ]
        }, {
            image: "docker.png",
            tasks: [
                {
                    title: "Pipline azure Devops de sécurisation d'images Docker",
                    subtitle: ["Scan, Signature et mise dans le cloud d'image Docker"]
                }
            ]
        }, {
            image: "python.png",
            tasks: [
                {
                    title: "Developpement de scripts de verification des règles firewall",
                    subtitle: ["Développement d'un script ayant pour objectif d'améliorer et de faire un nettoyage des règles de firewall "]
                }
            ]
        },
    ]
},
{
    title: "Stage Developpeur Web",
    company: "BIAC Log SA",
    dates: "Juin 2023 - Aout 2023",
    logo:"biac.png",
    jobs: [
        {
            image: "vue.png",
            tasks: [
                {
                    title: "Developpement d'application web",
                    subtitle: ["Réalisation de pages pour répondres aux nouvelles demandes du clients"]
                }
            ]
        }, {
            image: "dot_net.png",
            tasks: [
                {
                    title: "Developpement API",
                    subtitle: ["Optimisation d'algorithme", "Developpement de routes api"]
                }
            ]
        },
    ]
}
]
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
    linkedin: "https://www.linkedin.com/in/dilettachiaro/",
    github: "https://github.com/dilettachiaro",
    scholar: "https://scholar.google.com/citations?user=n1VGy-gAAAAJ&hl=it",
    medium: "https://medium.com/@diletta.chiaro",
  };
  export { conferences, informations, experiences, educations, awards, links,articles, my_researches };
  