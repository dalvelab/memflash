import {Box, type InputProps, FormControl, FormLabel} from '@chakra-ui/react';
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
		<FormControl>
			<FormLabel color='gray.200' htmlFor={name} fontSize='lg'>
				{label}
			</FormLabel>
			<Input mt={1} color='white' name={name} {...props} />
		</FormControl>
	</Box>
);
