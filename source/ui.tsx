import React, {FC} from 'react';
import {Text} from 'ink';
import { randomIntegerInRange } from './utils'
import { keywords, replaceWord, sentences} from './data'


const sentence = (): string => {

	const keyword: string = keywords[randomIntegerInRange(0, keywords.length - 1)]!;
	const sentence = sentences[randomIntegerInRange(0, sentences.length - 1 )]!;

	return sentence.replace(replaceWord, keyword)
}

const App: FC<{name?: string}> = () => (
	<Text>
		{/* Hello, <Text color="green">{name}</Text> */}
		You should talk about: <Text color="green">{sentence()}</Text>
	</Text>
);

module.exports = App;
export default App;
