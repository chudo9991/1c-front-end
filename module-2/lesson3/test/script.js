let quotation = document.getElementById("quotation"),
    source = document.getElementById("source");

function randomQuote() {
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    quotation.innerText = `“${random.quote}.”`;
    source.innerText = random.source;
    };

const quotes = [
	{ 
		"quote" : "The only sin is ignorance", 
		"source" : "Christopher Marlowe" 
	},
	{
		"quote" : "A man is his own easiest dupe, for what he wishes to be true he generally believes to be true", 
		"source" : "Demosthenes"
	},
	{
		"quote" : "A lie can travel halfway around the world while the truth is putting on its shoes", 
		"source" : "Mark Twain"
    },
    {
		"quote" : "У нас получилось и оно работает", 
		"source" : "Мы."
    }];

randomQuote();

