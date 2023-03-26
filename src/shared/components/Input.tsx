import {Input as ChakraInput, type InputProps} from '@chakra-ui/react';

export const Input: React.FC<InputProps> = ({...props}) => (
	<ChakraInput
		mt={2}
		color='white'
		bg='black.default'
		border='1px solid'
		borderColor='border.default'
		{...props}
	/>
);
