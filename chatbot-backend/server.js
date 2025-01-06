import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";


const app = express();
const port = 5000;


app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());


const resumeData = {
  name: "Sonika Panth",
  contact: {
    phone: "+91-7000747396",
    email: "sonikapanth782000@email.com",
    profiles: {
      leetcode: true,
      geeksforgeeks: true,
      github: true,
      linkedin: true
    }
  },
  
  education: [
    {
      institution: "Motilal Nehru National Institute Of Technology, Allahabad",
      degree: "Master of Computer Application (MCA)",
      period: "2022-present",
      score: "CGPA: 7.4"
    },
    {
      institution: "St.Paul Institute Of Professional Studies",
      degree: "Bachelor of Science (Computer Science)",
      period: "2018-2021",
      score: "Percentage: 73.09"
    },
    {
      institution: "St.Joseph's School",
      degree: "Class XII (PCM)",
      period: "2017-2018",
      score: "Percentage: 72.6"
    },
    {
      institution: "St.Joseph's School",
      degree: "Class X",
      period: "2015-2016",
      score: "CGPA: 9.2"
    }
  ],

  projects: [
    {
      title: "Alumni Connection Hub",
      period: "May 2024",
      techStack: ["ReactJS", "Tailwind", "NodeJS", "ExpressJS", "MongoDB"],
      description: "A networking platform specifically for MCA students at MNNIT",
      features: [
        "Connect current students with alumni from different graduating years",
        "Login, signup, update profile, logout functionalities",
        "Search and Filter functionality",
        "Batchwise sort, genderwise sort of students",
        "Real-Time group chat implementation"
      ],
      github: true
    },
    {
      title: "Super Store",
      period: "September 2024",
      techStack: ["HTML", "CSS", "JavaScript", "MySQL", "PHP", "SQL"],
      description: "A superstore sales management system",
      features: [
        "Multiple login types: Admin, store, and distributor",
        "Admin: Responsible for Centralized Store and Distributor",
        "Distributors: Respond to store orders",
        "Store: Located at various parts of the country",
        "Store Manager: Involved in Stock and Sales Management"
      ],
      github: true
    }
  ],

  skills: {
    languages: ["C", "C++", "HTML", "CSS", "JavaScript", "SQL", "PHP"],
    frameworksAndLibraries: ["ReactJS", "Tailwind"],
    databases: ["MySQL"],
    softSkills: ["Leadership", "Reading", "Writing", "Time Management"]
  },

  coursework: [
    "Operating System",
    "Database Management System",
    "Object-Oriented Programming",
    "Data Structure and Algorithms"
  ],

  achievements: [
    {
      title: "Secured Rank under top 30 in BIT MESHRA 2022",
      year: "2022"
    },
    {
      title: "Solved 800+ problems across all platforms",
      period: "2022-2024"
    }
  ]
};

export default resumeData;

// Route to handle chat requests
app.post("/api/chat", async (req, res) => {
  const { query } = req.body;
  
  try {
    let response = "";
    const lowercaseQuery = query.toLowerCase();

    // Skills related queries
    if (lowercaseQuery.includes("skills") || lowercaseQuery.includes("technologies")) {
      if (lowercaseQuery.includes("programming") || lowercaseQuery.includes("languages")) {
        response = `I am proficient in these programming languages: ${resumeData.skills.languages.join(", ")}`;
      } else if (lowercaseQuery.includes("framework")) {
        response = `I have experience with these frameworks and libraries: ${resumeData.skills.frameworksAndLibraries.join(", ")}`;
      } else if (lowercaseQuery.includes("database")) {
        response = `I am familiar with these databases: ${resumeData.skills.databases.join(", ")}`;
      } else if (lowercaseQuery.includes("soft")) {
        response = `My soft skills include: ${resumeData.skills.softSkills.join(", ")}`;
      } else {
        response = `My technical skills include:
          Languages: ${resumeData.skills.languages.join(", ")}
          Frameworks & Libraries: ${resumeData.skills.frameworksAndLibraries.join(", ")}
          Databases: ${resumeData.skills.databases.join(", ")}`;
      }
    }
    // Education related queries
    else if (lowercaseQuery.includes("education") || lowercaseQuery.includes("study")) {
      const education = resumeData.education[0]; // Most recent education
      response = `I am currently pursuing ${education.degree} at ${education.institution} with ${education.score}`;
    }
    // Project related queries
    else if (lowercaseQuery.includes("project")) {
      const projects = resumeData.projects;
      if (lowercaseQuery.includes("recent")) {
        const recent = projects[0];
        response = `My most recent project is ${recent.title}, built using ${recent.techStack.join(", ")}. ${recent.description}`;
      } else {
        response = `I have worked on ${projects.length} major projects, including:
          1. ${projects[0].title}: ${projects[0].description}
          2. ${projects[1].title}: ${projects[1].description}`;
      }
    }
    // Achievement related queries
    else if (lowercaseQuery.includes("achievement")) {
      response = resumeData.achievements.map(ach => `- ${ach.title} (${ach.year || ach.period})`).join("\n");
    }
    // Contact related queries
    else if (lowercaseQuery.includes("contact") || lowercaseQuery.includes("email") || lowercaseQuery.includes("phone")) {
      response = `You can reach me at:
        Email: ${resumeData.contact.email}
        Phone: ${resumeData.contact.phone}`;
    }
    // Coursework related queries
    else if (lowercaseQuery.includes("course")) {
      response = `My relevant coursework includes: ${resumeData.coursework.join(", ")}`;
    }
    // Default response for unhandled queries
    else {
      response = await getChatbotResponse(query);
    }

    res.json({ answer: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error processing the query." });
  }
});

async function getChatbotResponse(query) {
 
  try {
    const apiKey = "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";  
    const openAiUrl = "https://api.openai.com/v1/completions";

    const response = await axios.post(
      openAiUrl,
      {
        model: "gpt-3.5-turbo", 
        messages: [
          {
            role: "user",
            content: query,
          },
        ],
        temperature: 0.7,
        max_tokens: 150,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error with model API:", error);
    return "I'm sorry, I couldn't understand your query.";
  }
}

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
