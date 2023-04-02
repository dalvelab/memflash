import {chakra, Box, Flex, Heading, Button} from '@chakra-ui/react';

import {InputGroup} from 'shared/components';

export const Login = () => (
	<chakra.section
		w='full'
		display='flex'
		justifyContent='center'
		alignItems='center'
	>
		<Flex
			w='sm'
			p={6}
			bg='black.header'
			flexDir='column'
			borderRadius='lg'
			border='1px solid'
			borderColor='border.default'
		>
			<Heading alignSelf='center' color='white'>
          Sign In
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
			<Button size='lg' colorScheme='green' mt={4}>
          Sign In
			</Button>
		</Flex>
	</chakra.section>
);
