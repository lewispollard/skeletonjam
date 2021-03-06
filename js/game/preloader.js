
SkeletonWar.Preloader = function (game) {

  this.background = null;
  this.preloadBar = null;

  //this.ready = false;

};

SkeletonWar.Preloader.prototype = {

  preload: function () {

    //  Show the loading progress bar asset we loaded in boot.js
    this.stage.backgroundColor = '#2d2d2d';

    this.preloadBar = this.add.sprite(this.game.width / 2 - 100, this.game.height / 2, 'preloaderBar');
    this.add.text(this.game.width / 2, this.game.height / 2 - 30, "Loading...", { font: "32px monospace", fill: "#fff" }).anchor.setTo(0.5, 0.5);

    //  This sets the preloadBar sprite as a loader sprite.
    //  What that does is automatically crop the sprite from 0 to full-width
    //  as the files below are loaded in.
    this.load.setPreloadSprite(this.preloadBar);

    //  Here we load the rest of the assets our game needs.
    this.load.image('title', 'assets/img/titleredux-text.png');
    this.load.image('darkPurple', 'assets/img/bg-static.png');
    this.load.image('powerup', 'assets/img/meat.png');
    this.load.spritesheet('player', 'assets/img/PLAYER-mockup.png', 64, 64);
    this.load.spritesheet('greenEnemy', 'assets/img/passiveskull_0.png', 64, 64);
    this.load.spritesheet('boss', 'assets/img/skeletonzeppelin-phase1.png', 512, 512);
    this.load.spritesheet('enemyBullet', 'assets/img/boneammo.png', 24, 24);
    this.load.spritesheet('explosion', 'assets/img/explosion.png', 64, 64);
    this.load.spritesheet('enemy2', 'assets/img/skellyrider.png', 64, 64);
    //this.load.image('enemy2', 'assets/img/enemyRed1.png');
    this.load.image('bullet', 'assets/img/shot_16px_0.png');
    this.load.audio('bgmusic1', ['assets/audio/bg1.ogg']);
    this.load.audio('title', ['assets/audio/title.ogg']);
    this.load.audio('boss', ['assets/audio/boss.ogg']);
    this.load.audio('playershoot', ['assets/audio/playershoot.ogg']);
    this.load.audio('splode2', ['assets/audio/splode2.ogg']);
    this.load.audio('powerup', ['assets/audio/powerup2.ogg']);
    this.load.audio('powerup_get', ['assets/audio/powerup1.ogg']);
    this.load.audio('hit', ['assets/audio/hit1.ogg']);
    this.load.audio('bossExplode', ['assets/audio/explode_large2.ogg']);
    this.load.audio('bossApproach', ['assets/audio/bigscaryshot.ogg']);
    this.load.audio('playerdie', ['assets/audio/playerdie2.ogg']);
    this.load.audio('enemyshoot', ['assets/audio/missileblow1.ogg']);
    this.load.audio('bossShoot', ['assets/audio/explode_large1.ogg']);

  },

  create: function () {

    //  Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
    this.preloadBar.cropEnabled = false;

  },

  update: function () {    
      this.state.start('MainMenu');
  }

};
