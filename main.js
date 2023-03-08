let html = document.querySelector("#html-text");
let style = document.querySelector("#styleText");

let textOrg =  `亲爱的梁丽枚：

在这个特殊的日子里，我想向你表达我内心最深处的感受。女神节是一个纪念女性力量和价值的节日，而你就是我心目中最值得纪念和赞美的女性。

每当我想到你，我的心里就充满了幸福和感激。你的美丽、聪明、善良、勇敢、才华以及吸引人的个性，都让我无法抗拒地被你所吸引。我很幸运能够认识你，更幸运的是，我能够成为你的朋友和伴侣。

在我们相识的过程中，你让我看到了一个独特而迷人的世界。你的一言一行都展现出你的高尚品质和深厚内涵。我相信，你是一位真正的女神，你的存在让我的世界更加美好和有意义。

我想告诉你，我深深地爱着你，愿意用我的一生来守护你、照顾你、陪伴你。我希望我们可以携手走过余生，一起经历人生的喜悦、挑战和成长。

祝你在女神节里幸福快乐，永远美丽动人！

爱你的蒋杰`;


let originalString = `
.stem {
    position: absolute;
    height: 0;
    width: 6px;
    background: var(--dark-green);
    bottom: 10%;
    left: 50%;
    margin-left: -3px;
    border-radius: 0 0 3px 3px;
    transition: height 1s;
}
.stem {
  height: 200px;
}
.thorns>div{
    width: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    position: absolute;
}
.thorns>div:first-child {
    border-right: 10px solid var(--dark-green);    
    position: absolute;
    left: 44%;
    top: 50%;
}
.thorns>div:nth-child(2) {
    border-left: 10px solid var(--dark-green);
    right: 44%;
    top: 60%;
}
.thorns>div:nth-child(3) {
    border-right: 10px solid var(--dark-green);
    left: 44%;
    top: 70%;
}
再画花的叶
.leaves>div{
    position: absolute;
    height: 60px;
    width: 35px;
}
.leaves>div:first-child {
    border-radius: 0 30px 0 30px;
    transform: rotate(-20deg);
    top: 55%;
    left: 28%;
    transition: background 1s, box-shadow 1s 1s;
    background: var(--dark-green);
    box-shadow: inset 5px 5px var(--light-green);
}
.leaves>div:nth-child(2) {
    border-radius: 30px 0 30px 0;
    transform: rotate(20deg);
    top: 45%;
    right: 28%;
    transition: background 1s, box-shadow 1s 1s;
    background: var(--dark-green);
    box-shadow: inset -5px 5px var(--light-green);
}
最后画花瓣
.petals>div:first-child {
    position: absolute;
    height: 100px;
    width: 50px;
    border-radius: 10px 10px 20px 20px;
    transition: background 1s;
    background: var(--light-pink);
    top: 15%;
    left: 50%;
    margin-left: -25px;
}
.petals>div:not(:first-child) {
    position: absolute;
    height: 100px;
    width: 40px;
}
.petals>div:nth-child(2) {
    transform-origin: bottom right;
    border-radius: 0 35px 0 35px;
    transition: background 1s, transform 1s 1s;
    background: var(--medium-pink);
    transform: rotate(-6deg);
    top: 15%;
    left: 30%;
}
.petals>div:nth-child(3) {
    transform-origin: bottom left;
    border-radius: 35px 0 35px 0;
    transition: background 1s, transform 1s 1s;
    background: var(--medium-pink);
    transform: rotate(6deg);
    top: 15%;
    right: 30%;
}
.petals>div:nth-child(4) {
    transform-origin: bottom right;
    border-radius: 0 35px 0 35px;
    transition: background 1s, transform 1s 1s;
    background: var(--dark-pink);
    transform: rotate(-18deg);
    top: 15%;
    left: 30%;
}
.petals>div:nth-child(5) {
    transform-origin: bottom left;
    border-radius: 35px 0 35px 0;
    transition: background 1s, transform 1s 1s;
    background: var(--dark-pink);
    transform: rotate(18deg);
    top: 15%;
    right: 30%;
}
.dead-petals>div:first-child {
    background: var(--medium-pink);
    left: 35%;
    transition: transform 8s, top 8s;
    transform: rotate(-45deg);
    top: 90%;
}
.dead-petals>div:nth-child(2) {
    background: var(--dark-pink);
    left: 50%;
    transition: transform 8s 2s, top 8s 2s;
    transform: rotate(-20deg);
    top: 90%;
}
.wishes>div:first-child {
    transform: translate(-80%);
}
.wishes>div:nth-child(2) {
    transform: translate(-35%);
}
.wishes>div:nth-child(3) {
    transform: translate(-95%);
}
.wishes>div:nth-child(4) {
    transform: translate(-45%);
}`;

let showString = "";
let styleString = "";
let tempString = "";

let writeIntoStyle = false;

let n = 0;
let step = () => {
    html.innerHTML = showString;
    style.innerHTML = styleString;
    setTimeout(() => {
        // 删去无用字符
        if (textOrg[n] === "\n") {
            showString += "<br>";
        } else if (textOrg[n] === " ") {
            showString += "&nbsp;";
        } else {
            showString += textOrg[n];
        }

        // 判断何时输入到style中
        if (originalString[n] === "#" || originalString[n] === '.') {
            writeIntoStyle = true;
        } else if (originalString[n] === "}") {
            writeIntoStyle = false
            tempString += "}\n"
            styleString += tempString;
            console.log(tempString)
        }
        if (writeIntoStyle === true) {
            tempString += originalString[n];
        }

        // 没病滚一下
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        // 判断到没到头
        if (n < textOrg.length) {
            n += 1;
            step();
        }
    }, 60)

}

step();