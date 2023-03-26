import {Box, chakra, type InputProps} from '@chakra-ui/react';
import {Input} from './Input';

type InputGroupProps = {
	label: string;
	name: string;
} & Omit<InputProps, 'name'>;

export const InputGroup: React.FC<InputGroupProps> = ({
	label,
	name,
	...props
}) => (
	<Box>
		<chakra.label color='gray.200' htmlFor={name} fontSize='lg'>
			{label}
		</chakra.label>
		<Input mt={2} color='white' name={name} {...props} />
	</Box>
);
