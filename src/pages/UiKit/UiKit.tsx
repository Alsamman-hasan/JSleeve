import { ButtonUi } from 'shared/ui/Button/Button';
import { HStack, VStack } from 'shared/ui/Stack';
import ArrowIcont from 'shared/assets/icons/Arrow.svg';
import { InputUi } from 'shared/ui/Input/ui/InputUi/InputUi';
import { Wrapper } from 'shared/ui/Wrapper/Wrapper';
import { useCallback, useState } from 'react';

export const UiKit = () => {
  const [value, setValue] = useState('');
  const onHandleChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  return (
    <Wrapper>
      <VStack
        gap="10px"
        justify="between"
        align="center"
        style={{ paddingTop: '100px' }}
      >
        <InputUi
          type="email"
          value={value}
          onChange={onHandleChange}
          label="name"
        />
      </VStack>
    </Wrapper>
  );
};
