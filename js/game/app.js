window.onload = function() {
    SkeletonWar.setDefaults();
    var game = new Phaser.Game(SkeletonWar.WIDTH, SkeletonWar.HEIGHT, Phaser.AUTO, 'gameContainer', null, false, false);

    game.state.add('Boot', SkeletonWar.Boot);
    game.state.add('Preloader', SkeletonWar.Preloader);
    game.state.add('MainMenu', SkeletonWar.MainMenu);
    game.state.add('Game', SkeletonWar.Game);
    // Now start the Boot state.
    game.state.start('Boot');
};