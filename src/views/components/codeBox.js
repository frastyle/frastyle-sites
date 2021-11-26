import React from 'react';
import { Prism as Highlighter } from 'react-syntax-highlighter';
import { codeStyle } from './styleCodeBox';

const codeBox = (props) => {
	// eslint-disable-next-line no-undef
	let ADDED = (props.addCode || '').split(',');
	for (let i = 0; i < ADDED.length; i++) {
		ADDED[i] = parseInt(ADDED[i]);
	}
	// eslint-disable-next-line no-undef
	let REMOVED = (props.removeCode || '').split(',');
	for (let i = 0; i < REMOVED.length; i++) {
		REMOVED[i] = parseInt(REMOVED[i]);
	}

	return (
		<div
			className={'bg-dark-1 my-2 ' + (props.className ?? '')} style={{ borderRadius: '1em' }}>
			<Highlighter
				language={props.lang}
				style={codeStyle}
				data-value='content'
				wrapLines={true}
				showLineNumbers={true}
				lineNumberStyle={{ display: 'none' }}
				lineProps={(line) => {
					let style = { display: 'block' };
					if (ADDED.includes(line)) {
						style.backgroundColor = '#40e64026';
					} else if (REMOVED.includes(line)) {
						style.backgroundColor = '#e6404026';
					}
					return { style };
				}}>
				{props.children.replace(/^\s+|\s+$/g, '')}
			</Highlighter>
			<button
				className='button-primary clipboard'
				// eslint-disable-next-line no-undef
				onClick={clipboard}
				data-success='Kode disalin'>
				Salin kode
			</button>
		</div>
	);
};

export default codeBox;
