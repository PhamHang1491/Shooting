var Weapon = require("Weapon");

var Rock = cc.Class({
    extends: Weapon,

    properties: {
    },


    setSpriteFrame() {
        var self = this;
        cc.loader.loadRes("Textures/bomb", cc.SpriteFrame, function (err, spriteFrame) {
            self.sprite.spriteFrame = spriteFrame;
        });
        
        cc.log("radius: " + this.collider.radius);
    },
  
});
