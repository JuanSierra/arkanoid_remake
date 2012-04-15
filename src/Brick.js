function Brick(imgBrick, hits) {
        this.initialize(imgBrick);
    }
    Brick.prototype = new BitmapAnimation();
    Brick.prototype.BitmapAnimation_initialize = Brick.prototype.initialize;
    
    Brick.prototype.initialize = function (imgBrick, hits) {
        var localSpriteSheet = new SpriteSheet({
            images: [imgBrick], //image to use
            frames: { width:50, height:20, regX:0, regY: 0 },
            animations: {
                idle: [0, 0]
            }
        });
        this.BitmapAnimation_initialize(localSpriteSheet);
        this.gotoAndPlay("idle");
        this.name = "Brick";
        this.hits = hits;
        this.hitX = 25;
        this.hitY = 10;
        this.hit = 15;
    }

    Brick.prototype.tick = function () {
        
    }
    
    Brick.prototype.discountHits = function(){
        console.log(this.hits)
        this.hits--;
    }
    
    Brick.prototype.hitRadius = function (tX, tY, tHit) {
        if (tX - tHit > this.x + this.hitX) { return; }
        if (tX + tHit < this.x - this.hitX) { return; }
        if (tY - tHit > this.y + this.hitY) { return; }
        if (tY + tHit < this.y - this.hitY) { return; }

        //now do the circle distance test
        return this.hitX + tHit > (this.x - tX) || this.hitY + tHit > (this.y - tY);
    }
