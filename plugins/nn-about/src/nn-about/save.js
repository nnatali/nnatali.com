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
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( {attributes}) {
	const { title, text } = attributes;
	let { className, ...rest } = useBlockProps.save();
    className = className + ' nn-about';
    const blockProps =  { ...rest, className };

	return (
		<section { ...blockProps }>
			<div className="container">
				{/* Render the saved content of the image block
				{ title && <RichText.Content className='nn-about_title' tagName="h2" value={ title } /> }
				{ text && <RichText.Content className='nn-about_text' tagName="div" multiline="p" value={ text } /> }
				<div className="nn-about_image">
					<InnerBlocks.Content />
				</div>
				<span className="nn-about_circle"></span>*/}
				<InnerBlocks.Content />
				<span className="nn-about_circle"></span>
			</div>
		</section>
	);
}
