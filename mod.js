if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
if (MyMod === undefined) var MyMod = {};
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
MyMod.name = "Griffn hax cheat loader";
Game.LoadMod('https://klattmose.github.io/CookieClicker/KlattmoseUtilities.js');
Game.LoadMod('https://klattmose.github.io/CookieClicker/IdleTrading.js');
Game.LoadMod('https://klattmose.github.io/CookieClicker/Horticookie.js');
Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE-POCs/BlackholeInverter.js');
Game.LoadMod('https://klattmose.github.io/CookieClicker/minigameCasino.js');
MyMod.launch = function() {
    MyMod.isLoaded = 1;
    Game.customOptionsMenu.push(function() {
        CCSE.AppendCollapsibleOptionsMenu(MyMod.name,"cheat loader menu");
    });
    Game.customStatsMenu.push(function() {
        CCSE.AppendStatsVersionNumber(MyMod.name, "1.000");
    });
};
if (!MyMod.isLoaded) {
    if (CCSE && CCSE.isLoaded) {
        MyMod.launch();
    } else {
        if (!CCSE) var CCSE = {};
        if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
        CCSE.postLoadHooks.push(MyMod.launch);
    }
}
