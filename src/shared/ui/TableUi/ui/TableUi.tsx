import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import './TableUi.scss';
import { PTag } from '../../Paragraph/P';
import { HStack, VStack } from '../../Stack';
import { headCells, rows } from '../model/data';

function EnhancedTableHead() {
	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell key={headCell.id}>{headCell.label}</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

export const TableUi = React.memo(() => {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<VStack max className="TableUi">
			<HStack>
				<PTag tage="14SemiBold">Connected Recuts</PTag>
			</HStack>
			<TableContainer>
				<Table
					sx={{ minWidth: 750 }}
					aria-labelledby="tableTitle"
					size="medium"
				>
					<EnhancedTableHead />
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								return (
									<TableRow role="cell" key={row.Recruit}>
										<TableCell>{row.Recruit}</TableCell>
										<TableCell>{row.Age}</TableCell>
										<TableCell>{row.Gender}</TableCell>
										<TableCell>{row.Height}</TableCell>
										<TableCell>{row.Weight}</TableCell>
										<TableCell>{row.Location}</TableCell>
										<TableCell>{row.DominantHand}</TableCell>
										<TableCell>{row.FG}</TableCell>
										<TableCell>{row.FGAccuracy}</TableCell>
										<TableCell>{row.JSR}</TableCell>
										<TableCell align="center">{row.DashboardInfo}</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</VStack>
	);
});
