var ReturnColor = function (type) {
    var color;
    switch (type) {
        case "一号店":
            color =  "RGB(24,83,141)";
            break;
        case "美丽说":
            color =  "RGB(230,131,168)";
            break;
        case "京东":
            color =  "RGB(23,125,127)";
            break;
        case "天猫":
            color =  "RGB(229,75,77)";
            break;
        case "淘宝":
            color =  "RGB(164,196,191)";
            break;
    }
    return color;
}