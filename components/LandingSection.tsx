import { Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';

import { JoinUsButton } from './JoinUsButton';

type LandingSectionProps = {
  title: string;
  description: string;
  imageSrc: string;
  reversed?: boolean;
  withButton?: boolean;
};

export const LandingSection: React.FC<LandingSectionProps> = ({
  title,
  description,
  imageSrc,
  reversed = false,
  withButton = false,
}) => {
  const titleFontSize = { base: '5xl', lg: '6xl', xl: '7xl' };
  const descFontSize = { base: 'xl', xl: '2xl' };
  const padding = { base: 8, xl: 16 };
  return (
    <SimpleGrid columns={2} gap={8}>
      <VStack
        spacing={0}
        my={32}
        pl={reversed ? 0 : padding}
        pr={reversed ? padding : 0}
        align="flex-start"
        textAlign="left"
      >
        <Text fontWeight="bold" fontSize={titleFontSize}>
          {title}
        </Text>
        <Text fontWeight="light" fontSize={descFontSize}>
          {description}
        </Text>
        {withButton && <JoinUsButton pt={8} />}
      </VStack>
      <Flex
        pos="relative"
        h="100%"
        gridColumnStart={reversed ? 1 : 2}
        gridRowStart={1}
        _before={{
          content: '""',
          h: '50rem',
          width: '250%',
          top: '55%',
          left: reversed ? undefined : '3rem',
          right: !reversed ? undefined : '3rem',
          transform: 'translateY(-45%)',
          pos: 'absolute',
          bg: `url(${imageSrc})`,
          bgPos: reversed ? 'right center' : 'left center',
          bgRepeat: 'no-repeat',
        }}
      />
    </SimpleGrid>
  );
};
