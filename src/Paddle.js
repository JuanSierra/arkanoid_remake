function Paddle(imgPaddle, x_start, x_end) {
        this.initialize(imgPaddle, x_start, x_end);
    }
    Paddle.prototype = new BitmapAnimation();
    Paddle.prototype.BitmapAnimation_initialize = Paddle.prototype.initialize;
    
    Paddle.prototype.initialize = function (imgPaddle, x_start, x_end) {
        var localSpriteSheet = new SpriteSheet({
            images: [imgPaddle], //image to use
            frames: { width:101, height:23, regX:0, regY: 0 },
            animations: {
                idle: [0, 0]
            }
        });
        this.BitmapAnimation_initialize(localSpriteSheet);
        this.x_start = x_start;
        this.x_end = x_end;
        this.gotoAndPlay("idle");
        this.name = "Paddle";
        this.x = x_end/2 + 50;
        this.y = 560;

        this.vX = 2;
        this.direction = 1;
        
    }

    Paddle.prototype.tick = function () {
        if(this.direction != 0)
        {
                this.x += this.vX * this.direction;
        }
    }