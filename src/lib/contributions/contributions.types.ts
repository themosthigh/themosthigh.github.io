export type Contribution = {
	contributionCount: number;
	color: string;
};

export type Week = {
	contributionDays: Contribution[];
};

export type Weeks = Week[];
