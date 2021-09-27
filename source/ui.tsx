import React, { FC } from "react";
import { Newline, Text } from "ink";
import { randomIntegerInRange } from "./utils";
import { keywords, replaceWord, sentences } from "./data";

const sentence = (): string => {
	const keyword: string =
		keywords[randomIntegerInRange(0, keywords.length - 1)]!;
	const sentence = sentences[randomIntegerInRange(0, sentences.length - 1)]!;

	return sentence.replace(replaceWord, keyword);
};

const App: FC<{ numberOfTalks?: number }> = ({ numberOfTalks = 1 }) => {
	const generatedSentences: string[] = [...Array(numberOfTalks)].map(() =>
		sentence()
	);
	if (numberOfTalks === 1) {
		return (
			<Text>
				You should talk about: <Text color="green">{sentence()}</Text>
			</Text>
		);
	}
	return (
		<Text>
			{generatedSentences.map((s, i) => (
				<Text key={i}>
					{s}
					<Newline />
				</Text>
			))}
		</Text>
	);
};

module.exports = App;
export default App;
