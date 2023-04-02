import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
	chakra,
	Grid,
	Box,
	Flex,
	Heading,
	Text,
	Button,
	useToast,
} from '@chakra-ui/react';
import {useMutation} from 'react-query';

import {createQuiz, type Question} from 'entities/quiz';
import {QuizCardCreate} from 'features/quiz';
import {InputGroup} from 'shared/components';

export const CreateQuiz = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [questions, setQuestions] = useState<Question[]>([]);

	const navigate = useNavigate();
	const toast = useToast();

	const createQuizMutation = useMutation(
		async () =>
			createQuiz({
				title,
				description,
				questions,
			}),
		{
			onSuccess() {
				navigate('/');
				toast({
					title: 'Quiz created successfully',
					description: 'You can now challenge it!',
					status: 'success',
					duration: 2000,
					isClosable: true,
					position: 'top',
				});
			},
			onError(error: Error) {
				toast({
					title: 'Something went wrong',
					description: error.message,
					status: 'error',
					duration: 3000,
					isClosable: true,
					position: 'top',
				});
			},
		},
	);

	const addCard = () => {
		setQuestions([
			...questions,
			{
				question: '',
				answer: '',
			},
		]);
	};

	const deleteCard = (index: number) => {
		const questionsCopy = [...questions];
		questionsCopy.splice(index, 1);
		setQuestions(questionsCopy);
	};

	const onInputChange = (
		type: 'question' | 'answer',
		value: string,
		index: number,
	) => {
		const questionsCopy = [...questions];
		questionsCopy.splice(index, 1, {
			question: type === 'question' ? value : questions[index].question,
			answer: type === 'answer' ? value : questions[index].answer,
		});

		setQuestions(questionsCopy);
	};

	return (
		<chakra.section w='full' display='flex' flexDir='column'>
			<Flex mt={6} justifyContent='space-between' alignItems='center'>
				<Heading size='lg' fontWeight='medium' color='white'>
        Create new quiz
				</Heading>
				<Flex gap={3}>
					<Button colorScheme='gray'>Import</Button>
					<Button
						colorScheme='green'
						onClick={() => {
							createQuizMutation.mutate();
						}}
					>
            Create Quiz
					</Button>
				</Flex>
			</Flex>
			<Box
				mt={6}
				border='1px solid'
				borderColor='border.default'
				borderRadius='md'
			>
				<Grid p={4} gridTemplateColumns='1fr 1fr' bg='black.header' gap={5}>
					<InputGroup
						label='Title'
						name='title'
						size='lg'
						placeholder='Enter a title for your quiz'
						autoComplete='off'
						value={title}
						onChange={e => {
							setTitle(e.target.value);
						}}
					/>
					<InputGroup
						label='Description'
						name='description'
						size='lg'
						placeholder='Enter a description for your quiz'
						autoComplete='off'
						value={description}
						onChange={e => {
							setDescription(e.target.value);
						}}
					/>
					<InputGroup
						label='Subject (optional)'
						name='subject'
						size='lg'
						mt={3}
						placeholder='Select a subject from dropdown'
						autoComplete='off'
					/>
				</Grid>
			</Box>
			{questions.map((question, index) => (
				<QuizCardCreate
					key={index}
					question={question}
					index={index}
					onInputChange={onInputChange}
					onCardDelete={deleteCard}
				/>
			))}
			<Flex
				p={4}
				mt={5}
				mb={5}
				alignItems='center'
				justifyContent='center'
				bg='black.header'
				cursor='pointer'
				color='blue.default'
				onClick={addCard}
				border='1px solid'
				borderColor='border.default'
				borderRadius='md'
			>
				<Text fontSize='2xl' fontWeight='medium'>
          Add card
				</Text>
			</Flex>
		</chakra.section>
	);
};
