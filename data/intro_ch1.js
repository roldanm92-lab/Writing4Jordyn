// ============ INTRODUCTION ============
section("intro", "Getting Started", "Why we write and how writers work", "#7c5cff", "🚀", [

lesson("i1", 5, "Why Do We Write?", "💭", [
  "Every piece of writing has a <b>purpose</b>, a reason it was written.",
  "<b>To entertain</b>: stories, jokes, poems. <b>To inform</b>: facts, how-to guides, news. <b>To persuade</b>: to get someone to agree or do something. <b>To express</b>: to share feelings, like in a diary or a thank-you note.",
  "Before you write, ask yourself: <i>What do I want my reader to think, feel, or do?</i>"
], [
  sort("Why was each one written?", ["Entertain", "Inform", "Persuade"], [
    ["A funny story about a dog who learns to skateboard", 0],
    ["A poster that says, “Vote for Maya for class president!”", 2],
    ["A page explaining how bees make honey", 1],
    ["An ad saying our lemonade is the best on the block", 2],
    ["A comic about a superhero hamster", 0],
    ["A school sign listing library hours", 1]
  ]),
  mc("A recipe card for banana bread was written mainly to…", ["entertain", "inform", "persuade"], 1, "A recipe gives information: what you need and what to do."),
  mc("Ella writes in her journal about how nervous she felt on the first day of school. Her purpose is to…", ["express her feelings", "persuade", "give directions"], 0, "Journals are for sharing your own thoughts and feelings."),
  write("Think of something you'd love to write: a story, a letter, a list, anything! What would it be, and what is its purpose?", { min: 15, tips: ["Name the kind of writing", "Say if it would entertain, inform, persuade, or express"] })
]),

lesson("i2", 6, "For Whom Do We Write?", "👥", [
  "Your <b>audience</b> is the person or people who will read your writing.",
  "You write differently for different readers. A text to your best friend can be silly and short. A note to your principal should be polite and use complete sentences.",
  "Ask: <i>Who will read this? What do they already know? What words will they understand?</i>"
], [
  sort("Which audience is each sentence written for?", ["A good friend", "The principal"], [
    ["Hey!! U coming to my party Sat?? 🎉", 0],
    ["Dear Mr. Lopez, I am writing to ask about the science fair.", 1],
    ["Thank you for taking the time to read my request.", 1],
    ["OMG that movie was SO funny lol", 0],
    ["Sincerely, Jordyn", 1],
    ["Guess what happened at recess!!", 0]
  ]),
  mc("You are writing directions for a 6-year-old. Which is best?", ["Rotate the receptacle 180 degrees.", "Turn the cup upside down.", "Proceed to invert the vessel."], 1, "Younger readers need simple, everyday words."),
  mc("Which one is NOT something to think about when you picture your audience?", ["What they already know", "What words they understand", "What color socks they wear"], 2),
  write("Tell some news (like getting a new pet) TWO ways: first to a friend, then to your teacher.", { min: 25, tips: ["Write a casual version for your friend", "Write a polite version for your teacher"] })
]),

lesson("i3", 7, "What Is the Writing Process?", "🔄", [
  "Writers don't get it perfect the first time. They follow steps:",
  "<b>1. Prewrite</b>: brainstorm ideas and plan. <b>2. Draft</b>: get your ideas down; mistakes are OK! <b>3. Revise</b>: make it better: add details, cut extra parts, choose stronger words. <b>4. Proofread</b>: fix spelling, capitals, and punctuation. <b>5. Publish</b>: share a neat final copy.",
  "You can go back to an earlier step any time. Writers do that a lot!"
], [
  order("Put the steps of the writing process in order.", ["Prewrite", "Draft", "Revise", "Proofread", "Publish"]),
  mc("Sam adds a sentence describing the smell of the campfire to make his story better. Which step is he on?", ["Prewrite", "Revise", "Publish"], 1, "Revising means making the writing better: adding details, changing words, moving things around."),
  mc("Lily fixes “i went to the store yesterday” to “I went to the store yesterday.” Which step?", ["Proofread", "Draft", "Prewrite"], 0, "Fixing capitals, spelling, and punctuation is proofreading."),
  mc("Which happens during prewriting?", ["Making a list of ideas", "Printing the final copy", "Fixing commas"], 0),
  write("Prewrite! Make a quick list of 5 things you could write a story about.", { min: 10, tips: ["Places you've been", "Things you love", "Funny or surprising moments"] })
]),

lesson("i4", 9, "Vivid Verbs and Precise Nouns", "⚡", [
  "<b>Vivid verbs</b> show exactly how something happens. Instead of <i>went</i>, try <i>raced, tiptoed, stomped, wandered</i>.",
  "<b>Precise nouns</b> name exactly what you mean. Instead of <i>dog</i>, try <i>golden retriever</i>. Instead of <i>food</i>, try <i>spaghetti</i>.",
  "Example: <i>The dog ate the food.</i> → <i>The beagle gobbled the meatballs.</i>"
], [
  mc("Which verb best shows a scared mouse moving?", ["went", "scurried", "moved"], 1, "“Scurried” shows quick, nervous little steps."),
  mc("Which is the most precise noun?", ["a bird", "an animal", "a blue jay"], 2),
  mc("Choose the most vivid sentence.", ["The girl went across the stage.", "The girl twirled across the stage.", "The girl got across the stage."], 1),
  sort("Is the word vague or vivid/precise?", ["Vague", "Vivid / Precise"], [
    ["said", 0], ["whispered", 1], ["thing", 0], ["skateboard", 1], ["nice", 0], ["sprinted", 1], ["stuff", 0], ["tulips", 1]
  ]),
  write("Make this sentence come alive with a vivid verb and precise nouns: “The kid ate the food at the place.”", { min: 8, tips: ["Name the kid", "Name the food", "Name the place", "Use a strong verb like gobbled or nibbled"] })
]),

lesson("i5", 11, "Find Your Active Voice", "🎤", [
  "In <b>active voice</b>, the subject <i>does</i> the action: <b>Maria kicked the ball.</b>",
  "In <b>passive voice</b>, the subject gets acted on: <i>The ball was kicked by Maria.</i>",
  "Active voice is usually clearer and more exciting. Look out for <i>was ___ by</i>. It often means passive voice."
], [
  sort("Active or passive?", ["Active", "Passive"], [
    ["The cat chased the laser dot.", 0],
    ["The cake was eaten by my brother.", 1],
    ["Our team won the game.", 0],
    ["The window was broken by a baseball.", 1],
    ["Grandpa planted tomatoes.", 0],
    ["The song was sung by the choir.", 1]
  ]),
  mc("Which sentence uses active voice?", ["The letter was written by Ava.", "Ava wrote the letter.", "The letter was being written."], 1),
  mc("Change to active voice: “The pizza was delivered by Mr. Kim.”", ["Mr. Kim delivered the pizza.", "The pizza got delivered.", "Delivered was the pizza by Mr. Kim."], 0),
  write("Rewrite in active voice: “The puppy was given a bath by Dad.” Then write one more active-voice sentence of your own.", { min: 10 })
])
]);

