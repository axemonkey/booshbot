const { App } = require('@slack/bolt');
const responses = require('./data/responses');

// change this to configVars if running locally
const BooshBot = new App({
	token: process.env.SLACK_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
	appToken: process.env.SLACK_APP_TOKEN,
	socketMode: true,
});

const GENERAL_REGEXP =
	/vince|noir|howard|naboo|boosh|mighty|bollo|noel|fielding|julian|barratt|gideon|shaman|fossil|zoo|bainbridge|crimp|soup|matt berry|herb|whizz|mick jagger|gorilla|jungle|tundra|monk|robe|door|spider|dijon|rudy|rudi|ladder|coins|goth|nana|hitcher|polo/gi;
const JAZZ_REGEXP = /jazz|fusion/gi;
const THE_MOON_RESPONSE = /moon/gi;
const ROLLCALL_REGEXP = /(rollcall|roll call)/gi;

const checkForRollcall = (text) => {
	if (text) {
		return ROLLCALL_REGEXP.test(text);
	}
	return false;
};

const checkForJazz = (text) => {
	if (text) {
		return JAZZ_REGEXP.test(text);
	}
	return false;
};

const checkForTheMoon = (text) => {
	if (text) {
		return THE_MOON_RESPONSE.test(text);
	}
	return false;
};

const checkForGeneral = (text) => {
	if (text) {
		return GENERAL_REGEXP.test(text);
	}
	return false;
};

const getResponse = (type) => {
	const responsesOfType = responses()[type];
	const pluckResponse = Math.floor(Math.random() * responsesOfType.length);
	return responsesOfType[pluckResponse];
};

BooshBot.message(async ({ message, say }) => {
	if (checkForRollcall(message.text)) {
		const rollcallResponse = getResponse('general');
		await say(rollcallResponse);
	} else if (checkForJazz(message.text)) {
		const jazzResponse = getResponse('jazz');
		await say(jazzResponse);
	} else if (checkForTheMoon(message.text)) {
		const theMoonResponse = getResponse('theMoon');
		await say(theMoonResponse);
	} else if (checkForGeneral(message.text)) {
		const generalResponse = getResponse('general');
		await say(generalResponse);
	}
});

console.log('Starting BooshBot...');
BooshBot.start(3003);
