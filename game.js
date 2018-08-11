import Main from './js/main'

let main = new Main();
//一行的高度，宽度，间距
let List = {
    WIDTH     : main.canvas.width * 6 / 9,
    HEIGHT    : main.canvas.height / 11,
    //行的间距
    OFFSET    : main.canvas.height / 28,
    //起始x 坐标
    STARTX    : 60,
    //起始Y 坐标
    STARTY    : 60,
    //该行背景色
    COLOR     : '',
    //一行中字体的颜色
    FONTCOLOR  : '',
    FONTESTYLE : '20px serif',
    FONTTOP    : 40,
    IMAGETOP  : 5,
    IMAGEWIDTH  : 50,
    IMAGEHEIGHT : 50,
}
//可以容纳的行数
let ROWNUMBER =  Math.floor((main.canvas.height - List.STARTY) / (List.HEIGHT + List.OFFSET));
console.log("可以容纳的最大的行数是：",ROWNUMBER);
//需要显示出来的数据
let Data = [{
    RANK        : 1,
    imageUrl    : "https://wx.qlogo.cn/mmopen/vi_32/1NZaKkTpsHvO9H6m8sJO4SjrQp6VVnng4NpJuslNdKhxpR6Is1mc2bRstaypXrq1IFuw84q3iaw0gNGRAtNNWew/132",
    nickname    : '燕子姐',
    score       : '210'
    },
    {
        RANK: 2,
        imageUrl: "https://wx.qlogo.cn/mmopen/vi_32/1NZaKkTpsHvO9H6m8sJO4SjrQp6VVnng4NpJuslNdKhxpR6Is1mc2bRstaypXrq1IFuw84q3iaw0gNGRAtNNWew/132",
        nickname: 'Eagles',
        score: '220'
    },
    {
        RANK: 3,
        imageUrl: "https://wx.qlogo.cn/mmopen/vi_32/1NZaKkTpsHvO9H6m8sJO4SjrQp6VVnng4NpJuslNdKhxpR6Is1mc2bRstaypXrq1IFuw84q3iaw0gNGRAtNNWew/132",
        nickname: '燕子姐',
        score: '210'
    },
    {
        RANK: 4,
        imageUrl: "https://wx.qlogo.cn/mmopen/vi_32/1NZaKkTpsHvO9H6m8sJO4SjrQp6VVnng4NpJuslNdKhxpR6Is1mc2bRstaypXrq1IFuw84q3iaw0gNGRAtNNWew/132",
        nickname: 'Eagles',
        score: '220'
    },
    {
        RANK: 5,
        imageUrl: "https://wx.qlogo.cn/mmopen/vi_32/1NZaKkTpsHvO9H6m8sJO4SjrQp6VVnng4NpJuslNdKhxpR6Is1mc2bRstaypXrq1IFuw84q3iaw0gNGRAtNNWew/132",
        nickname: '燕子姐',
        score: '210'
    },
    {
        RANK: 6,
        imageUrl: "https://wx.qlogo.cn/mmopen/vi_32/1NZaKkTpsHvO9H6m8sJO4SjrQp6VVnng4NpJuslNdKhxpR6Is1mc2bRstaypXrq1IFuw84q3iaw0gNGRAtNNWew/132",
        nickname: 'Eagles',
        score: '220'
    }
    ]
//绘制底图
main.drawRect(50, 50, main.canvas.width * 3 / 4, main.canvas.height * 3 / 4,'#6969FF');
//绘制排名行
for(let i = 0;i < Data.length;i++){
    
    if(i % 2 === 0 ){
        List.COLOR = '#D8BFD8';
        List.FONTCOLOR = '#ffffff';
    }else{
        List.COLOR = '#D3D3D3'
        List.FONTCOLOR = '#ec0063';
    }
    main.drawRect(List.STARTX, List.STARTY + i*(List.HEIGHT +  List.OFFSET), List.WIDTH, List.HEIGHT, List.COLOR);
    //绘制数据中的内容
    let dataItem = Data[i];
    // drawText(offsetX, offsetY, content, color, fontSize)
    main.drawText(List.STARTX + 5,List.STARTY + List.FONTTOP + i *(List.HEIGHT + List.OFFSET),dataItem.RANK,List.FONTCOLOR,List.FONTESTYLE);
    let imagePromise = new Promise(function(resolve,reject){
        //绘制图像内容
        let image = wx.createImage();
        image.src = dataItem.imageUrl;
        image.onload = function () {
            resolve(image);
        }
    });
    imagePromise.then(function(image){
        console.log("image is ",image);
        // drawImage(image, dx, dy, dWidth, dHeight)
        main.drawImage(image, List.STARTX + 30, List.STARTY + List.IMAGETOP + i * (List.HEIGHT + List.OFFSET), List.IMAGEWIDTH, List.IMAGEHEIGHT);
    });
    //绘制昵称
    main.drawText(List.STARTX + 93, List.STARTY + List.FONTTOP + i * (List.HEIGHT + List.OFFSET), dataItem.nickname, List.FONTCOLOR, List.FONTESTYLE);
    main.drawText(List.STARTX + 190, List.STARTY + List.FONTTOP + i * (List.HEIGHT + List.OFFSET), dataItem.score, List.FONTCOLOR, List.FONTESTYLE);

}

// main.drawText(65,100,'1','white','25px serif');
