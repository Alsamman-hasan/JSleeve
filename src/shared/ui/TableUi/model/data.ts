import { Data, HeadCell } from './types/data';

function createData(
	Recruit: string,
	Age: number,
	Gender: string,
	Height: number,
	Weight: number,
	Location: string,
	DominantHand: string,
	FG: number,
	FGAccuracy: number,
	JSR: number,
	DashboardInfo: any
): Data {
	return {
		Recruit,
		Age,
		Gender,
		Height,
		Weight,
		Location,
		DominantHand,
		FG,
		FGAccuracy,
		JSR,
		DashboardInfo,
	};
}

export const rows = [
	createData(
		'Drew Cano',
		14,
		'Male',
		67,
		4.3,
		'test',
		'DominantHand',
		1,
		1,
		1,
		'rere'
	),
	createData(
		'Jack Stevens',
		15,
		'Male',
		51,
		4.9,
		'test2',
		'DominantHand',
		2,
		2,
		2,
		'ds'
	),
	createData(
		'Conrad Blank',
		11,
		'Female',
		24,
		6.0,
		'test3',
		'DominantHand',
		12,
		12,
		12,
		'f'
	),
	createData(
		'Melissa Adams',
		18,
		'Male',
		24,
		4.0,
		'test5',
		'DominantHand',
		15,
		15,
		15,
		15
	),
	createData(
		'Peter Barber',
		16,
		'Female',
		49,
		3.9,
		'test6',
		'DominantHand',
		56,
		56,
		56,
		56
	),
	createData(
		'Bruce Watson',
		13,
		'Male',
		87,
		6.5,
		'test4',
		'DominantHand',
		34,
		34,
		34,
		34
	),
	createData(
		'Ice cream sandwich',
		27,
		'Male',
		37,
		4.3,
		'test4',
		'DominantHand',
		67,
		67,
		67,
		67
	),
	createData(
		'Jelly Bean',
		35,
		'Female',
		94,
		0.0,
		'test4',
		'DominantHand',
		78,
		78,
		78,
		78
	),
	createData(
		'KitKat',
		18,
		'Male',
		65,
		7.0,
		'test4',
		'DominantHand',
		87,
		87,
		87,
		87
	),
	createData(
		'Lollipop',
		32,
		'Female',
		98,
		0.0,
		'test5',
		'DominantHand',
		65,
		65,
		65,
		65
	),
	createData(
		'Marshmallow',
		18,
		'Male',
		81,
		2.0,
		'test56',
		'DominantHand',
		56,
		56,
		56,
		56
	),
	createData(
		'Nougat',
		36,
		'Male',
		9,
		37.0,
		'test3',
		'DominantHand',
		67,
		67,
		67,
		67
	),
	createData(
		'Oreo',
		37,
		'Female',
		63,
		4.0,
		'test2',
		'DominantHand',
		97,
		97,
		97,
		97
	),
];

export const headCells: readonly HeadCell[] = [
	{
		id: 'Recruit',
		label: 'Recruit',
	},
	{
		id: 'Age',
		label: 'Age',
	},
	{
		id: 'Gender',
		label: 'Gender',
	},
	{
		id: 'Height',
		label: 'Height',
	},
	{
		id: 'Weight',
		label: 'Weight',
	},
	{
		id: 'Location',
		label: 'Location',
	},
	{
		id: 'DominantHand',
		label: 'Dominant Hand',
	},
	{
		id: 'FG',
		label: 'FG %',
	},
	{
		id: 'FGAccuracy',
		label: 'FG Accuracy %',
	},
	{
		id: 'JSR',
		label: 'JSR',
	},
	{
		id: 'DashboardInfo',
		label: 'Dashboard info',
	},
];
