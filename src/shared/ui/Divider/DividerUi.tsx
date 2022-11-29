import { Divider } from '@mui/material';
import { memo } from 'react';
import { PTag } from '../Paragraph/P';
import './Divider.scss';

export interface DividerUiProps {
  text?: string;
}
export const DividerUi = memo(({ text }: DividerUiProps) => {
  return (
    <div className="DividerUi">
      <Divider
        orientation="horizontal"
        flexItem
        textAlign="center"
        variant="middle"
      >
        <PTag tage="14Reg">{text}</PTag>
      </Divider>
    </div>
  );
});
