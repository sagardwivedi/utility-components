import type React from 'react';
import { Fragment } from 'react';

/**
 * Props for the Each component.
 */
interface EachProps<T> {
	/** The array of items to render. */
	of: T[];
	/**
	 * A function that renders each item in the array.
	 * @param item - The current item to be rendered.
	 * @param index - The index of the current item in the array.
	 * @returns The JSX element representing the rendered item.
	 */
	render: (item: T, index: number) => React.ReactNode;
}

/**
 * A component for rendering each item in an array using a provided rendering function.
 * @template T - The type of items in the array.
 * @param {EachProps<T>} props - The props for the Each component.
 * @returns {JSX.Element | null} The rendered JSX or null if the array is empty.
 */
const Each = <T,>({ of = [], render }: EachProps<T>): JSX.Element | null => {
	// If the array is empty, return null
	if (of.length === 0) return null;

	// Map each item in the array to its rendered representation
	return (
		<>
			{of.map((item, index) => (
				<Fragment key={index}>{render(item, index)}</Fragment>
			))}
		</>
	);
};

export default Each;
