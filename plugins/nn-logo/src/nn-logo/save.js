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
export default function save( {attributes} ) {
    const { claim } = attributes;
	let { className, ...rest } = useBlockProps.save();
    className = className + ' nn-logo';
    const blockProps =  { ...rest, className };

	return (
        <header { ...blockProps } id="nnLogo">
			<div className="container">
				<h1><span>Nelly</span><span>Natali</span></h1>
				{ claim && <RichText.Content tagName="h2" value={ claim } /> }
			</div>
        </header>
    );
}
