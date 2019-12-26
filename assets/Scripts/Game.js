var Bomb=require('Bomb');
var Rock = require("Rock");

var Game = cc.Class({
    extends: cc.Component,

    properties: {
        fireNode : {
            default: null,
            type: cc.Node,
        },
 
        BombForce: {
         default: null,
         type:cc.Vec2,
        } ,
 
        RockForce: {
         default: null,
         type:cc.Vec2,
        } ,

        TextScore:{
            default: null,
            type: cc.Label
        },
    },
    statics:{
        self: null,
        getInstance: function() {
            if (Game.self == null){
                var node = new cc.Node("Game");
                Game.self = node.addComponent(Game);
            }
            return Game.self;
        }
    },

    ctor() {
        Game.self = this;
    },

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
    },

    start () { 
        this.score = 0;
    },

    onButtonClick(event, customEventData) {
       if (customEventData == "1"){
        var rock = new Rock(this.node, this.RockForce, new cc.Vec2(this.fireNode.x, this.fireNode.y));
       } else if (customEventData == "2") {
        var bomb = new Bomb(this.node, this.BombForce, new cc.Vec2(this.fireNode.x, this.fireNode.y));
       }
    },

    updateScore (){
        this.score += 1;
        this.TextScore.string = ''+ this.score;
    },

});
