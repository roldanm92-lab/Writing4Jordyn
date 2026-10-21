// ============ CHAPTER 2: WRITING TO INFORM ============
section("ch2", "Writing to Inform", "Facts, letters, reports, and paragraphs", "#12a5a0", "🔎", [

lesson("c2l1", 50, "Why and How Do We Inform?", "📰", [
  "<b>Informational writing</b> teaches the reader something true. It uses <b>facts</b>, not made-up events.",
  "Examples: news articles, science books, how-to guides, biographies, and reports.",
  "Good informational writing is clear, organized, and sticks to the topic."
], [
  sort("Inform or entertain?", ["Inform", "Entertain"], [
    ["How volcanoes erupt", 0], ["A poem about a silly penguin", 1], ["Facts about the Statue of Liberty", 0], ["A story about a pirate parrot", 1], ["A guide to caring for goldfish", 0], ["A joke book", 1]
  ]),
  mc("Which sentence belongs in informational writing?", ["Octopuses have three hearts.", "The octopus danced a happy jig.", "Once there was a sad octopus."], 0),
  mc("Informational writing should be…", ["full of made-up events", "clear and based on facts", "written only in dialogue"], 1),
  write("Write 3 facts you know about your favorite animal.", { min: 20 })
]),

lesson("c2l2", 53, "Make an Announcement", "📣", [
  "An <b>announcement</b> tells people about an event. It must answer the <b>5 W's</b>:",
  "<b>Who</b> is it for? <b>What</b> is happening? <b>When</b> is it? <b>Where</b> is it? <b>Why</b> should people come?",
  "Keep it short and clear, and make it exciting!"
], [
  mc("“The bake sale is Friday at 3:00 in the gym.” Which W is missing?", ["When", "Where", "Why / Who"], 2, "It tells what, when, and where, but not who it's for or why."),
  sort("Match each detail to its W.", ["Who", "What", "When", "Where"], [
    ["all 4th graders", 0], ["a talent show", 1], ["Saturday, May 3, at 6 p.m.", 2], ["the school auditorium", 3], ["parents and families", 0], ["in Room 12", 3]
  ]),
  mc("Which is the best announcement title?", ["Stuff Happening", "Come to the Spring Carnival!", "Read This"], 1),
  write("Write an announcement for a pretend event (like a pet show or a lemonade stand). Answer all 5 W's!", { min: 30, checks: ["Who", "What", "When", "Where", "Why"] })
]),

lesson("c2l3", 55, "Write a Friendly Letter", "💌", [
  "A <b>friendly letter</b> has five parts:",
  "<b>1. Date</b> (October 21, 2026) <b>2. Greeting</b> (Dear Grandma,) <b>3. Body</b>: your message <b>4. Closing</b> (Love, / Your friend,) <b>5. Signature</b>: your name.",
  "Use a <b>comma</b> after the greeting and after the closing."
], [
  order("Put the parts of a friendly letter in order.", ["Date", "Greeting", "Body", "Closing", "Signature"]),
  mc("Which greeting is written correctly?", ["Dear Aunt Lisa,", "dear aunt lisa", "Dear Aunt Lisa."], 0),
  mc("Which closing is written correctly?", ["your friend", "Your friend,", "Your Friend."], 1),
  mc("The main message of a letter goes in the…", ["greeting", "body", "signature"], 1),
  write("Write a friendly letter to a relative or friend. Tell them about something fun you did this week.", { min: 40, checks: ["Date", "Greeting with a comma", "Body", "Closing with a comma", "Signature"] })
]),

lesson("c2l4", 57, "The Writing Process: Biography", "👤", [
  "A <b>biography</b> is a true story of a real person's life, written by someone else. (An <b>autobiography</b> is written by the person about themself.)",
  "Biographies are usually in <b>time order</b> and in <b>third person</b>. They tell when and where the person was born, important events, and why the person matters.",
  "<b>Prewrite:</b> gather facts by reading or interviewing. Take notes. Then draft, revise, proofread, and publish."
], [
  mc("A book about Abraham Lincoln's life written by a historian is…", ["an autobiography", "a biography", "a fable"], 1),
  mc("Which sentence belongs in a biography?", ["I was born in 1990.", "Amelia Earhart was born in Kansas in 1897.", "Amelia was a magical flying fairy."], 1),
  order("Put these life events in time order.", ["Sara was born in Texas in 1985.", "She learned to swim at age 6.", "In high school, she joined the swim team.", "In 2008, she became a swimming coach."]),
  mc("What is a good way to find facts about a family member?", ["Make them up", "Interview them", "Guess"], 1),
  write("Interview a family member (or use what you know). Write a short biography of them in third person.", { min: 60, checks: ["I wrote in third person (he/she/they)", "I included where they were born or grew up", "I put events in time order", "I told why this person is special"] })
]),

lesson("c2l5", 64, "How Do We Compare?", "⚖️", [
  "To <b>compare</b> is to tell how things are <b>alike</b>. To <b>contrast</b> is to tell how they are <b>different</b>.",
  "Words that show alike: <i>both, also, too, similarly, like</i>.",
  "Words that show different: <i>but, however, unlike, on the other hand, while</i>."
], [
  sort("Does the word show ALIKE or DIFFERENT?", ["Alike", "Different"], [
    ["both", 0], ["however", 1], ["also", 0], ["unlike", 1], ["similarly", 0], ["but", 1], ["too", 0], ["on the other hand", 1]
  ]),
  mc("“Cats and dogs both make good pets.” This sentence shows…", ["how they're alike", "how they're different"], 0),
  mc("Fill in: “Summer is hot. ____, winter is cold.”", ["Also", "However", "Both"], 1),
  write("Compare breakfast and dinner. Write one sentence about how they're alike and one about how they're different.", { min: 20, checks: ["I used an alike word", "I used a different word"] })
]),

lesson("c2l6", 66, "Compare Two and More Than Two", "📏", [
  "When you compare <b>two</b> things, add <b>-er</b> or use <b>more</b>: <i>taller, more colorful</i>.",
  "When you compare <b>three or more</b>, add <b>-est</b> or use <b>most</b>: <i>tallest, most colorful</i>.",
  "Watch out for tricky ones: <i>good → better → best</i>, <i>bad → worse → worst</i>. Never say <i>more taller</i>!"
], [
  mc("A cheetah is ____ than a lion.", ["fast", "faster", "fastest"], 1),
  mc("Of all the planets, Jupiter is the ____.", ["bigger", "biggest", "most big"], 1),
  mc("This is the ____ book I've ever read!", ["most exciting", "excitingest", "more exciting"], 0),
  mc("My cold is ____ today than yesterday.", ["worse", "badder", "worst"], 0),
  sort("Two things or three+?", ["Comparing two", "Comparing three or more"], [
    ["happier", 0], ["happiest", 1], ["more careful", 0], ["best", 1], ["smaller", 0], ["most beautiful", 1]
  ]),
  write("Compare three foods you like. Use one -er word and one -est word.", { min: 20 })
]),

lesson("c2l7", 68, "Compare Two Objects", "🍎", [
  "A <b>Venn diagram</b> helps you compare two things. Two circles overlap. Each circle lists what's special about one thing. The middle shows what they share.",
  "After you fill in the diagram, write a paragraph: start with a topic sentence, tell how they're alike, then how they're different."
], [
  sort("Apples vs. bananas: where does each go?", ["Only apples", "Both", "Only bananas"], [
    ["grow on trees", 1], ["you peel a yellow skin", 2], ["can be red or green", 0], ["are fruits", 1], ["are long and curved", 2], ["have a core with seeds", 0], ["are healthy snacks", 1]
  ]),
  mc("What goes in the middle of a Venn diagram?", ["Things that are different", "Things that are the same", "The title"], 1),
  write("Compare a pencil and a crayon. Write how they're alike and how they're different.", { min: 35, checks: ["Topic sentence", "How they're alike", "How they're different"] })
]),

lesson("c2l8", 70, "Organize It in Space", "🗺️", [
  "<b>Spatial order</b> describes things by where they are: top to bottom, left to right, near to far, inside to outside.",
  "Spatial words: <i>above, below, beside, next to, behind, in front of, on the left, in the corner, across from</i>.",
  "Pick ONE direction and stick with it so the reader can picture it."
], [
  sort("Spatial word or not?", ["Shows location", "Doesn't show location"], [
    ["beneath", 0], ["beside", 0], ["yesterday", 1], ["across from", 0], ["because", 1], ["behind", 0], ["happily", 1]
  ]),
  order("Describe a bookshelf from top to bottom.", ["On the top shelf sits a dusty globe.", "The middle shelf holds my comic books.", "On the bottom shelf, my board games are stacked.", "On the floor below, my slippers wait."]),
  mc("“The lamp is ____ the bed, on the nightstand.”", ["next to", "after", "finally"], 0),
  write("Describe your bedroom from one side to the other (or top to bottom) using spatial words.", { min: 35, checks: ["I picked one direction", "I used at least 3 spatial words"] })
]),

lesson("c2l9", 72, "Find Causes and Effects", "💥", [
  "A <b>cause</b> is <b>why</b> something happens. An <b>effect</b> is <b>what</b> happens.",
  "<i>Because it rained (cause), the game was canceled (effect).</i>",
  "Signal words: <i>because, so, since, as a result, therefore, due to</i>."
], [
  mc("“I forgot my umbrella, so I got soaked.” What is the cause?", ["I got soaked.", "I forgot my umbrella."], 1),
  mc("“The ice cream melted because it was left in the sun.” What is the effect?", ["The ice cream melted.", "It was left in the sun."], 0),
  sort("Cause or effect?", ["Cause", "Effect"], [
    ["The dog barked all night.", 0], ["Nobody could sleep.", 1], ["Max studied every day.", 0], ["Max aced his spelling test.", 1], ["The power went out.", 0], ["We lit candles.", 1]
  ]),
  mc("Which word signals cause and effect?", ["therefore", "beside", "first"], 0),
  write("Write two cause-and-effect sentences about your day. Use “because” in one and “so” in the other.", { min: 20 })
]),

lesson("c2l10", 74, "Relate an Event", "🗞️", [
  "When you <b>relate an event</b>, you report what happened, like a news reporter.",
  "Answer the <b>5 W's and H</b>: who, what, when, where, why, and how. Put the most important facts first.",
  "Use facts, not your opinions, and tell events in order."
], [
  mc("Which is the best first sentence for a news report?", ["I think the fire was scary.", "On Monday, firefighters rescued a kitten from a tree on Oak Street.", "Kittens are cute."], 1, "It tells who, what, when, and where right away."),
  mc("Which sentence is an opinion that does NOT belong in a news report?", ["The parade started at 10 a.m.", "The parade was the best thing ever.", "Over 500 people watched the parade."], 1),
  write("Report on something that happened at school or home this week, like a news reporter. Answer who, what, when, where, and why.", { min: 40, checks: ["Who", "What", "When", "Where", "Why or how", "Only facts"] })
]),

lesson("c2l11", 76, "Categories", "🗂️", [
  "A <b>category</b> is a group of things that are alike in some way.",
  "Sorting ideas into categories helps you organize your writing. A report on oceans might have sections on <i>animals</i>, <i>plants</i>, and <i>pollution</i>.",
  "Ask: <i>What do these have in common?</i>"
], [
  sort("Sort into categories.", ["Weather", "Instruments", "Vegetables"], [
    ["tornado", 0], ["violin", 1], ["carrot", 2], ["hail", 0], ["drum", 1], ["broccoli", 2], ["fog", 0], ["spinach", 2]
  ]),
  mc("Which one does NOT belong? robin, eagle, salmon, parrot", ["robin", "salmon", "parrot"], 1, "Salmon is a fish; the others are birds."),
  mc("What category fits: Mercury, Venus, Mars, Saturn?", ["stars", "planets", "moons"], 1),
  write("Pick a topic you know a lot about. List three categories you could use to organize a report on it.", { min: 15 })
]),

lesson("c2l12", 78, "Why Do We Explain?", "🤔", [
  "We <b>explain</b> to help someone understand <b>how</b> something works or <b>why</b> something happens.",
  "Good explanations use clear steps, examples, and words the reader knows.",
  "Explanations answer questions like: <i>How does a seed grow? Why do leaves change color?</i>"
], [
  mc("Which is an explanation?", ["Leaves change color in fall because they stop making green chlorophyll.", "Fall is my favorite season!", "Once a leaf wanted to fly."], 0),
  mc("What makes an explanation easier to understand?", ["Big confusing words", "Clear steps and examples", "Skipping steps"], 1),
  write("Explain how to do something you're good at (like a cartwheel or a video game level) so someone else could understand.", { min: 30 })
]),

lesson("c2l13", 79, "Write Instructions", "🛠️", [
  "<b>Instructions</b> tell how to do or make something.",
  "Start with a <b>list of materials</b>. Then write <b>numbered steps</b> in order. Begin steps with action verbs: <i>Pour, Mix, Fold, Cut</i>.",
  "Use order words: <i>first, next, then, finally</i>."
], [
  order("Put the steps for making a peanut butter sandwich in order.", ["Get two slices of bread.", "Spread peanut butter on one slice.", "Spread jelly on the other slice.", "Press the slices together.", "Cut in half and enjoy!"]),
  mc("Which step begins with a strong action verb?", ["Stir the batter for two minutes.", "The batter should be stirred.", "Maybe you could stir it."], 0),
  mc("What should come before the steps?", ["The ending", "A list of materials", "The signature"], 1),
  write("Write instructions for something you know how to make or do. Include materials and at least 4 steps.", { min: 40, checks: ["Materials list", "At least 4 steps", "Steps are in order", "Steps start with action verbs"] })
]),

lesson("c2l14", 81, "Give Me Directions", "🧭", [
  "<b>Directions</b> tell someone how to get from one place to another.",
  "Use <b>direction words</b>: <i>left, right, straight, north, south, past, across</i>. Use <b>landmarks</b>: <i>Turn left at the red mailbox.</i>",
  "Give distances when you can: <i>Walk two blocks.</i>"
], [
  mc("Which direction is the most helpful?", ["Go that way for a while.", "Walk past the library and turn right at the stop sign.", "It's somewhere over there."], 1),
  mc("A landmark is…", ["a big, easy-to-see place or object", "a type of map", "a direction word"], 0),
  order("Directions from the classroom to the library:", ["Walk out the classroom door.", "Turn left down the main hallway.", "Go past the water fountain.", "The library is the second door on the right."]),
  write("Write directions from your bedroom to the kitchen. Use direction words and at least one landmark.", { min: 25, checks: ["Direction words (left/right)", "A landmark", "Steps in order"] })
]),

lesson("c2l15", 83, "Find the Main Idea", "🎯", [
  "The <b>main idea</b> is what a paragraph is mostly about.",
  "Often it's stated in the first sentence, but not always. Ask: <i>What is the BIG point the writer wants me to know?</i>",
  "Details are the smaller facts that support the main idea."
], [
  mc("“Dolphins are very smart. They use whistles to talk to each other. They can solve puzzles. Some even use sponges as tools.” What is the main idea?", ["Dolphins use sponges.", "Dolphins are very smart.", "Dolphins whistle."], 1),
  mc("“You'll need sunscreen. Pack a towel and water. Don't forget your swimsuit!” What's the main idea?", ["What to bring to the beach", "Why towels are useful", "How to swim"], 0),
  mc("“Bees carry pollen from flower to flower. This helps plants make fruit. Without bees, we'd have fewer apples and berries.” What is the main idea?", ["Bees are important for growing food.", "Apples are red.", "Flowers are pretty."], 0),
  write("Write a paragraph about recess. Then write one sentence telling its main idea.", { min: 30 })
]),

lesson("c2l16", 86, "Find the Details", "🔍", [
  "<b>Supporting details</b> are facts, examples, and reasons that explain the main idea.",
  "Every detail should connect to the main idea. If it doesn't, leave it out!",
  "Main idea: <i>Penguins are great swimmers.</i> Detail: <i>They use their wings like flippers.</i>"
], [
  sort("Main idea: “Exercise is good for your body.” Supporting detail or not?", ["Supports it", "Doesn't support it"], [
    ["It makes your heart stronger.", 0], ["My sneakers are blue.", 1], ["It builds strong muscles.", 0], ["It helps you sleep better.", 0], ["Pizza is delicious.", 1]
  ]),
  mc("Main idea: “Winter can be fun.” Which detail supports it?", ["Building snowmen is a blast.", "Summer has long days.", "Leaves fall in autumn."], 0),
  write("Main idea: “My family is special.” Write three supporting details.", { min: 25 })
]),

lesson("c2l17", 88, "What Is a Topic Sentence?", "🧲", [
  "A <b>topic sentence</b> tells the main idea of a paragraph. It usually comes <b>first</b>.",
  "It should be interesting and tell the reader what's coming, without being too narrow or too broad.",
  "<i>Weak:</i> This is about dogs. <i>Strong:</i> Dogs help people in amazing ways."
], [
  mc("Which is the best topic sentence for a paragraph about recycling?", ["Recycling.", "Recycling helps keep our planet clean.", "I have a blue bin."], 1),
  mc("Which topic sentence would hook a reader best?", ["This paragraph is about owls.", "Owls are silent hunters of the night.", "Owls exist."], 1),
  mc("Details: “Tomatoes need lots of sun. Water them every few days. Add stakes so they don't fall over.” Best topic sentence?", ["Growing tomatoes takes a little care.", "I like salad.", "The sun is hot."], 0),
  write("Write a strong topic sentence for each topic: (1) soccer, (2) rainy days, (3) your school.", { min: 20 })
]),

lesson("c2l18", 90, "Stay on Topic", "🚦", [
  "Every sentence in a paragraph should connect to the <b>topic sentence</b>.",
  "If a sentence wanders off topic, take it out or move it to a different paragraph.",
  "Read your paragraph and ask: <i>Does each sentence belong?</i>"
], [
  mc("Topic: “Giraffes are amazing animals.” Which sentence does NOT belong?", ["Their necks can be six feet long.", "My cousin has a hamster.", "They eat leaves from tall trees."], 1),
  mc("Topic: “Our field trip to the farm was fun.” Which does NOT belong?", ["We fed the goats.", "We rode on a hay wagon.", "My favorite color is green."], 2),
  mc("Topic: “Reading is a great hobby.” Which does NOT belong?", ["Books take you to new places.", "You can read anywhere.", "Basketball season starts soon."], 2),
  write("Write a paragraph about your favorite holiday. Make sure every sentence stays on topic.", { min: 40, checks: ["Topic sentence", "Every sentence is about the holiday"] })
]),

lesson("c2l19", 92, "Write a Paragraph", "📄", [
  "A strong paragraph has:",
  "<b>1. Topic sentence</b>: the main idea. <b>2. Supporting details</b>: at least three facts, reasons, or examples. <b>3. Closing sentence</b>: wraps it up, often by restating the main idea in a new way.",
  "Indent the first line!"
], [
  order("Put this paragraph in order.", ["Sloths are some of the slowest animals on Earth.", "They move only about 40 yards a day.", "They sleep up to 15 hours daily.", "Algae can even grow on their fur because they move so little.", "Sloths are truly the champions of taking it easy!"]),
  mc("What does a closing sentence do?", ["Starts a new topic", "Wraps up the paragraph", "Lists materials"], 1),
  write("Write a paragraph about why you'd like to visit a certain place.", { min: 50, checks: ["Topic sentence", "Three supporting details", "Closing sentence", "Stayed on topic"] })
]),

lesson("c2l20", 94, "Add a Picture", "📷", [
  "Pictures, diagrams, maps, charts, and timelines can help explain information.",
  "A <b>caption</b> is a short sentence under a picture that tells what it shows.",
  "Choose a visual that helps your reader understand. A map shows <i>where</i>; a timeline shows <i>when</i>; a diagram shows <i>parts</i> or <i>how something works</i>."
], [
  mc("A report about the life of a butterfly would be helped most by…", ["a diagram of the life cycle", "a map of Texas", "a recipe"], 0),
  mc("Which visual best shows when important events happened?", ["timeline", "map", "photo of a cat"], 0),
  mc("Which is the best caption for a photo of a volcano erupting?", ["Wow.", "Mount Etna erupts in Italy, sending lava down its side.", "Picture."], 1),
  write("Imagine a photo of your favorite place. Write a caption for it that tells what and where.", { min: 12 })
]),

lesson("c2l21", 96, "The Writing Process: Report", "📚", [
  "A <b>report</b> shares facts about a topic in an organized way.",
  "<b>Prewrite:</b> choose a topic, ask questions, find facts in books or trusted websites, and take notes in your own words. <b>Organize</b> notes into categories. <b>Draft</b> an introduction, body paragraphs (one per category), and a conclusion. <b>Revise, proofread, publish.</b>",
  "Always put facts in your own words. Don't copy!"
], [
  order("Put the steps of writing a report in order.", ["Choose a topic", "Research and take notes", "Organize notes into categories", "Write a draft", "Revise and proofread"]),
  mc("Which is the most trustworthy source for a report about sharks?", ["A science museum website", "A random comment online", "A cartoon about a talking shark"], 0),
  mc("When you take notes, you should…", ["copy every sentence exactly", "write the key facts in your own words", "make up facts"], 1),
  write("Write a short report about an animal, place, or invention. Include an introduction, at least one body paragraph, and a conclusion.", { min: 90, checks: ["Introduction with a topic sentence", "Facts in my own words", "Organized paragraphs", "Conclusion", "Proofread"] })
]),

lesson("c2test", 106, "Chapter 2 Challenge", "🏆", [
  "Show what you know about informational writing! Take your time."
], [
  mc("A friendly letter's greeting is followed by a…", ["period", "comma", "question mark"], 1),
  mc("Which compares THREE or more things?", ["smarter", "smartest", "more smart"], 1),
  mc("“The roads were icy, so school was canceled.” What is the cause?", ["The roads were icy.", "School was canceled."], 0),
  mc("The sentence that tells the main idea of a paragraph is the…", ["closing sentence", "topic sentence", "caption"], 1),
  mc("Topic: “Frogs are amazing jumpers.” Which does NOT belong?", ["They can jump 20 times their body length.", "Their strong back legs act like springs.", "I like pancakes."], 2),
  order("Order the parts of a friendly letter.", ["Date", "Greeting", "Body", "Closing", "Signature"]),
  sort("Alike word or different word?", ["Alike", "Different"], [["both", 0], ["unlike", 1], ["similarly", 0], ["however", 1]]),
  mc("A biography is written in…", ["first person about the writer", "third person about another real person", "made-up events"], 1)
])
]);
