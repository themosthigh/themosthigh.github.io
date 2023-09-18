import type { TechnicalExperience } from "./types";

export const technicalExperience: TechnicalExperience[] = [
	{
		technology: "C",
		description: "Low level systems programming",
		icon: "devicon:c",
		tags: ["programming language", "systems"],
		expertiseRating: 4,
		preferenceRating: 3,
		projects: [
			"Clone of the tar file compression software",
			"File system (school project)",
		],
	},
	{
		technology: "JavaScript",
		description:
			"General-purpose OOP programming language for the web, mobile and server",
		icon: "devicon:javascript",
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
		icon: "devicon:typescript",
		tags: ["programming language", "web", "mobile", "desktop", "backend"],
		expertiseRating: 5,
		preferenceRating: 5,
		projects: [
			"Countless web applications",
			"Wowzi Technologies frontend (web and mobile)",
		],
	},
];
