import Pagination from '@mui/material/Pagination';
import { ChangeEvent, memo } from 'react';
import { HStack } from '../Stack';
import './Pagination.scss';

export interface PaginationProps {
	count: number;
	page: number;
	handleChange?: (event: React.ChangeEvent<unknown>, value: number) => void;
}
export const PaginationUi = memo((props: PaginationProps) => {
	const { count, page, handleChange } = props;
	return (
		<HStack gap={1} className="PaginationUi">
			<Pagination
				count={count}
				variant="text"
				shape="rounded"
				page={page}
				onChange={handleChange}
			/>
		</HStack>
	);
});
