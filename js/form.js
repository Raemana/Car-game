class Form{
    constructor(){
        this.input = createInput('name')
        this.button = createButton('play')
        this.greeting = createElement('H3')
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
    var title = createElement('H1')
    title.html("car racing game")
    title.position(250,20)
    this.input.position(250,200)
    this.button.position(250,299)
    this.button.mousePressed((data)=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount += 1
    player.index = playerCount;
    player.update(name);
    player.updatecount(playerCount);
    this.greeting.html("hi",+ player.name);
    this.greeting.position(250,100);
    })
    }
}