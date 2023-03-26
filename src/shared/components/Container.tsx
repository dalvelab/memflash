import {type ReactNode} from 'react';

import {chakra, type StyleProps} from '@chakra-ui/react';

type ContainerProps = {
	children: ReactNode;
} & StyleProps;

export const Container: React.FC<ContainerProps> = ({children, ...props}) => {
	const containerBase = {
		display: 'flex',
		width: 'container.xl',
	};

	return (
		<chakra.div __css={{...containerBase}} {...props}>
			{children}
		</chakra.div>
	);
};
