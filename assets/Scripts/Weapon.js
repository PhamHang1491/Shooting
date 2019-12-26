
var Weapon = cc.Class({
    extends: cc.Component,

    properties: {
        
     },

    ctor: function (node, force, pos) {
        this.force = force;

        this.newNode = new cc.Node("New Sprite");
        this.newNode.parent = node;
        
        this.newNode.setPosition(pos);

        this.initComponent();
        this.setSpriteFrame();

        this.startAction();
    },

    initComponent () {
        this.sprite = this.newNode.addComponent(cc.Sprite);
        this.rigidBody = this.newNode.addComponent(cc.RigidBody);
        this.rigidBody.enabledContactListener = true;
        
        this.collider = this.newNode.addComponent(cc.PhysicsCircleCollider); 
        this.collider.radius = 23;//this.newNode.size.width/2;
    },

    startAction() {
        this.rigidBody.linearVelocity = this.force;
    },
    
    setSpriteFrame() {
    },
  
});


