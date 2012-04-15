function Ball(imgBall, bound_x, bound_y) {
        this.initialize(imgBall, bound_x, bound_y);
    }
    Ball.prototype = new BitmapAnimation();
    Ball.prototype.BitmapAnimation_initialize = Ball.prototype.initialize;
    
    Ball.prototype.initialize = function (imgBall, bound_x, bound_y) {
        var localSpriteSheet = new SpriteSheet({
            images: [imgBall], //image to use
            frames: { width:25, height:25, regX:12.5, regY: 12.5 },
            animations: {
                idle: [0, 0]
            }
        });
        this.BitmapAnimation_initialize(localSpriteSheet);
        this.gotoAndPlay("idle");
        this.name = "Ball";
        this.bound_x = bound_x;
        this.bound_y = bound_y;
        
        this.directionX = 1;
        this.directionY = 1;
        // velocity
        this.vX = 2;
        this.vY = 2;
        this.r = 12.5;
    }

    Ball.prototype.tick = function () {
        this.x += this.vX * this.directionX;
        this.y += this.vY * this.directionY;
        
        if(this.x<0 || this.x>this.bound_x)
        {
            this.directionX *= -1;
        }
        
        if(this.y<0 || this.y>this.bound_y)
        {
            this.directionY *= -1;
        }
    }