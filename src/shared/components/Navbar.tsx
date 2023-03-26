import {Flex, Link, Text, Heading} from '@chakra-ui/react';
import {Link as ReactRouterLink} from 'react-router-dom';

import {Container} from './Container';

export const Navbar = () => (
	<Flex
		w='full'
		h={16}
		p={4}
		bg='black.header'
		gap={2}
		justifyContent='center'
		alignItems='center'
		position='fixed'
		left={0}
		top={0}
		zIndex={2}
	>
		<Container
			color='white'
			alignItems='center'
			justifyContent='space-between'
		>
			<Link as={ReactRouterLink} to='/'>
				<Heading color='white' fontSize='3xl'>
            MemFlash
				</Heading>
			</Link>
			<Flex gap={6}>
				<Link
					_hover={{color: 'gray.300'}}
					fontWeight={500}
					as={ReactRouterLink}
					to='quiz/create'
				>
            Create Quiz
				</Link>
				<Link
					_hover={{color: 'gray.300'}}
					fontWeight={500}
					as={ReactRouterLink}
					to='auth/signin'
				>
            Login
				</Link>
				<Link
					_hover={{color: 'gray.300'}}
					fontWeight={500}
					as={ReactRouterLink}
					to='auth/signup'
				>
            Register
				</Link>
			</Flex>
		</Container>
	</Flex>
);
