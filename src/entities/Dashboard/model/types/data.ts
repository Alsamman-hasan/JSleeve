export interface Data {
	Recruit: string;
	Age: number;
	Gender: string;
	Height: number;
	Weight: number;
	Location: string;
	DominantHand: string;
	FG: number;
	FGAccuracy: number;
	JSR: number;
	DashboardInfo?: any;
}

export interface HeadCell {
	id: keyof Data;
	label: string;
}
