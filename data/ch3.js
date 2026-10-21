// ============ CHAPTER 3: WRITING AN OPINION ============
section("ch3", "Writing an Opinion", "Persuading with reasons and facts", "#e8488a", "📢", [

lesson("c3l1", 107, "When and Why Do We Persuade?", "🙌", [
  "To <b>persuade</b> means to try to get someone to agree with you or to do something.",
  "We persuade in ads, posters, speeches, reviews, and letters. You persuade when you ask for a later bedtime!",
  "Persuasive writing states an <b>opinion</b> and gives <b>reasons</b> to support it."
], [
  sort("Is it trying to persuade or inform?", ["Persuade", "Inform"], [
    ["Our school needs a longer recess!", 0], ["Recess is 20 minutes long.", 1], ["Buy SuperCrunch cereal today!", 0], ["The library opens at 9 a.m.", 1], ["You should adopt a shelter pet.", 0], ["Shelters care for lost animals.", 1]
  ]),
  mc("Which is a persuasive sentence?", ["Dogs have four legs.", "Everyone should try reading before bed.", "The sun rises in the east."], 1),
  write("What's one thing you'd like to persuade your family to do? Write your opinion and one reason.", { min: 20 })
]),

lesson("c3l2", 109, "Give Me the Facts", "📊", [
  "Opinions are strongest when they are backed up by <b>facts and reasons</b>.",
  "<i>Opinion:</i> Our town should build a skate park. <i>Fact:</i> Over 200 kids signed a petition asking for one.",
  "Facts can be checked. Strong reasons explain <b>why</b> your opinion makes sense."
], [
  mc("Opinion: “Kids should drink more water.” Which is the strongest support?", ["Water is wet.", "Doctors say water helps your body and brain work well.", "I like water."], 1),
  mc("Opinion: “Our class should get a pet fish.” Which reason is strongest?", ["Fish are easy to care for and teach responsibility.", "Fish are fishy.", "Because I said so."], 0),
  write("Opinion: “Every kid should learn to swim.” Write two reasons or facts that support it.", { min: 25 })
]),

lesson("c3l3", 111, "Don't Make Me Cry", "😢", [
  "Some writers try to persuade by making you feel strong emotions, like sadness, fear, or guilt, instead of giving good reasons.",
  "<i>“If you don't buy this toy, you'll be the only kid without one and everyone will laugh at you!”</i> That's an emotional trick.",
  "Feelings can be part of persuasion, but the strongest writing uses <b>logic and facts</b> too."
], [
  sort("Good reason or emotional trick?", ["Good reason", "Emotional trick"], [
    ["Helmets reduce head injuries by a lot.", 0],
    ["Everyone cool already has these shoes!", 1],
    ["Recycling saves energy and trees.", 0],
    ["You'll be SO sad forever if you miss this!", 1],
    ["Reading builds your vocabulary.", 0],
    ["Only a bad person wouldn't buy this.", 1]
  ]),
  mc("Which ad uses an emotional trick?", ["Our juice has no added sugar.", "Buy our juice or your friends won't like you!", "Our juice has vitamin C."], 1),
  write("Rewrite this emotional trick into a good reason: “Buy this backpack or everyone will laugh at you!”", { min: 15 })
]),

lesson("c3l4", 113, "Facts, Opinions, and Bias", "🧐", [
  "A <b>fact</b> can be proven true. <i>Chicago is in Illinois.</i>",
  "An <b>opinion</b> tells what someone thinks or feels. <i>Chicago is the best city.</i> Words like <i>best, worst, should, beautiful, boring</i> often signal opinions.",
  "<b>Bias</b> is when a writer only shows one side, or is unfair because of what they like or dislike. Good readers notice bias!"
], [
  sort("Fact or opinion?", ["Fact", "Opinion"], [
    ["There are 12 months in a year.", 0], ["December is the best month.", 1], ["Spiders have eight legs.", 0], ["Spiders are creepy.", 1], ["Math is the most fun subject.", 1], ["Water freezes at 32°F.", 0], ["Broccoli tastes gross.", 1], ["The Pacific is the largest ocean.", 0]
  ]),
  mc("A pizza company writes, “Pizza is the healthiest food in the world!” This shows…", ["bias", "a proven fact", "a caption"], 0, "The company wants to sell pizza, so it's not being fair."),
  mc("Which word often signals an opinion?", ["best", "measured", "born"], 0),
  write("Write one fact and one opinion about your town or school.", { min: 15, checks: ["A fact that can be proven", "An opinion"] })
]),

lesson("c3l5", 115, "Organize by Importance", "🥇", [
  "When you persuade, put your reasons in a smart order.",
  "Many writers save their <b>strongest reason for last</b> so the reader remembers it. (Some put it first to grab attention. Either way, plan it!)",
  "Use words like <i>first, also, most importantly</i>."
], [
  order("Opinion: “We should have a class garden.” Order the reasons from least to most important.", ["Gardens look pretty.", "We could share vegetables with families.", "Most importantly, we'd learn how plants grow and how to take care of nature."]),
  mc("Which phrase signals the most important reason?", ["Also", "Most importantly", "First of all"], 1),
  write("Opinion: “Kids should get a pet.” Write three reasons, and put your strongest reason last.", { min: 30, checks: ["Three reasons", "Strongest reason last", "Used 'most importantly' or a similar phrase"] })
]),

lesson("c3l6", 117, "The Writing Process: Opinion Statement", "🗣️", [
  "Time to write your own opinion piece!",
  "<b>Introduction:</b> state your opinion clearly. <b>Body:</b> give at least three reasons with facts or examples. <b>Conclusion:</b> restate your opinion and ask readers to agree or act.",
  "Use linking words: <i>because, for example, also, in addition, therefore</i>."
], [
  mc("Which is the clearest opinion statement?", ["Some people like homework.", "I believe homework should be banned on weekends.", "Homework is a thing."], 1),
  mc("A good conclusion should…", ["introduce a brand new topic", "restate your opinion and call readers to act", "list materials"], 1),
  write("Choose a topic you care about (school uniforms, longer recess, a 4-day school week…) and write your opinion piece.", { min: 80, checks: ["My opinion is clear in the beginning", "I gave at least 3 reasons", "I used facts or examples", "I used linking words", "My conclusion restates my opinion", "I proofread"] })
]),

lesson("c3l7", 121, "Just Business", "💼", [
  "A <b>business letter</b> is a formal letter to a company, newspaper, or official.",
  "Its parts: <b>Heading</b> (your address and date), <b>Inside address</b> (who you're writing to), <b>Greeting</b> with a <b>colon</b> (Dear Ms. Patel:), <b>Body</b>, <b>Closing</b> (Sincerely,), and <b>Signature</b>.",
  "Be polite, clear, and get to the point."
], [
  order("Put the parts of a business letter in order.", ["Heading (your address and date)", "Inside address", "Greeting", "Body", "Closing", "Signature"]),
  mc("Which greeting is correct for a business letter?", ["Hey Mr. Jones!", "Dear Mr. Jones:", "dear mr jones,"], 1),
  mc("How is a business letter different from a friendly letter?", ["It is more formal and has an inside address.", "It has no greeting.", "It uses lots of slang."], 0),
  write("Write a short business letter to a company asking a question about a product you use.", { min: 40, checks: ["Greeting with a colon", "Polite, clear body", "Closing like Sincerely,", "Signature"] })
]),

lesson("c3l8", 123, "The Writing Process: Letter to the Editor", "✉️", [
  "A <b>letter to the editor</b> is a business letter sent to a newspaper or magazine to share an opinion about an issue.",
  "Name the issue, state your opinion, support it with reasons and facts, and suggest a solution.",
  "Keep it respectful. People are more persuaded by polite writers!"
], [
  mc("Which is the best opening for a letter to the editor?", ["You're all wrong!!!", "I am writing because our town park needs more trash cans.", "Hi, what's up?"], 1),
  mc("A letter to the editor should include…", ["only your feelings", "an opinion, reasons, and a solution", "a made-up story"], 1),
  write("Write a letter to the editor of your local newspaper about something you'd like to change in your community.", { min: 80, checks: ["Greeting with a colon", "I named the issue", "I stated my opinion", "I gave reasons and facts", "I suggested a solution", "I was polite", "Closing and signature"] })
]),

lesson("c3test", 129, "Chapter 3 Challenge", "🏆", [
  "Last challenge! Show what you know about persuasive writing."
], [
  sort("Fact or opinion?", ["Fact", "Opinion"], [["A week has seven days.", 0], ["Mondays are the worst.", 1], ["Cats are better than dogs.", 1], ["Earth orbits the sun.", 0]]),
  mc("Which is a strong reason to support “Our school needs more books”?", ["Books are rectangles.", "Students read more when they have new books to choose from.", "I said so."], 1),
  mc("Where do many writers put their strongest reason?", ["Last", "Nowhere", "In the signature"], 0),
  mc("Which greeting is correct for a business letter?", ["Dear Editor:", "Hey editor!", "dear editor"], 0),
  mc("“Buy this or you'll be sorry forever!” is an example of…", ["a fact", "an emotional trick", "a caption"], 1),
  mc("When a writer shows only one side because they like it, that's called…", ["bias", "dialogue", "setting"], 0)
])
]);
