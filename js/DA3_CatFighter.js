function Catfighter(game, xcoord, ycoord)
{
	this.game = game;
	this.sprite = this.game.add.sprite(xcoord, ycoord, 'catsheet', 0);
	this.sprite.anchor.setTo(0.5, 0.5);
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	this.sprite.body.allowGravity = true;
	this.sprite.animations.add('idle', [0, 1, 2, 3], 8, true);
	this.sprite.animations.add('walk', [16, 17, 18, 19, 20, 21, 22, 23], 15, true);
	this.sprite.animations.add('jumpStart', [32, 33], 15, false);
	this.sprite.animations.add('inAir', [34, 35], 15, true);
	this.sprite.animations.add('landing', [36, 37, 38], 15, false);
	this.sprite.animations.play('idle');
	
	this.idle = function()
	{
		this.sprite.body.velocity.x = 0;
		//if(this.sprite.animations.currentAnim != 'idle')
		//	this.sprite.animations.stop(null, true);
		this.sprite.animations.play('idle');
	}
	
	this.runRight = function()
	{
		this.sprite.body.velocity.x = 100;
		//this.sprite.animations.stop(null, true);
		this.sprite.animations.play('walk');
		this.sprite.scale.x = 1;
	}
	
	this.runLeft = function()
	{
		this.sprite.body.velocity.x = -100;
		//this.sprite.animations.stop(null, true);
		this.sprite.animations.play('walk');
		this.sprite.scale.x = -1;
	}
	
	this.jump = function()
	{
		this.sprite.body.velocity.y = -500;
		this.sprite.animations.play('jumpStart');
		this.sprite.animations.play('inAir');
		this.inAir = true;
	}
	
	this.hitLand = function(player, layer)//accepts two arguments for compatibility with collide
	{
		if(this.inAir === true)
		{
			this.land();
			this.inAir = false;
		}
		else{}//do nothing, let idle or others take care of it
	}
	
	this.land = function()//accepts two arguments for compatibility with collide
	{
		this.sprite.animations.play('landing');
	}
}