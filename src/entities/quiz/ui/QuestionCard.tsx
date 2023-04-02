import {Flex, Text, Progress, Box} from '@chakra-ui/react';

import {type Question} from '../model';

type QuestionCardProps = {
	steps: number;
	setSteps: (step: number) => void;
	questions: Question[];
};

export const QuestionCard: React.FC<QuestionCardProps> = ({steps, questions}) => (
	<>
		<Flex mt={6} gap={3} flexDir='column'>
			<Text color='white' fontSize='lg'>
				{steps + 1} of {questions.length}
			</Text>
			<Progress
				colorScheme='green'
				size='sm'
				value={steps === 0 ? 0 : (steps / questions.length) * 100}
				borderRadius={2}
			/>
		</Flex>
	</>
);
