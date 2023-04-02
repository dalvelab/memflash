import {useState} from 'react';
import {Box, Button, Flex, Text, chakra} from '@chakra-ui/react';
import {useParams, useNavigate} from 'react-router-dom';
import {useQuery} from 'react-query';

import {fetchQuiz, QuestionCard} from 'entities/quiz';
import {QuestionForm} from 'features/quiz';

const defaultResult = {
	correct: 0,
	incorrect: 0,
};

export const QuizChallenge: React.FC = () => {
	const navigate = useNavigate();
	const {id} = useParams();

	const {isLoading, error, data} = useQuery(
		['quiz  ', id],
		async () => fetchQuiz(id),
		{
			enabled: Boolean(id),
		},
	);

	const [steps, setSteps] = useState(0);
	const [answers, setAnswers] = useState(defaultResult);

	function handleAnswer(e: React.FormEvent<HTMLFormElement>, input: string) {
		e.preventDefault();

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
		<chakra.section
			bg='black.default'
			w='full'
			h='100vh'
			display='flex'
			justifyContent='center'
			alignItems='center'
		>
			<Box
				w='container.sm'
				bg='black.header'
				p={5}
				border='1px solid'
				borderColor='border.default'
				borderRadius='md'
			>
				<Button mb={4} colorScheme='gray' onClick={() => {
					navigate('/');
				}}>
          Back
				</Button>
				{data !== undefined && steps !== data.questions.length && (
					<>
						<QuestionCard steps={steps} setSteps={setSteps} questions={data.questions} />
						<Box mt={6}>
							<QuestionForm
								question={data.questions[steps].question}
								handleAnswer={handleAnswer}
								steps={steps}
							/>
						</Box>
					</>
				)}
				{steps === data?.questions.length && (
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
		</chakra.section>
	);
};
