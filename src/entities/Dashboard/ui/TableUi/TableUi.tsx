import { ChangeEvent, memo, useCallback, useMemo, useState } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
} from '@mui/material';
import './TableUi.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { PTag } from '@/shared/ui/Paragraph/P';
import { headCells, rows } from '../../model/selectors/data';
import { HeadCell } from '../../model/types/data';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { PaginationUi } from '@/shared/ui/PaginationUi/PaginationUi';

export const TableUi = memo(() => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	// console.log(
	// 	'>>>>>>>>>>>',
	// 	page * rowsPerPage,
	// 	page * rowsPerPage + rowsPerPage
	// );
	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
		setRowsPerPage(Math.floor(rows.length / rowsPerPage));
	};

	const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	const CellKyes = useMemo(() => {
		const cells = headCells.map((cel) => cel.id);
		return cells;
	}, []);

	const enhancedTableHead = useCallback((headerCells: HeadCell[]) => {
		return (
			<TableHead>
				<TableRow>
					{headerCells?.map((headerCell) => (
						<TableCell key={headerCell.id}>{headerCell.label}</TableCell>
					))}
				</TableRow>
			</TableHead>
		);
	}, []);

	return (
		<VStack max className="TableUi" gap={1}>
			<HStack justify="between" max>
				<HStack gap={1}>
					<PTag tage="14SemiBold" className="header">
						Connected Recuts
					</PTag>
					<PTag tage="14SemiBold" className="header">
						Total: {rows.length} Athletes
					</PTag>
				</HStack>
				<span>...</span>
			</HStack>
			<TableContainer>
				<Table
					sx={{ minWidth: 750 }}
					aria-labelledby="tableTitle"
					size="medium"
				>
					{enhancedTableHead(headCells)}
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								return (
									<TableRow role="cell" key={row.Recruit}>
										{CellKyes.map((item) => {
											if (item === 'DashboardInfo') {
												return (
													<TableCell key={item} align="center">
														<ButtonUi
															style={{ padding: '4px 8px' }}
															layOut="TextOnly"
															theme="secondary"
															size="M"
														>
															View details
														</ButtonUi>
													</TableCell>
												);
											}
											return <TableCell key={item}>{row[item]}</TableCell>;
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<HStack max justify="end">
				<PaginationUi
					count={Math.floor(rows.length / rowsPerPage) + 1}
					handleChange={handleChangePage}
					page={page}
				/>
			</HStack>
			{/* <TablePagination
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/> */}
		</VStack>
	);
});
