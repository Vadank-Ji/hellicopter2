class Vessel {

  constructor(x, y, w1, w2, w3, h1, h2, h3)
  {

    this.body = Bodies.rectangle( x, y, w1, w2, w3, h1, h2, h3 )
       World.add(world, this.body)

      // this.position.x = x;
      // this.position.y = y;

       this.width = w1
       this.width1 =w2;
       this.width1= w3;
       this.height = h1;
       this.height1= h2;
       this.height= h3;

       this.x = x ;

       this.y = y;

    }






 display(){

   if(this.width >= 1 && this.height >= 1)
   {

   rectMode(CENTER);
   rect( this.x + 6/2, this.y , 6, this.height );
   rect( this.x - 6/2 , this.y , 6, this.height1 );
   rect( this.x + this.width3/2 , this.y , this.width2 , 6 );

    }

  }

}
