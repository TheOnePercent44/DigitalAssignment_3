function Catfighter(game, xcoord, ycoord)
{
	this.game = game;
	this.sprite = this.game.add.sprite(xcoord, ycoord, 'catsheet', 0);
	this.sprite.anchor.setTo(0.5, 0.5);
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	this.sprite.body.allowGravity = true;
	this.sprite.animations.add('idle', [0, 1, 2, 3], 10, true);
	this.sprite.animations.add('walk', [16, 17, 18, 19, 20, 21, 22, 23], 10, true);
	this.sprite.animations.play('idle');
	
	this.idle = function()
	{
		this.sprite.animations.stop();
		this.sprite.animations.play('idle');
	}
	
	this.runRight = function(xspeed)
	{
		this.sprite.body.velocity.x = xspeed;
		if(xspeed < 0)
			this.sprite.scale(-1, 1);
		else
			this.sprite.scale(1, 1);
	}
	//return this;
}