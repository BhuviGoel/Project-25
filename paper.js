class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, 70, options)
		World.add(world, this.body);
		this.image = loadImage("paper.png");

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill("white")
			// ellipse(0,0,0,0);
			imageMode(CENTER);
			image(this.image, 0, 47, 70, 70);
			pop()
			
	}

}