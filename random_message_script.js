
// Create object that lists anime name, ratings, genre, main character and famous line

anime_list = [];

function anime_obj (name,rating,genre,mc,quote,status) {
    return {
        name:name,
        rating:rating,
        genre:genre,
        mc:mc,
        quote:quote,
        status
    }
};

function anime_info_factory (list,name, rating, genre, mc, quote,status){
    return list.push(anime_obj(name,rating,genre,mc,quote,status))
};

// Watched Anime - will include quote
anime_info_factory(anime_list,"Violet Evergarden",9.5,"Drama","Violet Evergarden", 'I want to know what "I love you" means.','watched');
anime_info_factory(anime_list,"Naruto",8,"Shonen","Naruto Uzumaki", 'Believe It!','watched');
anime_info_factory(anime_list,"Attack on Titan",10,"Dark Fantasy","Eren Jaeger", 'Devote your hearts!', 'watched');
anime_info_factory(anime_list,"Food Wars",8,"Comedy","Soma Yukihira", 'Glad you liked it!', 'watched');
anime_info_factory(anime_list,"One Piece",8.5,"Shonen","Monkey D. Luffy", "I'm going to be King of the Pirates!", 'watched');
anime_info_factory(anime_list,"Demon Slayer",8.5,"Dark Fantasy","Kamado Tanjiro", "Work at it. All I can do is work hard! That's the story of my life!", 'watched');
anime_info_factory(anime_list,"Haikyuu",9,"Sports","Shoyo Hinata", "Work at it. All I can do is work hard! That's the story of my life!", 'watched');

// Watching Anime - rating represents how much i want to watch on a scale of 1-10
anime_info_factory(anime_list,"Dr Stone",8,"Science Fiction","Senku Ishigami", 'I am 10 billion percent sure!', 'watching');
anime_info_factory(anime_list,"Promised Neverland",8,"Dark Fantasy","Emma", "Let's go see the world our friends wanted to see!", 'watching');
anime_info_factory(anime_list,"Beastars",7,"Drama","Legosi", "I'm tired of running away.", 'watching');
anime_info_factory(anime_list,"Jujutsu Kaisen",7.5,"Shonen","Yuji Itadori", "I don't want to regret anything because of the way I lived.", 'watching');
anime_info_factory(anime_list,"Welcome to the Ballroom",9,"Sports","Fujita Tatara", "If there was just one thing. Something that I could say I loved. I feel like I could change", 'watching');

// Anime to Watch
anime_info_factory(anime_list,"Free",6,"Sports","Nanase Haruka", null, 'watchlist');
anime_info_factory(anime_list,"Gintama",8,"Science Fiction","Gintama Yorinuki", null, 'watchlist');
anime_info_factory(anime_list,"Eden of the East",6,"Mystery","Morimi Saki", null, 'watchlist');
anime_info_factory(anime_list,"Terror in Resonance",7,"Mystery","Twelve", null, 'watchlist');
anime_info_factory(anime_list,"Monster",7,"Drama","Johan Liebert", null, 'watchlist');

function message_generator (list) {
    let index = Math.floor(Math.random()*list.length);
    let show = list[index]

    if (show.status === 'watched'){
        return `I watched the show ${show.name}, which is a ${show.genre} type anime. \n`+
            `The show stars ${show.mc} who often says "${show.quote}."\n`+
            `I think the show deserves the following rating: ${show.rating} out of 10. \n`
    }
    else if (show.status === 'watching'){
        return `I am currently watching ${show.name}, which is a ${show.genre} type anime. \n`+
            `The show stars ${show.mc} who often says "${show.quote}." \n`+
            `Currently, I would give the show the following rating: ${show.rating} out of 10. \n`
    }
    else{
        return `On my watchlist, I have the show ${show.name} in queue to watch next, which is a ${show.genre} type anime. \n`+
            `The show stars ${show.mc}, who is the main character of the show.\n`+
            `My desire to watch the show has the following rating: ${show.rating} out of 10\n`
    }
};


console.log(message_generator(anime_list))
