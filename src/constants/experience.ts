import type { TechnicalExperience } from "./types";

export const technicalExperience: TechnicalExperience[] = [
	{
		technology: "JavaScript",
		description:
			"General-purpose OOP programming language for the web, mobile and server",
		icon: "mdi:language-javascript",
		tags: ["programming language", "web", "mobile", "desktop", "backend"],
		expertiseRating: 5,
		preferenceRating: 4,
		projects: [
			"Countless web applications",
			"Wowzi Technologies frontend (web and mobile)",
		],
	},
	{
		technology: "TypeScript",
		description: "A type-safe version of JS",
		icon: "mdi:language-typescript",
		tags: ["programming language", "web", "mobile", "desktop", "backend"],
		expertiseRating: 5,
		preferenceRating: 5,
		projects: [
			"Countless web applications",
			"Wowzi Technologies frontend (web and mobile)",
		],
	},

	{
		technology: "Go",
		icon: "mdi:language-go",
		tags: ["programming language", "backend"],
		description: "The best programming language ever made",
		expertiseRating: 5,
		preferenceRating: 5,
		projects: [
			"BF language parser",
			"Multiple servers",
			"CLI-based notes-taking application",
		],
	},
	{
		technology: "C",
		description: "Low level systems programming",
		icon: "mdi:language-c",
		tags: ["programming language", "systems"],
		expertiseRating: 4,
		preferenceRating: 3,
		projects: [
			"Clone of the tar file compression software",
			"File system (school project)",
		],
	},
	{
		technology: "Rust",
		icon: "mdi:language-rust",
		tags: ["programming language", "backend"],
		description:
			"Rust is a multi-paradigm, general-purpose programming language for high and low-level programming",
		expertiseRating: 2,
		preferenceRating: 1,
		projects: ["my-rust-web-server", "my-rust-embedded-system"],
	},
	{
		technology: "MongoDB",
		icon: "skill-icons:mongodb",
		tags: ["database management", "database"],
		description: "Document-oriented database",
		expertiseRating: 5,
		preferenceRating: 4,
		projects: [],
	},
	{
		technology: "SQL",
		icon: "skill-icons:mysql-light",
		tags: ["database", "data science"],
		description: "Relations database definition and management language",
		expertiseRating: 5,
		preferenceRating: 5,
		projects: ["my-sql-database", "my-sql-data-science-project"],
	},
	{
		technology: "Java",
		icon: "skill-icons:java-light",
		tags: ["programming language", "backend", "mobile"],
		description:
			"General purpose programming language for mobile and backend applications",
		expertiseRating: 5,
		preferenceRating: 3,
		projects: ["3D JavaFX rendering", "JavaFX Calculator", "Redis/MySQL server"],
	},
	{
		technology: "Flutter",
		icon: "skill-icons:flutter-light",
		tags: ["mobile", "cross-platform"],
		description: "Performant UI library written in the dart programming language",
		expertiseRating: 3,
		preferenceRating: 4,
		projects: ["din"],
	},
	{
		technology: "I use Arch BTW!",
		icon: "mdi:linux",
		tags: ["desktop", "systems"],
		description:
			"ArchLinux is a lightweight and flexible Linux distribution that is known for its performance and customization options. It is a popular choice for power users and developers.",
		expertiseRating: 4,
		preferenceRating: 5,
		projects: ["daily driver"],
	},
];
