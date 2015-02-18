function Catfighter(game)
{
	this.game = game;
	this.sprite = this.game.add.sprite(15, 15, 'catsheet', 0);
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	this.sprite.body.allowGravity = true;
	this.sprite.animations.add('idle', [0, 1, 2, 3], 20, true);
	this.sprite.animations.add('walk', [16, 17, 18, 19, 20, 21, 22, 23], 20, true);
	this.sprite.animations.play('idle');
	return this;
}