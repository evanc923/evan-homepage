import Link from 'next/link'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import FamilyIcon from './icons/familyIcon'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(45deg);
  }
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>
        <LogoBox>
            <FamilyIcon />
            <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight="bold"
            ml={3}
            >
            Evan Chan
            </Text>
        </LogoBox>
    </Link>)
  );
}

export default Logo
