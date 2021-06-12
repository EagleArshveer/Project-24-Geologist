class Stone{
	constructor(x,y,r){
		var options ={
			'restitution':0.8,
			'friction':0.9,
			'density':12
		}
        this.body=Bodies.rectangle(x, y,50,50, options);
		this.width = 60
		this.height = 45

		World.add(world, this.body);

	}

	display()
	{
			var pos = this.body.position;
            var angle = this.body.angle;
			push()
			translate(pos.x,pos.y);
			rotate(angle)
            rectMode(CENTER)
			fill("brown");
            rect(0, 0, this.width, this.height);
			pop()
	}

} 