// ============ CHAPTER 1: WRITING A STORY ============
section("ch1", "Writing a Story", "Senses, narratives, dialogue, and characters", "#ff7a59", "📖", [

lesson("c1l1", 13, "Use Your Senses", "👃", [
  "Good writers help readers <b>see, hear, smell, taste, and touch</b> what's happening.",
  "<i>The cafeteria was loud.</i> → <i>Trays clattered, chairs scraped, and the smell of warm pizza drifted across the room.</i>",
  "Try to use at least three senses when you describe something."
], [
  sort("Which sense does each detail use?", ["See", "Hear", "Smell", "Taste", "Touch"], [
    ["the sour bite of a lemon", 3],
    ["a crackling campfire", 1],
    ["fresh-cut grass after rain", 2],
    ["a scratchy wool sweater", 4],
    ["a bright orange sunset", 0],
    ["salty ocean spray on my lips", 3],
    ["the buzz of a mosquito", 1],
    ["a fuzzy kitten", 4]
  ]),
  mc("Which sentence uses the sense of hearing?", ["The snow was white.", "The snow crunched under my boots.", "The snow felt cold."], 1),
  mc("Which description uses the most senses?", ["The beach was nice.", "The beach was sunny and big.", "Warm sand squished between my toes while seagulls squawked overhead."], 2, "It uses touch (warm sand squishing) and hearing (squawking seagulls)."),
  write("Describe your kitchen at dinnertime using at least THREE senses.", { min: 30, checks: ["I used sight", "I used sound or smell", "I used taste or touch"] })
]),

lesson("c1l2", 15, "Use Your Adjectives and Adverbs", "🎨", [
  "<b>Adjectives</b> describe nouns: <i>a <b>tiny</b>, <b>striped</b> kitten</i>. They tell what kind, how many, or which one.",
  "<b>Adverbs</b> describe verbs: <i>she laughed <b>loudly</b></i>. They tell how, when, or where. Many end in <b>-ly</b>.",
  "Choose words that paint a clear picture, but don't pile on too many!"
], [
  sort("Adjective or adverb?", ["Adjective (describes a noun)", "Adverb (describes a verb)"], [
    ["fluffy", 0], ["quickly", 1], ["enormous", 0], ["quietly", 1], ["sparkly", 0], ["yesterday", 1], ["gentle", 0], ["carefully", 1]
  ]),
  mc("Find the adverb: “The turtle crawled slowly across the warm sand.”", ["turtle", "slowly", "warm"], 1),
  mc("Find the adjective: “The hungry bear sniffed the air.”", ["hungry", "sniffed", "air"], 0),
  mc("Which adjective best describes a thunderstorm?", ["nice", "booming", "okay"], 1),
  write("Write two sentences about an animal. Use at least two adjectives and one adverb.", { min: 15, checks: ["I used 2 adjectives", "I used an adverb"] })
]),

lesson("c1l3", 17, "The Writing Process: Descriptive Writing", "🖼️", [
  "<b>Descriptive writing</b> paints a picture with words so the reader feels like they are there.",
  "<b>Prewrite:</b> pick a place or thing and list details for each sense. <b>Draft:</b> start with a sentence that tells what you're describing. <b>Revise:</b> swap plain words for vivid ones. <b>Proofread</b> and <b>publish!</b>",
  "Organize details in a sensible way, like near to far or top to bottom."
], [
  mc("Which is the best opening sentence for a description of a treehouse?", ["I have stuff.", "High in the old oak tree, my treehouse is my favorite hideout.", "Treehouses are a thing people build."], 1),
  mc("While revising, Noah changes “The flowers were pretty” to “The purple tulips swayed in the breeze.” What did he do?", ["Fixed spelling", "Added vivid, precise details", "Published"], 1),
  order("Put these sentences in order from top to bottom.", ["Fluffy white clouds drifted across the sky.", "Below them, a red kite danced on the wind.", "Kids ran across the green grass of the park.", "At my feet, a ladybug crawled on a dandelion."]),
  write("Describe your favorite place so a reader feels like they are there.", { min: 50, checks: ["My first sentence tells what place I'm describing", "I used at least three senses", "I used vivid words", "I checked capitals and periods"] })
]),

lesson("c1l4", 21, "What Is a Personal Narrative?", "🙋", [
  "A <b>personal narrative</b> is a true story about something that happened to <b>you</b>.",
  "It is told in <b>first person</b>, using <i>I, me, my, we</i>. It shares your <b>feelings</b> and what you learned.",
  "It has a beginning (what started it), middle (what happened), and end (how it turned out)."
], [
  sort("Is it a personal narrative?", ["Personal narrative", "Not a personal narrative"], [
    ["The day I lost my first tooth at the zoo", 0],
    ["A report about the planet Mars", 1],
    ["How I learned to ride my bike last summer", 0],
    ["A made-up story about a talking dragon", 1],
    ["My first time on a roller coaster", 0],
    ["Instructions for making slime", 1]
  ]),
  mc("Which sentence sounds like a personal narrative?", ["The giraffe is the tallest animal.", "My heart pounded as I stepped onto the stage.", "Once upon a time, a wizard lived in a castle."], 1),
  mc("Personal narratives are usually told using…", ["he, she, they", "I, me, my", "you, your"], 1),
  write("List three true things that have happened to you that could make a great personal narrative. Circle (star ⭐) your favorite!", { min: 15 })
]),

lesson("c1l5", 23, "Use Time Order", "⏰", [
  "<b>Time order</b> tells events in the order they happened.",
  "<b>Time-order words</b> help readers follow along: <i>first, next, then, after that, later, finally, before, during, the next morning</i>.",
  "Example: <i>First, we packed the car. Then we drove to the lake. Finally, we jumped in!</i>"
], [
  order("Put Jordyn's morning in time order.", ["First, my alarm rang at 7:00.", "Next, I brushed my teeth.", "After that, I ate waffles.", "Finally, I caught the bus."]),
  mc("Which is a time-order word?", ["because", "afterward", "however"], 1),
  mc("Fill in the blank: “We set up the tent. ____, we roasted marshmallows.”", ["Before", "Later", "First"], 1),
  sort("Which words show time order?", ["Time-order word", "Not a time-order word"], [
    ["then", 0], ["finally", 0], ["purple", 1], ["meanwhile", 0], ["happy", 1], ["next", 0], ["because", 1]
  ]),
  write("Tell what you did after school yesterday, using at least three time-order words.", { min: 30, checks: ["I used 3 time-order words", "My events are in order"] })
]),

lesson("c1l6", 25, "The Writing Process: Personal Narrative", "📝", [
  "Time to write your own personal narrative!",
  "<b>Prewrite:</b> pick one true event. Make a timeline: beginning, middle, end. <b>Draft:</b> start with a hook that grabs the reader. Use <i>I</i>. Tell how you felt. <b>Revise:</b> add sensory details and time-order words. <b>Proofread</b> for capitals, spelling, and punctuation.",
  "End by telling how it turned out or what you learned."
], [
  mc("Which is the best hook for a personal narrative?", ["This story is about my birthday.", "I never expected my birthday cake to explode!", "My birthday is in May."], 1, "A good hook makes the reader want to keep going."),
  order("Put the parts of a personal narrative in order.", ["A hook that grabs the reader", "What happened first", "The most exciting part", "How it ended and what I learned"]),
  mc("Which sentence would make the best ending?", ["The end.", "That day taught me that being brave is worth it.", "Then we went home and stuff."], 1),
  write("Write your personal narrative about a true event in your life!", { min: 80, checks: ["I started with a hook", "I used I, me, and my", "I used time-order words", "I told how I felt", "I wrote an ending that shows what I learned", "I proofread my work"] })
]),

lesson("c1l7", 31, "What Makes a Story?", "🏰", [
  "Every story has <b>characters</b> (who), a <b>setting</b> (where and when), and a <b>plot</b> (what happens).",
  "The plot usually has a <b>problem</b>, events where characters try to solve it, and a <b>solution</b>.",
  "Beginning: meet the characters and problem. Middle: things get exciting. End: the problem is solved."
], [
  sort("Character, setting, or plot?", ["Character", "Setting", "Plot"], [
    ["Captain Pickles, a brave space cat", 0],
    ["a dark forest at midnight", 1],
    ["The cat's spaceship runs out of fuel.", 2],
    ["Grandma Rosa", 0],
    ["a crowded city in the year 3000", 1],
    ["The friends find the missing map.", 2]
  ]),
  order("Put this story's plot in order.", ["Mia finds out her pet hamster escaped.", "She searches under beds and in closets.", "She hears squeaking inside the laundry basket.", "Mia finds the hamster napping in a sock!"]),
  mc("In a story, the problem usually appears…", ["at the beginning", "only at the very end", "nowhere"], 0),
  write("Plan a story! Write who the character is, where it takes place, what the problem is, and how it gets solved.", { min: 30, checks: ["Character", "Setting", "Problem", "Solution"] })
]),

lesson("c1l8", 33, "Practice Your Dialogue", "💬", [
  "<b>Dialogue</b> is what characters say. Put their exact words inside <b>quotation marks</b>: <i>\"Let's go!\"</i>",
  "Use a comma to separate the words from the speaker tag: <i>\"I'm hungry,\" said Leo.</i> or <i>Leo said, \"I'm hungry.\"</i>",
  "Start a <b>new paragraph</b> each time a different character speaks. Try words other than <i>said</i>: <i>shouted, giggled, whispered, asked</i>."
], [
  mc("Which sentence is punctuated correctly?", ["\"Watch out\" yelled Mom.", "\"Watch out!\" yelled Mom.", "Watch out! \"yelled Mom.\""], 1),
  mc("Which sentence is punctuated correctly?", ["Ben asked, \"Can I come too?\"", "Ben asked \"Can I come too\"?", "Ben asked, Can I come too?"], 0),
  mc("When should you start a new paragraph in dialogue?", ["Every three sentences", "When a new character speaks", "Never"], 1),
  mc("Which is the best word instead of “said” for a secret?", ["shouted", "whispered", "announced"], 1),
  write("Write a short conversation between two friends who just found something strange in the backyard. Use quotation marks!", { min: 30, checks: ["I used quotation marks", "I started a new line for each speaker", "I used a word other than said"] })
]),

lesson("c1l9", 35, "Imagine a Setting", "🌋", [
  "The <b>setting</b> is <b>where</b> and <b>when</b> a story happens.",
  "A setting can be real (a school in Ohio) or imaginary (a candy kingdom). It can be long ago, today, or in the future.",
  "Use sensory details to bring it to life: <i>The old lighthouse creaked as waves crashed against the rocks below.</i>"
], [
  mc("Which tells WHEN a story happens?", ["on a stormy night in 1850", "in a cave", "a girl named Pia"], 0),
  mc("Which setting sounds most mysterious?", ["a sunny playground", "an abandoned castle covered in fog", "a grocery store"], 1),
  sort("Real or imaginary setting?", ["Could be real", "Imaginary"], [
    ["a farm in Iowa", 0], ["a city under the sea where fish drive cars", 1], ["a public library", 0], ["a cloud castle made of cotton candy", 1], ["a beach in Florida", 0]
  ]),
  write("Invent a setting! Describe where and when your story happens using sights, sounds, and smells.", { min: 35, checks: ["I said where", "I said when", "I used at least 2 senses"] })
]),

lesson("c1l10", 37, "Create a Character", "🦸", [
  "Great characters feel real. Think about how they <b>look</b>, how they <b>act</b>, what they <b>say</b>, and what they <b>want</b>.",
  "<b>Show, don't just tell.</b> Instead of <i>Max was kind</i>, write <i>Max gave his last cookie to the new kid.</i>",
  "A character's <b>traits</b> are words like brave, shy, curious, or grumpy."
], [
  mc("“Tia tiptoed to the edge of the diving board, squeezed her eyes shut, and jumped.” Tia is…", ["lazy", "brave", "rude"], 1),
  mc("“Oscar asked a hundred questions about every bug he found.” Oscar is…", ["curious", "bored", "mean"], 0),
  mc("Which SHOWS that a character is grumpy?", ["Pete was grumpy.", "Pete slammed the door and muttered, “Leave me alone.”", "Pete was a boy."], 1),
  write("Create a character. Tell their name, what they look like, one trait, and an action that SHOWS that trait.", { min: 35, checks: ["Name", "Looks", "A trait", "An action that shows the trait"] })
]),

lesson("c1l11", 39, "What's Your Point of View?", "👀", [
  "<b>Point of view</b> is who is telling the story.",
  "<b>First person:</b> a character in the story tells it, using <i>I, me, we</i>. <i>I opened the mysterious box.</i>",
  "<b>Third person:</b> a narrator outside the story tells it, using <i>he, she, they</i>, or names. <i>Zoe opened the mysterious box.</i>"
], [
  sort("First person or third person?", ["First person", "Third person"], [
    ["I couldn't believe my eyes!", 0],
    ["She raced to the finish line.", 1],
    ["We built a fort out of pillows.", 0],
    ["The dragon flapped its wings.", 1],
    ["My little brother laughed at me.", 0],
    ["Carlos and Ana shared a sandwich.", 1]
  ]),
  mc("Change to third person: “I tripped over my shoelace.”", ["You tripped over your shoelace.", "Jordyn tripped over her shoelace.", "I fell down."], 1),
  mc("A personal narrative is almost always written in…", ["first person", "third person"], 0),
  write("Write 2–3 sentences about walking into a haunted house in FIRST person. Then rewrite them in THIRD person.", { min: 30 })
]),

lesson("c1l12", 41, "Stories Are Everywhere", "🌎", [
  "Story ideas are all around you! A funny thing your pet did, a strange noise at night, or a “What if…?” question can grow into a story.",
  "Stories come in different <b>genres</b>: <b>realistic fiction</b> (could really happen), <b>fantasy</b> (magic!), <b>mystery</b> (a puzzle to solve), <b>science fiction</b> (future tech, space), and <b>fable</b> (animals teach a lesson).",
  "Try asking “What if…?” <i>What if my backpack could talk?</i>"
], [
  sort("Which genre?", ["Fantasy", "Mystery", "Science fiction", "Realistic fiction"], [
    ["A girl discovers she can talk to unicorns.", 0],
    ["Who took the class hamster? Detective Dee investigates.", 1],
    ["Robots run a restaurant on Mars.", 2],
    ["Two friends argue, then make up before the soccer game.", 3],
    ["A wizard's spell turns the school into a giant cake.", 0],
    ["A spaceship crew finds a new planet.", 2]
  ]),
  mc("Which is a “What if…?” story idea?", ["What if every cat could fly for one day?", "Cats have whiskers.", "My cat is orange."], 0),
  write("Write three “What if…?” questions that could become stories.", { min: 20 })
]),

lesson("c1l13", 43, "The Writing Process: Story", "✨", [
  "Now put it all together and write a story!",
  "<b>Prewrite:</b> plan your character, setting, problem, and solution. <b>Draft:</b> grab the reader with a hook, use dialogue, and show your character's traits. <b>Revise:</b> add vivid verbs and sensory details. Use time-order words. <b>Proofread:</b> check quotation marks, capitals, and spelling.",
  "Give your story a title!"
], [
  order("Put the steps for writing your story in order.", ["Plan character, setting, problem, solution", "Write a first draft", "Add vivid verbs and details", "Check spelling and punctuation", "Share it with someone!"]),
  mc("Which is the strongest story title?", ["My Story", "The Day the Goldfish Escaped", "Story Number One"], 1),
  write("Write your own story! Give it a title.", { min: 100, checks: ["I have a title", "I introduced a character and setting", "There is a problem and a solution", "I used dialogue with quotation marks", "I used vivid verbs and sensory details", "I proofread"] })
]),

lesson("c1test", 49, "Chapter 1 Challenge", "🏆", [
  "Show what you know about writing stories! Read each question carefully. You've got this!"
], [
  mc("A true story about something that happened to you is a…", ["fable", "personal narrative", "report"], 1),
  mc("Which word is an adverb?", ["silently", "silent", "silence"], 0),
  mc("Which sentence is in first person?", ["They ran home.", "I ran home.", "Kim ran home."], 1),
  mc("Which dialogue is punctuated correctly?", ["\"I found it!\" shouted Jay.", "\"I found it! shouted Jay.\"", "I found it! \"shouted Jay\"."], 0),
  mc("The setting of a story tells…", ["who and why", "where and when", "how it ends"], 1),
  sort("Which sense?", ["Hearing", "Touch", "Smell"], [
    ["thunder rumbling", 0], ["a prickly cactus", 1], ["burnt toast", 2], ["a squeaky door", 0], ["smooth glass", 1]
  ]),
  order("Put the plot in order.", ["Jake's kite gets stuck in a tree.", "He tries to shake the branch.", "His sister brings a ladder.", "Jake climbs up and frees the kite."]),
  mc("Which verb is most vivid?", ["walked", "stomped", "went"], 1)
])
]);
