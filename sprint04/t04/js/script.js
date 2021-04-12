function buttonwall_street() {
    let titleBlock = document.getElementById("title");
    let actorBlock = document.getElementById("actors");
    let text = document.getElementById("text");
    let image = document.getElementById("image");
    let title = titleBlock.children;
    let actors = actorBlock.children;
    document.getElementById("infinity_war").className = "disactive";
    document.getElementById("wall_street").className = "active";
    document.getElementById("inception").className = "disactive";
    title[0].innerHTML = "The Wolf of Wall Street";
    title[1].innerHTML = "April 22, 2019";
    text.innerHTML = "The Wolf of Wall Street is a 2013 American epic biographical black comedy crime film directed by Martin Scorsese and written by Terence Winter, " +
        "based on the 2007 memoir of the same name by Jordan Belfort. It recounts Belfort's perspective on his career as a stockbroker in New York City and" +
        "how his firm, Stratton Oakmont, engaged in rampant corruption " +
        "and fraud on Wall Street, which ultimately led to his downfall.";
    actors[0].innerHTML = "Leonardo Di Caprio";
    actors[1].innerHTML = "Jonah Hill";
    actors[2].innerHTML = "Margot Robbie";
    actors[3].innerHTML = "Matthew Mc Conaughey";
    actors[4].innerHTML = "Kyle Chandler";
    image.children[0].setAttribute("src", "assets/images/image.jpg");
}

function buttonInfinityWar() {
    let text = document.getElementById("text");
    let image = document.getElementById("image");
    let title = document.getElementById("title").children;
    let actors = document.getElementById("actors").children;
    document.getElementById("infinity_war").className = "active";
    document.getElementById("wall_street").className = "disactive";
    document.getElementById("inception").className = "disactive";
    title[0].innerHTML = "Avengers: Infinity War";
    title[1].innerHTML = "April 23, 2018";
    text.innerHTML = "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012)"+
     "and Avengers: Age of Ultron (2015), and the 19th film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans,"+
     "Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave Bautista, Zoe Saldana, Josh Brolin, and Chris Pratt. In the film, the Avengers and the Guardians of the Galaxy attempt to prevent Thanos from collecting the six all-powerful Infinity Stones"+
      "as part of his quest to kill half of all life in the universe.";
    actors[0].innerHTML = "Tom Holland";
    actors[1].innerHTML = "Chris Hemsworth";
    actors[2].innerHTML = "Robert Downey Jr";
    actors[3].innerHTML = "Scarlett Johansson";
    actors[4].innerHTML = "Chris Evans";
    image.children[0].setAttribute("src", "assets/images/images-1.jpg");
}

function buttonInception() {
    let titleBlock = document.getElementById("title");
    let actorBlock = document.getElementById("actors");
    let text = document.getElementById("text");
    let image = document.getElementById("image");
    let title = titleBlock.children;
    let actors = actorBlock.children;
    document.getElementById("infinity_war").className = "disactive";
    document.getElementById("wall_street").className = "disactive";
    document.getElementById("inception").className = "active";
    title[0].innerHTML = "Inception";
    title[1].innerHTML = "July 8, 2010";
    text.innerHTML = "Inception is a 2010 science fiction action film[4][5][6] \
    written and directed by Christopher Nolan, who also produced the film with his wife, \
    Emma Thomas.The film stars Leonardo DiCaprio as a professional thief who steals information\
    by infiltrating the subconscious of his targets.He is offered a chance to have his criminal history\
    erased as payment for the implantation of another person 's idea into a targets subconscious ";
    actors[0].innerHTML = "Leonardo DiCaprio";
    actors[1].innerHTML = "Ken Watanabe";
    actors[2].innerHTML = "Joseph Gordon-Levitt";
    actors[3].innerHTML = "Marion Cotillard";
    actors[4].innerHTML = "Elliot Page";
    image.children[0].setAttribute("src", "assets/images/images-2.jpeg");
}