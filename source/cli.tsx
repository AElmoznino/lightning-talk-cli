#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './ui';

const cli = meow(`
	Usage
	  $ lightning-talk-cli

	Options
		--numberOfTalks  Number of talks to generate

	Examples
	  $ lightning-talk-cli --numberOfTalks=3
	  Your 1st talk will list here
	  Your 2nd talk will list here
	  Your 3rd talk will list here
`, {
	flags: {
		numberOfTalks: {
			type: 'number'
		}
	}
});

render(<App numberOfTalks={cli.flags.numberOfTalks}/>);
