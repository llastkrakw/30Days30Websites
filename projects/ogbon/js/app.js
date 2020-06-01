class Message {

    static number = 0;
    constructor(title, message) {

        this.title = title;
        this.message = message;
        this.id = ++Message.number;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title
    }

    getMessage() {
        return this.message
    }
}

var a = new Message("the history of africa is not the history of colonistaion.", "If there is one thing i hate, it is education in africa, in my case in cameroon. almost 14 years of schooling from kindergarten to tle and we are taught almost only two things in history, colonization and world war. the only two things" +
    "in the world that reduce africa and africans to the state of slavery, taking away our nobility and our freedom. It's time for all of us to open our eyes, brothers. Let me tell you something . . .");
var b = new Message("Melanin is a divine blessing.", "Melanin perfects the nervous system in such a way that messages from the brain reach other parts of the body more quickly in melanoderms. The abundance of melanin in black people produces an organism that performs better, physically, mentally and spiritually. Apart from the information provided by some pan-African researchers, studies on melanin and its properties are rare, incomplete, even dishonest and misleading. Now know that we are superior humans, I realize this when I see all its genius shining in sciences that we have not even discovered and despite the constraints of our context, it is time to chart our own course.");
var c = new Message("We've forgotten all about our glorious past", " Abubakari II, Mansa (king) of the Empire of Mali in the fourteenth century, and grandfather of the legendary soundiata keita Mansa in his turn, was one of the greatest explorers this world has known, in fact he was the first man with his crew to discover America, 200 years before the arrival of Christopher Columbus. But his person will not tell you in history, you will be told that everything is because of the white man and in ignorance begins the alienation. I think that Marthin L. King's dream is neither a dream nor a utopia, utopia is the reality of Africa and of the black-skinned being that they make us live now and since always since their famous colonization. ");
var d = new Message("So common new generation we will build new africa", "I love this word of youssoupha " +
    "\" To each brother on the way back \". it's now that it begins, imagine for a single second all his talents of our continent in any field, united in the same androit with one goal to beat a new africa. i often like to say that africa is a dragon who asks for a lighter (stupid paradox). so i wait for the points to be brandished because great men are not born in the greatness no they grow.");
var e = new Message("I want to see the future in the eyes of our children", "I love youssoupha’s words because they pave the way for a new generation. \" I don’t want to be a victim of history, I want my children to write it \". Of course, our happiness or our development does not date from that of the West, it is time that we make things our way. That food, care and primary needs are no longer an end in themselves, it is not a fatalism we are capable of if we are united and act for others. What I hope is a black desire?");

var messages = [a, b, c, d, e];

var message = document.querySelector(".message");
var title = document.querySelector(".message-title blockquote");
var message_content = document.querySelector(".message-content blockquote");
var number = document.querySelector(".message-number");
var aleft = document.querySelector(".arrow-left");
var aright = document.querySelector(".arrow-right");

title.innerHTML = a.getTitle();
message_content.innerHTML = a.getMessage();
number.innerHTML = "#0" + a.getId();
message.style.background = "url(\"./assets/background-1.jpg\") no-repeat 30% 50%";


var iteration = 0;

var goToNext = () => {
    if (iteration < messages.length - 1) {


        iteration++;

        var next = messages[iteration];

        console.log(next);

        title.innerHTML = next.getTitle();
        message_content.innerHTML = next.getMessage();
        number.innerHTML = "#0" + next.getId();

        switch (next.getId()) {
            case 1:
                message.style.background = "url(\"./assets/background-1.jpg\") no-repeat 30% 50%";
                break;
            case 2:
                message.style.background = "url(\"./assets/background-1.jpg\") no-repeat 30% 50%";
                break;
            case 3:
                message.style.background = "url(\"./assets/background-4.jpg\") no-repeat 30% 50%";
                break;
            case 4:
                message.style.background = "url(\"./assets/background-2.jpg\") no-repeat";
                message.style.backgroundSize = "contain";
                break;
            case 5:
                message.style.background = " url(\"./assets/background-7.jpg\") no-repeat, url(\"./assets/background-8.jpg\") no-repeat 250% 50%";
                message.style.backgroundSize = "contains";
                break;
        }

        console.log(iteration);
    } else {
        iteration = 0;
        title.innerHTML = a.getTitle();
        message_content.innerHTML = a.getMessage();
        number.innerHTML = "#0" + a.getId();
        message.style.background = "url(\"./assets/background-1.jpg\") no-repeat 30% 50%";
    }

};

var backToPrevious = () => {


    if (iteration > 0) {

        var next = messages[iteration - 1];

        console.log(next);

        title.innerHTML = next.getTitle();
        message_content.innerHTML = next.getMessage();
        number.innerHTML = "#0" + next.getId();

        switch (next.getId()) {
            case 1:
                message.style.background = "url(\"./assets/background-1.jpg\") no-repeat 30% 50%";
                break;
            case 2:
                message.style.background = "url(\"./assets/background-1.jpg\") no-repeat 30% 50%";
                break;
            case 3:
                message.style.background = "url(\"./assets/background-4.jpg\") no-repeat 30% 50%";
                break;
            case 4:
                message.style.background = "url(\"./assets/background-2.jpg\") no-repeat";
                message.style.backgroundSize = "contain";
                break;
            case 5:
                message.style.backgroundImage = " url(\"./assets/background-7.jpg\"), url(\"./assets/background-8.jpg\")";
                message.style.backgroundRepeat = "no-repeat, no-repeat"
                message.style.backgroundSize = "contain, 250% 50%";
                break;
        }

        iteration--;
    }

}

aleft.addEventListener('click', backToPrevious, false);

aright.addEventListener('click', goToNext, false);