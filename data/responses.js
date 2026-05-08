const generalResponse = [
	'Goth Juice is the most powerful hairspray known to man. Made from the tears of Robert Smith.',
	'I’ll come at you fast, like a northern bullet.',
	'I’ll put a move on you, you won’t know what’s happening.',
	'I’ve felt your moves. How flimsy are they? They’re like being caressed with a natural yoghurt.',
	'First post, yeah. The post that hurts the most.',
	'I’ll take you out for a meal with Mr. and Mrs. Pain. Order up some violent quiche.',
	'Feels like nothing, but that’s the vibrating palm. You feel alright now, but two hours from now, you’ll go to a shop, you’ll buy a hat, it won’t suit you. Owww! Chicka-chick-aaaah.',
	'There’s no way. Look at me. My hair’s virtually a hat. All hats suit me.',
	'People get trapped in cabinets all the time.',
	'Captain Cabinets, trapped in cabinets, can he get out, will he get out, ’course he will!',
	'You’re about as edgy as a satsuma!',
	'If I see a boundary, I eat a boundary. And wash it down with a cup of hot steaming rules.',
	'You better run along, Dangermouse.',
	'I’ve spoken to Leeroy. He said he saw you dancing for Fossil in the moonlight, in little blue pants.',
	'He was giving you coin, you were giving him booty.',
	'And that’s why I don’t like cricket!',

	'The tie is a multi-purpose accessory, y’know. Belt, school boy, Rambo...',
	'Seriously though, you should check out my icy wardrobe. This is the glam rock ski suit.',
	'It’s so cutting edge, it goes out of date every three hours. Can’t get it in shops. It’s delivered by ninjas.',
	'Never eat another man’s applause!',
	'I do the costumes, you do the music. And this, my friend, represents a major breakthrough on the sewing machine.',
	'The written word is like a drug. If you cut me, I bleed ink.',
	'I was walking through Camden the other day, and I saw you in a skip, weeping.',
	'Yorkshire is a place. Yorkshire is a state of mind.',
	'My uncle once punched a man so hard his legs became trombones.',
	'I don’t accessorise. I’m Howard Moon. There’s a simple truth to me.',
	'This is not a dress. This is the sacred robe of the ancient psychedelic monks.',
	'Put away those fiery biscuits...',
	'C’mon Bollo, get your monkey anus at the steering wheel!',
	'I do many things. I span the genres – they call me The Genre Spanner.',
	'Vince, you’ve gone wrong.',
	// 'Crouton! Crouton! Crunchy friends in a liquid broth.',
	// 'Miso! Miso! Fighting in the dojo. Miso! Miso! Oriental prince in the land of soup!',
	'Soup, soup, a tasty, soup soup,\nSpicy carrot and coriander\n[Chilli Chowder!]\nCROUTON CROUTON!\nCrunchy friends in a liquid broth!\nI am gazpacho oh!\nI am a summer soup oh!\nMiso, Miso,\nFighting in the Dojo,\nMiso, Miso,\nOriental prince in the land of SOUP!',
	'Colon Explorer?',
	'Calm a llama down\nCalm a llama deep down\nIn the ocean\nBlue like a barnacle\nSitting in a tight place\nLaughing like a monkey arm\nPulling like a China boy\nCarraway, carraway, carraway, noise!\nBoing, chi-ka, masala\nBoing, chi-ka, masala\nOoooooooh... Tooth! Tooth! *[inhale]*',
	'You haven’t seen my mate Howard, have you? Kinda tall, scruffy hair, small eyes like a crab?',
	'Cheese is a kind of meat\nA tasty yellow beef\nI milk it from my teat\nBut I try to be discrete',
	'Every time you pick up an instrument, I’ll be there inside ya, wearing ya like a glove!',
	'I’m gonna creep inside you like a warm kitten!',
	'Under closer inspection I realised it was a funky ball of tits from outer space.',
	'It’s an outrage. An outrage!',
	'This is an outrage! Saboo, you slag!',
	'I come fully equipped with a papoose! I slip into it like a peanut. If you don’t like the papoose system I have a wheel that clicks into place under my chin.',
	'Must I assemble this Kinder Egg?',
	'I have a problem. It’s to do with the little man, the squashed-in French man, the naked little squashed up hairy boy! You know? With the hand feet? The brown little hand foot man.',
	'I don’t buffet about in the winds of fashion. Fashion may come and go. Howard Moon remains where he is.',
	'Do you need to pack this Jacobean ruff?',
	'Have you ever had a mountain goat grab you by the scrotum and run away with it and then sell it on eBay a day later?',
	'You ever been rohypnoled by a swan, woke up in Cancun?',
	'That’s not a novel. That’s the scribblings of a retard, Vince.',
	'Do I look like a reasonable man to you, or a peppermint nightmare?',
	'You can’t even reach the pedals, you cleft.',
	'I can’t drive, I’m shitfaced!',
	'You *are* a bladder.',
	'That’s a pretty big mood swing. He swung right out of the band there.',
	'Let us see what is behing the Door of Kukundu!',
	'You’re a French duke if ever I saw one. You lay around on hammocks all day eating soft cheese.',
	'Speak English, fool. Your face is confusing enough.',
	'You know nothing of the crunch! How dare you even speak of the crunch? You’ve never even been to the crunch.',
	'My god. As smooth as the bonnet of a Porsche.',
	'Onward! To Oddbins!',
	'What is your beef with the Mac?\nThe same beef every right-thinking man has: they are bullshit-munchers.',
	'The box is there for a reason; to keep ball-men like you inside it.',
	'Argh, my pancreas!',
	'I’ve had a breakthrough. I think I found a new note in between B and C. I always knew it was there. I’m gonna call it Howard’s Note.',
	'I’ll tell you how it works, right? I took a note, sawtooth wave, right off this Pantomime Four, ran it back here, re-jammed it through itself, looped it back, mixed it with the sound of this crab committing suicide, and let it stew in its own reverb for about three hours, right? And then I pump it all out through this shoe, to give it that oaky timbre.',
	'Cyborg Patrick, tell me what you dream\nClockwork Margaret, skating on my mouse mat\nIn your tiny circuit boots, shoes of the future!\nTrousers of the past!',
	'If you want to say something, speak the plain English. Don’t run around the house in a little car.',
	'Rudy, you ought to get that door in your head checked out. It’s letting in all sorts of mambo jimbo.',
	'Your wife was not just free with me. She was free with everyone.',
	'My wife was like all women: strange... and evil!',
	'Spider Dijon: You keep trying to mould me into something I’m not! Well, you cannot make milk into cheese!\nRudi van Disarzio: Yes, you can.\nSpider: Bad example!',
	'This is like Woodstock all over again. The idea is you play, and then you scram; but oh no, you wouldn’t listen, would you? You wanted to hang around, didn’t you? And then we got roped into tidying up! You, me, and Carlos Santana; hoovering for six weeks!',
	'You’re absurd. Daltrey doesn’t hoover for no one. He is his own man!',
	'Here it is written that a musician may find... The New Sound.',
	'You better start getting the magic potions out Mowgli, or we’re gonna hurt you.',
	'It’s the tears of Mozart... mixed with the urine of Mark Knopfler.',
	'I’ll be, myself, participating in that as a porpoise jockey in the porpoise derby. Don’t know if you’ve ever seen a man ride a porpoise, but it can be thrilling.',
	'All the great front men work with animals. Jagger worked in a pet shop. Rod Stewart worked in a tortoise sanctuary. Billy Ocean worked in an aquarium. That’s how he got his name.',
];

