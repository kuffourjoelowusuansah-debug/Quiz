// Each question: q = question, o = options, a = index of correct option (0 = first), w = why
const ZONES = {
  rme: {
    title: "RME Zone 🌍",
    notes: `<h3>Environment</h3><p>The environment is made up of the things that surround us: natural and artificial (man-made) things.</p>
      <p><b>Artificial:</b> made by man (bicycle, carton box, tiles).<br><b>Natural:</b> made by God (human beings, rivers, animals, plants, trees).</p>
      <h3>Human activities</h3><p>Farming, sand winning, fishing, building houses and dams, disposal of refuse, bush burning.</p>
      <h3>Environmental degradation</h3><p>Making the environment (land, water, air) unsafe or impure for human use, and decreasing its quantity and quality.</p>
      <h3>Pollutants</h3><p>Things that pollute the environment: smoke, refuse, waste substances.</p>
      <h3>Bad effects of pollution</h3><p>Safe drinking water becomes scarce. Diseases (typhoid, malaria, cholera, bilharzia, flu, skin rashes). Habitats of aquatic life and birds are destroyed. Ozone layer destruction and global warming. Drought and famine.</p>`,
    questions: [
      {q:"The environment is made up of the things that ____ us.",o:["surround","hide","scare","feed"],a:0,w:"The environment is everything that surrounds us."},
      {q:"Which of these is a man-made (artificial) thing?",o:["River","Bicycle","Tree","Animal"],a:1,w:"A bicycle is made by man. Rivers, trees and animals are natural."},
      {q:"Natural things are things made by ____.",o:["Machines","Carpenters","God","Teachers"],a:2,w:"Natural things are made by God."},
      {q:"Which of these is a natural thing?",o:["Tiles","Carton box","Car","River"],a:3,w:"Rivers are natural. Tiles, boxes and cars are man-made."},
      {q:"Which of these is a human activity in the environment?",o:["Farming","Raining","Sunrise","Wind"],a:0,w:"Farming is something people do. Rain, sunrise and wind happen naturally."},
      {q:"Environmental degradation means making the land, water and air ____ for human use.",o:["sweeter","unsafe or impure","bigger","brighter"],a:1,w:"Degradation makes the environment unsafe or impure and lowers its quality."},
      {q:"Which of these is a pollutant?",o:["Fresh air","Clean water","Smoke","Green grass"],a:2,w:"Smoke, refuse and waste substances pollute the environment."},
      {q:"Which disease can come from a polluted environment?",o:["Cholera","Good health","Sleep","Hunger for fun"],a:0,w:"Typhoid, malaria, cholera, bilharzia, flu and skin rashes can all come from pollution."},
      {q:"Polluting the environment destroys the habitat of aquatic life and ____.",o:["cars","birds","tiles","bicycles"],a:1,w:"Pollution destroys homes (habitats) of aquatic life and birds."},
      {q:"True or false: when we pollute the environment, safe drinking water becomes scarce.",o:["True","False"],a:0,w:"True! Polluted water is unsafe, so safe drinking water becomes hard to find."}
    ]
  },
  reading: {
    title: "Reading Zone 🐉",
    notes: `<h3>How to Train Your Dragon (Cressida Cowell)</h3>
      <p>Hiccup is a small, freckled Viking boy on the island of Berk. He does not look like a hero, but he has bright red hair that stays hidden under his helmet.</p>
      <p>Hiccup must capture and train a dragon to live on Berk. Gobbler blows the horn and goes off to eat his sandwich, so Snotlout takes charge and has Dogsbreath bash Hiccup and Fishlegs into the snow.</p>
      <p>Snotlout orders the boys to rope themselves together. They climb a slippery black cliff to a cave. Clueless slips and falls, Dogsbreath catches him, and they reach the cave mouth. Hiccup looks down at the sea and swallows hard.</p>`,
    questions: [
      {q:"Who wrote How to Train Your Dragon?",o:["Cressida Cowell","Snotlout","Gobbler","Fishlegs"],a:0,w:"The author is Cressida Cowell."},
      {q:"What is the name of the island where Hiccup lives?",o:["Dragonia","Berk","Snowland","Viking Rock"],a:1,w:"Hiccup lives on the island of Berk."},
      {q:"Who takes charge after Gobbler moves away?",o:["Fishlegs","Clueless","Snotlout","Hiccup"],a:2,w:"Snotlout pushes Hiccup out of the way and takes charge."},
      {q:"What colour is Hiccup's Heroic Hair?",o:["Black","Yellow","Blue","Very bright red"],a:3,w:"His hair is very bright red and stands up straight."},
      {q:"Where is Hiccup's hair hidden most of the time?",o:["Under his helmet","Under a scarf","In the snow","Under a hat made of fur"],a:0,w:"Nobody sees it because it is hidden under his helmet."},
      {q:"What did Gobbler go off to eat?",o:["Fish and chips","A mussel-and-tomato sandwich","Roast chicken","Cake"],a:1,w:"He went to find a comfortable rock to eat a mussel-and-tomato sandwich."},
      {q:"Who is Snotlout's chief sidekick?",o:["Hiccup","Fishlegs","Dogsbreath","Gobbler"],a:2,w:"Dogsbreath is Snotlout's chief sidekick, a big gorilla of a boy."},
      {q:"What did Dogsbreath do to Hiccup in the snow?",o:["Gave him food","Shoved him and ground his face in the snow","Sang to him","Rescued him"],a:1,w:"Dogsbreath was delighted to obey Snotlout and shoved Hiccup face first into the snow."},
      {q:"Who slipped during the climb and was caught by Dogsbreath?",o:["Clueless","Snotlout","Hiccup","Fishlegs"],a:0,w:"Clueless missed his footing, fell onto Dogsbreath, and was heaved back onto the rock."},
      {q:"The climb is called 'perilous'. What does perilous mean?",o:["Boring","Funny","Short","Dangerous"],a:3,w:"Perilous means full of danger, like a slippery cliff by the sea."}
    ]
  }
};
