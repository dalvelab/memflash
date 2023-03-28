import {useState, useEffect} from 'react';
import {Flex, Button, Text} from '@chakra-ui/react';

import {InputGroup} from './InputGroup';

type QuestionProps = {
	question: string;
	handleAnswer: (e: React.FormEvent<HTMLFormElement>, input: string) => void;
	steps: number;
};

export const Question: React.FC<QuestionProps> = ({
	question,
	steps,
	handleAnswer,
}) => {
	const [input, setInput] = useState('');

	useEffect(() => () => {
		setInput('');
	}, [steps]);

	return (
		<Flex w='full' flexDirection='column' gap={3}>
			<Text color='gray.400' fontSize='lg'>
        Enter the translation for next word
			</Text>
			<Text color='blue.default' fontWeight={500} fontSize='3xl'>
				{question}
			</Text>
			<form onSubmit={e => {
				handleAnswer(e, input);
			}}>
				<Flex flexDir='column'>
					<InputGroup
						label=''
						size='lg'
						type='text'
						name='answer'
						value={input}
						onChange={e => {
							setInput(e.target.value);
						}}
					/>
					<Button mt={4} type='submit' size='lg' colorScheme='green'>
						Submit
					</Button>
				</Flex>
			</form>
		</Flex>
	);
};
