import { classNames } from 'shared/lib/classNames/classNames';
import {
  FC,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  memo,
  ReactNode,
  SVGProps,
  useCallback,
} from 'react';
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import './inputBtn.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

export interface InputBtniProps extends HTMLInputProps {
  className?: string;
  onChange?: (value: string) => void;
  label?: ReactNode;
  type?: HTMLInputTypeAttribute;
  Icon?: FC<SVGProps<SVGSVGElement>>;
  onIconClick?: () => void;
}

export const InputBtn = memo((props: InputBtniProps) => {
  const {
    className,
    onChange,
    label,
    type = 'text',
    Icon,
    onIconClick,
  } = props;
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const iconBtn = useCallback(() => {
    if (Icon) {
      return (
        <IconButton key={type} onClick={onIconClick}>
          <Icon />
        </IconButton>
      );
    }
    return null;
  }, [Icon, onIconClick, type]);

  return (
    <div className={classNames('Inputbtn', {}, [className])}>
      <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
        <OutlinedInput
          type="button"
          id="outlined-adornment-weight"
          value={label}
          onChange={onChangeHandler}
          startAdornment={
            <InputAdornment position="start">{iconBtn()}</InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
      </FormControl>
    </div>
  );
});