const jazzResponse = [
	'I hate jazz.',
	'You fear jazz!',
	'You hate jazz? You fear jazz!',
	'You fear jazz! You fear the lack of rules.',
	'He asked me to play Blue Train by John Coltrane at his funeral. I couldn’t really find that. But I found another song about a train.',
	'Funk is jazz’s deformed cousin.',
	'I want to be the greatest jazz player in Yorkshire.',
	'All he needs now is a tall Northern jazzy freak with a moustache and no dress sense.',
];

const theMoonResponse = [
	'When you are the moon, there is a person people say is the sun. I saw the sun once, and he came past me, really fast. And it was an, it was called, the, an eclipse. And he came fast! But as he came past, I licked his back. And he doesn’t know I licked his back! All in his yellow suit! I’m the moon.',
	'When you are the moon, the best form you can be is a full moon. And then the half moon... he’s all right. But the full moon is the famous moon. And then three-quarters, eh, no one gives a shit about him. When does he come, two days in, to the calendar month? He’s useless. Full moon. The moon. The main moon.',
	'One time, I saw a man looking at me, yes, with his eyes. And then, he, he picked up a tube. And he looked, in the tube, and he made the moon big, inside the tube. The moon big inside a tube!',
	'Here’s a poem, from the moon.\n_Neil Armstrong, walking on my face._\n_Buzz Aldrin, walking on my face._\n_And the third one is a space man, walking on my face._\n*All on the surfaces, and they’re looking at all of the stuff that the moon has got.*\nYeah.',
	'And some say, Old Gregg is like a, a big fish finger, but big! Like um, like a garage. As big as a garage. Imagine that fish finger, when you can see it as big as a garage, oh! It isn’t small, it’s the big one! Like that.',
];

const responses = {
	generalResponse,
	jazzResponse,
	theMoonResponse,
};

function buildResponses() {
	const allResponses = [];

	allResponses.general = [];
	responses.generalResponse.forEach((generalResp) => {
		allResponses.general.push(generalResp);
	});
	allResponses.jazz = [];
	responses.jazzResponse.forEach((jazzResp) => {
		allResponses.jazz.push(jazzResp);
	});
	allResponses.theMoon = [];
	responses.theMoonResponse.forEach((theMoonResp) => {
		allResponses.theMoon.push(theMoonResp);
	});

	// console.dir(allResponses);
	return allResponses;
}

module.exports = function () {
	const responses = buildResponses();
	return responses;
}



