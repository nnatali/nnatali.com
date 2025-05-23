/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * RichText import allows us to create editable text fields.
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Imports InnerBlocks which allows us to use core React.js blocks.
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	let { className, ...rest } = useBlockProps.save();
    className = className + ' nn-project';
    const blockProps =  { ...rest, className };
	const nnProjectTemplate = [
		[ 'core/heading', { placeholder: 'Kicker' } ],
		[ 'core/heading', { placeholder: 'Title' } ],
		[ 'core/paragraph', { placeholder: 'Summary' } ],
		[ 'core/list', { placeholder: 'Skills' } ],
		[ 'core/video', {} ],
	];
	return (
		<div { ...blockProps }>
			<div className="container">
				<InnerBlocks
					template={ nnProjectTemplate }
				/>
			</div>
		</div>
	);
}
