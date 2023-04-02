import {chakra, Box, Flex, Heading, Button} from '@chakra-ui/react';

import {InputGroup} from 'shared/components';

export const Register = () => (
	<chakra.section
		w='full'
		display='flex'
		justifyContent='center'
		alignItems='center'
	>
		<Flex
			w='sm'
			mt={6}
			p={4}
			bg='black.header'
			flexDir='column'
			borderRadius='lg'
			border='1px solid'
			borderColor='border.default'
		>
			<Heading alignSelf='center' color='white'>
          Sign Up
			</Heading>
			<Box mt={4}>
				<InputGroup
					label='Email'
					name='email'
					size='lg'
					placeholder='Email'
				/>
			</Box>
			<Box mt={4}>
				<InputGroup
					label='Password'
					name='password'
					size='lg'
					placeholder='Password'
				/>
			</Box>
			<Box mt={4}>
				<InputGroup
					label='Repeat password'
					name='password_repeat'
					size='lg'
					placeholder='Repeat password'
				/>
			</Box>
			<Button size='lg' colorScheme='green' mt={4}>
          Sign Up
			</Button>
		</Flex>
	</chakra.section>
);
