import { ButtonUi } from 'shared/ui/Button/Button';
import { HStack, VStack } from 'shared/ui/Stack';
import ArrowIcont from 'shared/assets/icons/Arrow.svg';
import { InputUi } from 'shared/ui/Input/ui/InputUi/InputUi';
import { Wrapper } from 'shared/ui/Wrapper/Wrapper';
import BascIcon from 'shared/assets/icons/Basketball.svg';

import { CardUi } from 'shared/ui/Card/Card';
import { memo, useState } from 'react';
import { AvatarName } from 'shared/ui/Avatar';

const BasIcon = memo(() => <BascIcon />);

export const UiKit = () => {
  const [selected, setSelected] = useState<string | number | null>(null);
  const onSelect = (value: string | number | null) => {
    setSelected(value);
  };
  return (
    <Wrapper>
      <VStack
        gap="10px"
        justify="between"
        align="center"
        style={{ paddingTop: '100px' }}
      >
        <CardUi
          value="1"
          onSelect={onSelect}
          title="Recruiter Account"
          Icon={BasIcon}
          selected={selected}
          subTitle="I’m looking for professional athletes"
        />
        <CardUi
          value="2"
          selected={selected}
          onSelect={onSelect}
          title="Recruiter Account"
          Icon={BasIcon}
          subTitle="I’m looking for professional athletes"
        />

        <AvatarName
          job="testteestest"
          name="Test-Testing"
          src="https://i.guim.co.uk/img/media/a7fe7170defa865d2b96b829f05c5d8fa82d8edf/0_20_2201_1321/master/2201.jpg?width=1200&quality=85&auto=format&fit=max&s=860ee271cce4b3ac0f97cb7c48f5842d"
        />
      </VStack>
    </Wrapper>
  );
};
