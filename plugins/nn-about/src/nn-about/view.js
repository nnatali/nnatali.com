/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console
console.log( 'Hello World! (from create-block-nn-about block)' );
eslint-enable no-console */

// const sectionRef = useRef(null);
//   const circleRef = useRef(null);
//   const meRef = useRef(null);
//   const cursorHandlers = useCursorHandlers();

//   function moveCircle(){
//     const section = sectionRef.current;
//     const sectionPosition = section.getBoundingClientRect().top;
//     let translate = (sectionPosition - section.offsetHeight);
//     if (isMobile || isTablet) {
//       circleRef.current.style.transform = 'translateX('+(translate * 0.6)+'px)';
//     } else {
//       circleRef.current.style.transform = 'translateY('+(translate)+'px)';
//     }
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', moveCircle);
//     return () => window.removeEventListener('scroll', moveCircle);
//   }, []);

function moveCircle(){
	document.querySelectorAll('.nn-about').forEach(section => {
		const sectionPosition = section.getBoundingClientRect().top + (window.innerHeight * 0.25);
		const circle = section.querySelectorAll('.nn-about_circle')[0];
		let translate = (sectionPosition - section.offsetHeight);
		if (window.innerWidth < 999) {
			circle.style.transform = 'translateX('+(translate * 0.6)+'px)';
		} else {
			circle.style.transform = 'translateY('+(translate)+'px)';
		}
	});
}

window.addEventListener('scroll', moveCircle);
