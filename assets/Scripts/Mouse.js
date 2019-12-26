var Game = require("Game");

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.anim = this.getComponent(cc.Animation);
    },

    onBeginContact: function (contact, selfCollider, otherCollider) {
        this.anim.playAdditive("mouse_hurt");
        otherCollider.destroy();
        Game.getInstance().updateScore();
    }, 
});
