export interface WorkExperience {
	company: string;
	companyUrl?: string;
	companyLogoUrl?: string;
	position: string;
	description: string;
}

export type TechnicalTag =
	| "programming language"
	| "database management"
	| "database"
	| "data vis"
	| "data science"
	| "web"
	| "backend"
	| "mobile"
	| "cross-platform"
	| "desktop"
	| "open-source"
	| "source control"
	| "design"
	| "systems";

export interface TechnicalExperience {
	technology: string;
	icon: string;
	tags: TechnicalTag[];
	description: string;
	expertiseRating: Number;
	preferenceRating: Number;
	projects: string[];
}



// convert Technical tag to a string array
export function getTags(tag: TechnicalTag): string[] {
  return [tag];
}
