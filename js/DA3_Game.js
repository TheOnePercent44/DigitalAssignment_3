GrudgeMatch.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

GrudgeMatch.Game.prototype = {

    create: function () {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
        //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
		map = this.game.add.tilemap('map');
		map.addTilesetImage('greenBlock_32x32', 'greenBlock');
		map.addTilesetImage('blueBlock_32x32', 'blueBlock');
		var layer = map.createLayer('Background');
		layer = map.createLayer('Platforms');
		var player = Catfighter(this.game);
		
		map.setCollision(1, true, 'Platforms', true);
		
		
		//this.game.camera.setSize(100, 100);
		//this.game.camera.bounds = new Phaser.Rectangle(0, 0, 3216,3216);
		this.game.camera.follow(player, this.game.camera.FOLLOW_PLATFORMER);
		this.game.camera.update();
		
		this.game.physics.arcade.gravity.y = 100;
    },

    update: function () {

        //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
		
    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');

    }

};

/*function Catfighter(game)
{
	this.game = game;
	this.sprite = this.game.add.sprite(15, 15, 'catsheet', 0);
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	this.sprite.body.allowGravity = true;
	this.sprite.animations.add('idle', [0, 1, 2, 3], 20, true);
	this.sprite.animations.add('walk', [16, 17, 18, 19, 20, 21, 22, 23], 20, true);
	this.sprite.animations.play('idle');
	return this;
}*/