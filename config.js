// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我的贺婉欣小可爱",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "今天是你的生日",  // 同上...
        "也是开始奔二的年纪啦！",
        "人是要慢慢长大的",
        "当然人生道路上也不一定孤独",
        "人生的动力啊",
        "就是感受未知带来的经历",
        "人生如果只有结果呢",
        "那就会是毫无意义的啦",
        "最后~",
        "别人都祝你快乐",
        "我只愿你，遍历山河",
        "觉得人间值得",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "假装是照片": "./imgs/xka.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我！",
        play: "再来！",
        bannar_coming: "还有！",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR 贺婉欣",
    }
};
