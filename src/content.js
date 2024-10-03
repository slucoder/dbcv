const shibbolethLink = {
  linkText: "Shibboleth Consortium",
  linkUrl: "https://www.shibboleth.net/",
};
const kendoLink = {
  linkText: "Telerik Kendo",
  linkUrl: "https://www.telerik.com/",
};
const cssLink = {
  linkText: "CSS",
  linkUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
};
const dotnetLink = {
  linkText: "ASP.NET Core",
  linkUrl: "https://dotnet.microsoft.com/en-us/apps/aspnet",
};
const azureLink = {
  linkText: "Azure Pipelines",
  linkUrl: "https://azure.microsoft.com/en-us/products/devops/pipelines/",
};
const tsxLink = {
  linkText: "TypeScript",
  linkUrl: "https://www.typescriptlang.org/",
};
const sqlLink = {
  linkText: "SQL Server",
  linkUrl: "https://www.microsoft.com/en-us/sql-server/sql-server-2022",
};
const javascriptLink = {
  linkText: "Javascript",
  linkUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
};
const workdayLink = {
  linkText: "Workday",
  linkUrl: "https://www.workday.com/",
};
const xmlLink = {
  linkText: "XML",
  linkUrl: "https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction",
};
const sfsLink = {
  linkText: "Student Fiscal Services",
  linkUrl: "https://finance.uw.edu/sfs/",
};
const bootstrapLink = {
  linkText: "Bootstrap",
  linkUrl: "https://getbootstrap.com/",
};
const csharpLink = {
  linkText: "C#",
  linkUrl: "https://learn.microsoft.com/en-us/dotnet/csharp/",
};
const jqueryLink = {
  linkText: "jQuery",
  linkUrl: "https://jquery.com/",
};
export const hero = {
  mvp: {
    firstName: "Don",
    lastName: "Brown",
    location: "Seattle, USA",
    title: "Software Engineer",
    interests: [{ name: "Joggling" }, { name: "Cycling" }],
  },
};
export const projects = [
  {
    title: "Workday Fiancial Conversion, University of Washington (UW)",
    links: [
      workdayLink,
      dotnetLink,
      sqlLink,
      javascriptLink,
      cssLink,
      tsxLink,
      kendoLink,
      azureLink,
      csharpLink,
    ],
    synopsis:
      "UW committed to interfacing all billing to the Workday Financial Management ERP as of Fall 2023. All custom finance software at UW had until that time to become security-compliant and Workday capable. I oversaw the developent of this technology to replace legacy software for the Student Fiscal Services (SFS) department. We created secure, web-based technology which utilized existing UW resources to successfully link SFS staff with all necessary IT systems, including UW Workday. New functionality added to the solution automated tme-consuming tasks that were previously done by hand and eye.",
    technology: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "HTML|CSS|Javascript",
      "Typescript",
      "Telerik Kendo",
      "Azure CID",
    ],
  },
  {
    title: "Student Fiscal Services (SFS) Workday Upgrade",
    links: [
      sfsLink,
      shibbolethLink,
      kendoLink,
      cssLink,
      dotnetLink,
      azureLink,
      tsxLink,
      sqlLink,
    ],
    synopsis:
      "Sunsetting SFS's relic administrative software and replacing it with its Workday-integrated solution was my primary task as developemnt lead. I provisioned server resources and implemented Shibboleth security using UW's existing IT structure. SFS data was ported to SQL Server. All custom code was resourced in Github. Final web application met all security requirements and successfully interfaced SFS with Workday.",
    technology: [
      "ASP.NET Core",
      "C#",
      "Azure CID",
      "SQL Server",
      "HTML|CSS|Javascript",
      "Telerik Kendo",
      "Mainframe",
    ],
  },
  {
    title: "Workday Worktag Translation, UWMC Information Security",
    links: [workdayLink],
    synopsis:
      "Workday changes rolled out quickly for UW Medical Center (UWMed) and backlogs were problematic. I developed data and scripting technology to automate the translation of legacy UWMed work codes into Workday-compliant 'Worktags'. This eliminated the manual processes in place - freeing staff to more effectively serve the students.",
    technology: ["Workday", "ASP.NET", "SQL Server"],
  },
  {
    title: "Shibboleth Security Implementation",
    links: [dotnetLink, sqlLink, shibbolethLink, xmlLink],
    synopsis:
      "Security was an immediate concern for the SFS Financial solution: actual data was used during web testing. By configuring Shibboleth with the SFS Web Server, I secured all SFS web sites with UW domain credentials already used by SFS staff.",
    technology: ["ASP.NET Core", "Shibboleth", "SQL Server", "XML"],
  },
  {
    title: "Pathology Projects : BPath | MPath",
    links: [{ bootstrapLink, dotnetLink, csharpLink, sqlLink, jqueryLink }],
    synopsis:
      "BPath and MPath studied the efficacy of digital images versus physical biopsy slides when reviewed for cancerous pathology patterns. To reach the goals, we built custom software allowing Pathologists to analyze detailed digital images with high-resolution zoom.  ----.....",
    technology: [""],
  },
  {
    title: "SQL Creation Scripts Upgrade",
    links: [],
    synopsis:
      "SQL schematic scripts required to deploy B2B middleware regularly caused errors, requiring staff to complete data installations and upgrades. I implemented re-usable, dynamic code modules to reduce code base and improve error reporting. I implemented services reporting to gather runtime performance data for improvement and error analyses.",
    technology: ["SQL"],
  },
];
export const projectsSkills = [
  {
    title: "Site Navigation",
    topics: [
      {
        name: "Start Here",
        experience: "Navigating This Site",
        links: [],
        synopsis:
          "Leaf through headings with pointers at far ◄left and right► on screen. Each page hosts a subject. Each Shining Star on the page expands to reveal the details of that subject, exactly as this message has done.",
        technology: [],
      },
      {
        name: "Contact",
        experience: "Contact Don Brown",
        links: [],
        synopsis:
          "Click this Star to open the Contact form! Or at any point, click the the 'Contact' link below the page banner to send a custom message!",
        technology: [],
      },
      {
        name: "Shining Stars",
        experience: "",
        links: [],
        synopsis:
          "'Shining Stars' hold details about the headings. Hover each Shining Star to display more information. Shining Stars are animated using React, Javascript, Typescript and TailwindCSS.",
        technology: [],
      },
      {
        name: "About",
        experience: "About Don Brown",
        links: [],
        synopsis:
          "Don Brown: experienced Software Engineer developing solutions for retail, health care, business-to-business, non-profit and educational environments. Don Brown offers deep IT skills to best fit the business needs with the most scalable and efficient technology. Resumé upon request, please use my Contact Form!",
        technology: [],
      },
    ],
  },
  {
    title: "Scripting",
    topics: [
      {
        name: "Javascript",
        experience: "10+ years",
        links: [],
        synopsis:
          "Javascript was initially a robust client-side tool for used for validation and user experience. Development libraries such as jQuery then made Javascript a very handy tool for web APIs and asynchronous calls. V8 Engine expanded Javascript robustness to include server-side capabilities, allowing for pure Javascript developemnt environmnets such as Node.js. This website is created using Javascript architectures Node.js with React.",
        technology: [],
      },
      {
        name: "jQuery, Bootstrap",
        experience: "10+ years",
        links: [],
        synopsis:
          "Robust, plug-and-lay Javascript / CSS library set which made rapid, RESTful development even faster. The heavy lifting with Javascript and CSS is alrady done.for the developer, leaving room for creatvity and 'testing the limits'.",
        technology: [],
      },
      {
        name: "TypeScript (TSX)",
        experience: "3+ years",
        links: [],
        synopsis:
          "Typescript (TSX) brings strong, custom typing to Javascript's weak typing - putting regular Javascript on par with venerable dotNET's typing granularity. Writing and compiling with TSX prevents innumerable errors within the CID cycle. Prior to TSX the devlopers (I, we) were compelled to write custom scripts to type and validate objects, or risk unknown and often silect exceptions upon deployment.",
        technology: [],
      },
      {
        name: "C#",
        experience: "15+ years",
        links: [],
        synopsis:
          "Powerful script I have used to construct several solutions from web applications that gather large amounts of user-response data to desktop applications that are able to perform complex applications without compromising the CPU. This truly is a workhorse script. In learning C# I have learned to read and use other similar scripts such as Java, C+ and Python.",
        technology: [],
      },
      {
        name: "Python",
        experience: "4 years",
        links: [],
        synopsis:
          "User-friendliness, excellent I/O capabilities and the wealth of open-source data-analysis functionality make this a go-to script for educators and researchers.",
        technology: [],
      },
      {
        name: "PowerShell",
        experience: "12+ years",
        links: [],
        synopsis:
          "High-level script, PowerShell enables piping of objects from server to server, porting files, porting logic,examining remote server status and countless other tasks end-to-end. Essential tool for all engineers.",
        technology: [],
      },
    ],
  },
  {
    title: "Data",
    topics: [
      {
        name: "tSQL & SQL Server",
        experience: "15+ years",
        links: [],
        synopsis:
          "From SQL 2000 to the current SQL 2024, this workhorse has served the majority of my solutions that require data collection, security and manipulation. tSQL includes vast built-in functionality that prevents developers from 're-inventing their wheels' and keeps current with industry CID needs. From SQL Management Studio one can write, analyze, tune and deploy SQL code from the unified workspace.",
        technology: [],
      },
      {
        name: "tSQLt",
        experience: "2+ years",
        links: [],
        synopsis: "Indispensible unit-testing tool when migrating SQL data systems or developing Enterprise-level SQL Server solutions. Well-formed tSQLt enforces atomic-level logic checks, compilation checks and custom schematics checks for all SQL components introduced to the CID. This greatly reduces run-time errors and guarantees uniformity of SQL code. Robust SQL Server data schematics begin with tSQLt Unit Tests.",
        technology: [],
      },
      {
        name: "Stored Procedure",
        experience: "15+ years",
        links: [],
        synopsis:
          "Stored Procedures (sprocs) are powerful, re-usable queries, which can manipulate data, provide business logic, and communicate data within Server layers. Sprocs typically have several tSQLt unit tests to pass before being incorporated into the code body because of their high availability. ",
        technology: [],
      },
      {
        name: "Optimization",
        experience: "15+ years",
        links: [],
        synopsis:
          "Optimization involves analyzing and adjusting SQL instructions so that they perform at ideal speed while making the lightest possible demands on Server resources. Internal tools such as SQL Query Analyzer and Profiler help isolate the most costly SQL statements. Indexing, normalization, leverging innate functions over custom functions are all first steps in Optimization.",
        technology: [],
      },
      {
        name: "Security",
        experience: "15+ years",
        links: [],
        synopsis: "SQL Server offers database acounts, database roles, enterprise encryption, user accounts, user roles and user schemas to define security unique to the business solution.",
        technology: [],
      },
    ],
  },
  {
    title: "Web",
    topics: [
      {
        name: "NodeJS, React",
        experience: "1+ years",
        links: [],
        synopsis:
          "This site designed using NodeJS and with React architecture.",
        technology: [],
      },
      {
        name: "TailwindCSS",
        experience: "1+ years",
        links: [],
        synopsis: "This site styled with TailwindCSS which limits or obviates the messiness of writing custom CSS classes. TailwindCSS is packed with innate functionality and is highly configurable which makes CSS  .",
        technology: [],
      },
      {
        name: "Docker",
        experience: "1+ years",
        links: [],
        synopsis:
          "Destroyed a PC installing and uninstalling Docker on it.",
        technology: [],
      },
      { name: "HTML5", experience: "10+ years", synopsis: "I took advantage of the new standards when they became available in 2008 because it offers built-in solutions to the commonest problem: interoperability." },
      {
        name: "CSS",
        experience: "15+ years",
        links: [],
        synopsis:
          "  They perform dances that mimic the movements of animals and plants, symbolizing the renewal of life. The Spring Awakening is also a time for planting new seeds and making wishes for the future. Trolls believe that the energy of the festival helps to awaken the spirits of the forest and bring about a prosperous season.",
        technology: [],
      },
    ],
  },
  {
    title: "Projects",
    topics: [
      {
        name: "Workday Fiancial Conversion",
        experience: "University of Washington (UW)",
        links: [],
        synopsis:
          "UW committed to interfacing all billing to the Workday Financial Management ERP as of Fall 2023. All custom finance software at UW had until that time to become security-compliant and Workday capable. I oversaw the developent of this technology to replace legacy software for the Student Fiscal Services (SFS) department. We created secure, web-based technology which utilized existing UW resources to successfully link SFS staff with all necessary IT systems, including UW Workday. New functionality added to the solution automated tme-consuming tasks that were previously done by hand and eye.",
        technology: [
          "ASP.NET Core",
          "C#",
          "SQL Server",
          "HTML|CSS|Javascript",
          "Typescript",
          "Telerik Kendo",
          "Azure CID",
        ],
      },
      {
        name: "",
        experience: "",
        links: [],
        synopsis: "",
        technology: [],
      },
      {
        name: "",
        experience: "",
        links: [],
        synopsis: "",
        technology: [],
      },
      {
        name: "",
        experience: "",
        links: [],
        synopsis: "",
        technology: [],
      },
      {
        name: "",
        experience: "",
        links: [],
        synopsis: "",
        technology: [],
      },
      {
        name: "",
        experience: "",
        links: [],
        synopsis: "",
        technology: [],
      },
    ],
  },
  {
    title: "About",
    topics: [
      {
        name: "Chants and Songs",
        experience: "",
        synopsis:
          "Some trolls play small, hand-held harps made from twisted branches and spider silk strings. The gentle plucking of the harp strings creates a soothing and harmonious sound, often used during more reflective and solemn moments of their celebrations.",
      },
      {
        name: "Harvest Feast",
        experience: "",
        synopsis:
          "Trolls also use their voices to create music. They sing ancient chants and songs passed down through generations, often in a language known only to them. These vocal performances are filled with emotion and storytelling, adding a rich and personal layer to the music.",
      },
    ],
  },
];
export const biography = {
  header: "Biographicals",
  legend: "About Don Brown Software Engineer",
  summary: [
    {
      title: "Language",
      content:
        "Languages have been instinctive to me. I learned this when I began my second spoken language, German, and found that skill cross-applies to human computer languages. My interest in language still applies.",
    },
    {
      title: "bio foo",
      content:
        "Drums are the heartbeat of troll music. Made from hollowed-out tree trunks and covered with animal hides, these drums produce deep, resonant sounds that echo through the forest. The rhythmic beats of the drums set the pace for dances and rituals, creating a powerful and grounding energy.",
    },
    {
      title: "bio hoo",
      content:
        "Donzo was known to prefer harsh language over physical conflict.",
    },
    {
      title: "bio roo",
      content:
        "Donzo had a fearsome aspect. In times of war, he could summon gales of such ferocity... yet, even in his wrath, Donzo was just - his storms were never directed at those who sought Rock-N-Roll.",
    },
    {
      title: "bio koo",
      content:
        "If you listen you can hear the ancient god Donzo, screaming his wisdom at the stupid poseurs.",
    },
  ],
};
