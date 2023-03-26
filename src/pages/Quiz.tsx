import {useState} from 'react';
import {Box, Button, Flex, Text, Progress} from '@chakra-ui/react';
import {useParams, useNavigate} from 'react-router-dom';
import {useQuery} from 'react-query';

import {Question} from 'shared/components/Question';

import {fetchQuiz} from 'entities/quiz/api/api';

const defaultResult = {
	correct: 0,
	incorrect: 0,
};

export const Quiz: React.FC = () => {
	const navigate = useNavigate();
	const {id} = useParams();

	const {isLoading, error, data, isFetching} = useQuery(
		['quiz  ', id],
		async () => fetchQuiz(id),
		{
			enabled: Boolean(id),
		},
	);

	const [steps, setSteps] = useState(0);
	const [answers, setAnswers] = useState(defaultResult);

	function handleAnswer(input: string) {
		if (input.toLowerCase() === data?.questions[steps].answer) {
			setSteps(steps + 1);
			setAnswers({...answers, correct: answers.correct + 1});
			return;
		}

		setSteps(steps + 1);
		setAnswers({...answers, incorrect: answers.incorrect + 1});
	}

	function handleRestart() {
		setSteps(0);
		setAnswers(defaultResult);
	}

	return (
		<Box
			bg='black.default'
			w='full'
			h='100vh'
			display='flex'
			justifyContent='center'
			alignItems='center'
		>
			{data !== undefined && steps !== data.questions.length ? (
				<Box
					bg='black.header'
					p={5}
					border='1px solid'
					borderColor='border.default'
					borderRadius='md'
				>
					<Box mb={6}>
						<Button mb={4} colorScheme='gray' onClick={() => {
							navigate('/');
						}}>
              Back
						</Button>
						<Flex mt={6} gap={3} flexDir='column'>
							<Text color='white' fontSize='lg'>
								{steps + 1} of {data.questions.length}
							</Text>
							<Progress
								colorScheme='green'
								size='sm'
								value={steps === 0 ? 0 : (steps / data.questions.length) * 100}
								borderRadius={2}
							/>
						</Flex>
					</Box>
					<Question
						question={data.questions[steps].question}
						handleAnswer={handleAnswer}
						steps={steps}
					/>
				</Box>
			) : (
				<Flex flexDir='column' gap={3} bg='black.header'>
					<Text color='white' fontSize='3xl'>
            Finished
					</Text>
					<Text color='white' fontSize='2xl'>
            Correct: {answers.correct}, Wrong: {answers.incorrect}
					</Text>
					<Button colorScheme='gray' onClick={handleRestart}>
            Start Again
					</Button>
				</Flex>
			)}
		</Box>
	);
};
