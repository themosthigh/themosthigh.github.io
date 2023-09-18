import type { TechnicalExperience } from "./types";

export const technicalExperience: TechnicalExperience[] = [
	{
		technology: "JavaScript",
		description:
			"General-purpose OOP programming language for the web, mobile and server",
		icon: "skill-icons:javascript",
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
		icon: "skill-icons:typescript",
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
		icon: "skill-icons:golang",
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
		icon: "skill-icons:c",
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
		icon: "skill-icons:rust",
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
		technology: "MySQL",
		icon: "skill-icons:mysql-dark",
		tags: ["database"],
		description: "Relations Database Management System",
		expertiseRating: 4,
		preferenceRating: 4,
		projects: ["my-sql-database"],
	},
	{
		technology: "Postgresql",
		icon: "skill-icons:postgresql-dark",
		tags: ["database"],
		description: "Relations Database Management System",
		expertiseRating: 2,
		preferenceRating: 5,
		projects: ["f-otm"],
	},
	{
		technology: "Java",
		icon: "skill-icons:java-dark",
		tags: ["programming language", "backend", "mobile"],
		description:
			"General purpose programming language for mobile and backend applications",
		expertiseRating: 5,
		preferenceRating: 3,
		projects: ["3D JavaFX rendering", "JavaFX Calculator", "Redis/MySQL server"],
	},
	{
		technology: "Flutter",
		icon: "skill-icons:flutter-dark",
		tags: ["mobile", "cross-platform"],
		description: "Performant UI library written in the dart programming language",
		expertiseRating: 3,
		preferenceRating: 4,
		projects: ["Din (Quran and Sunna) mobile application"],
	},
	{
		technology: "I use Arch BTW!",
		icon: "skill-icons:linux-dark",
		tags: ["desktop", "systems", "open-source"],
		description:
			"ArchLinux is a lightweight and flexible Linux distribution that is known for its performance and customization options.",
		expertiseRating: 4,
		preferenceRating: 5,
		projects: ["Daily driver"],
	},
];
