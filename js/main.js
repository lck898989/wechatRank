export default class Main{
    constructor(){
        this.canvas = wx.createCanvas();
        this.context = this.canvas.getContext('2d');
        console.log(this.canvas.width,this.canvas.height);
        this.drawRect(0,0,this.canvas.width,this.canvas.height,'white');
    }
    /**
     *@param offsetX : 距离屏幕的左边的距离
     *@param offsetY : 距离屏幕上边的距离 
     *@param width   : 要绘制的画面的宽度
      @param height  : 要绘制画面的高度
      @param color   : 要绘制画面的颜色 
     */
    drawRect(offsetX,offsetY,width,height,color){
        this.context.fillStyle = color;
        this.context.fillRect(offsetX, offsetY, width, height);
    }
    //绘制文本
    drawText(offsetX,offsetY,content,color,fontSize){
        this.context.fillStyle = color;
        this.context.font = fontSize;
        this.context.fillText(content,offsetX,offsetY);
    }
    //绘制图片 void ctx.drawImage(image, dx, dy, dWidth, dHeight);
    drawImage(image,dx,dy,dWidth,dHeight){
        this.context.drawImage(image,dx,dy,dWidth,dHeight);
    }

}
