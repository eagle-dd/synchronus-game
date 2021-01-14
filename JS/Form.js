class Form{
    constructor(){
        
    }
    display(){
        var title=createElement('h2')
        title.html("car racing game")
        title.position(130, 0)
        var input=createInput("name")
        input.position(130, 160)
        var button = createButton('submit')
        button.position(250,200)
        var greeting = createElement('h3')
        button.mousePressed(function(){
            input.hide();
            button.hide();
            playerCount=playerCount+1
            var name=input.value();
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hello "+name)
            greeting.position(130,160)
        })
    }
}