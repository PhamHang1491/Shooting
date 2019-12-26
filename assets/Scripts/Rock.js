var Weapon = require("Weapon");

var Rock = cc.Class({
    extends: Weapon,

    properties: {
    },

    ctor: function(node) {
        cc.log("Rock's ctor");
    },

    setSpriteFrame() {
        var self = this;
        cc.loader.loadRes("Textures/rock", cc.SpriteFrame, function (err, spriteFrame) {
            self.sprite.spriteFrame = spriteFrame;
        });
    },
   

});
