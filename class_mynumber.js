const rangeBlocksMap = new rangeDict(blocksMap);

class mynumber{

    constructor(x){

        if(typeof x == "string"){
            if(x.startsWith("0x")){
                x = parseInt(x, 16);
            }
        }
        this.x = x;

        //Integer
        //---------------------------------------------10---------------------------------------------
        this.xi10 = parseInt(this.x);
        //---------------------------------------------2---------------------------------------------
        this.xi2 = this.xi10.toString(2);
        this.xi2_24 = this.xi10.toString(2).padStart(24, "0");
        //---------------------------------------------8---------------------------------------------
        this.xi8 = this.xi10.toString(8);
        this.xi8_8 = this.xi10.toString(8).padStart(8, "0");
        //---------------------------------------------16---------------------------------------------
        this.xi16 = this.xi10.toString(16).toUpperCase();
        this.xi16_6 = this.xi10.toString(16).toUpperCase().padStart(6, "0");
        //---------------------------------------------256---------------------------------------------
        this.xR = String(parseInt(`${this.xi16_6[0]}` + `${this.xi16_6[1]}`, 16));
        this.xG = String(parseInt(`${this.xi16_6[2]}` + `${this.xi16_6[3]}`, 16));
        this.xB = String(parseInt(`${this.xi16_6[4]}` + `${this.xi16_6[5]}`, 16));
        this.xi256 = this.xR + " " + this.xG + " " + this.xB;
        //---------------------------------------------color---------------------------------------------
        //---------------------------------------------contrastColor---------------------------------------------
        this.color = "#" + this.xi16_6;
        this.contrastColor = this.getContrastColor(this.color);
        //---------------------------------------------(HSL)---------------------------------------------
        this.HSL = this.hexToHSL(this.xi16_6);
        //---------------------------------------------base64---------------------------------------------
        if(this.xi16_6 in base64Map){
            this.base64 = base64Map[this.xi16_6];
        }
        //---------------------------------------------Unicode---------------------------------------------
        //---------------------------------------------UTF8encode---------------------------------------------
        //---------------------------------------------UTF16encode---------------------------------------------
        this.unicode;
        this.control;
        this.utf8;
        this.utf16;
        this.utf32;
        this.unicodeName;
        this.unicodeNameRu;
        this.unicodeBlock;
        this.namedEscapeSequence;
        this.keyboard;
        this.entities = [];
        if((0 <= this.xi10) && (this.xi10 <= 0x10FFFF)){
            this.unicode = String.fromCodePoint(this.xi10);

            this.utf8 = Array.from(new TextEncoder().encode(this.unicode)).map(x => x.toString(16).toUpperCase().padStart(2, "0")).join(' ');
            this.utf16 = this.unicode.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0") + (this.unicode.charCodeAt(1) ? (" " + this.unicode.charCodeAt(1).toString(16).toUpperCase().padStart(4, "0")) : "");

            if(this.xi16_6 in unicodeMap){
                if(unicodeMap[this.xi16_6][0] != "<control>"){
                    this.unicodeName = (unicodeMap[this.xi16_6][0]).toLowerCase();
                    this.control = false;
                }
                else{
                    this.control = true;
                    this.unicodeName = controlCharactersMap[this.xi16_6][1];
                    this.namedEscapeSequence = controlCharactersMap[this.xi16_6][3];
                    this.keyboard = controlCharactersMap[this.xi16_6][4];
                }
            }
            if(this.xi16_6 in unicodeMapRu){
                if(unicodeMapRu[this.xi16_6][0] != "<control>"){
                    this.unicodeNameRu = unicodeMapRu[this.xi16_6][0].toLowerCase();
                }
                else{
                    this.unicodeNameRu = controlCharactersMap[this.xi16_6][2];
                }
            }

            this.unicodeBlock = rangeBlocksMap.get(this.xi16_6);

            if(this.xi16_6 in entitiesMap){
                this.entities = entitiesMap[this.xi16_6].sort();
            }
        }
        //---------------------------------------------namedHTMLColor---------------------------------------------
        this.HTMLcolor1;
        this.HTMLcolor2;
        if(this.xi16_6 in colorsMap){
            this.HTMLcolor1 = colorsMap[this.xi16_6][0];
            if(colorsMap[this.xi16_6][1])
                this.HTMLcolor2 = colorsMap[this.xi16_6][1];
        }
        //---------------------------------------------URI---------------------------------------------
        this.uri1;
        this.uri2;
        if(this.unicode){
            try {
                this.uri1 = encodeURI(this.unicode);
                this.uri2 = encodeURIComponent(this.unicode);
            }
            catch (error) {
                console.error("Error encoding URI:", error);
                this.uri1 = "";
                this.uri2 = "";
            }
        }
        //---------------------------------------------Brightness---------------------------------------------
        this.brightness = this.getBrightness(this.xi16_6);
        
       

        //Fraction
        this.f10 = x - this.xi10;
    }



    getBrightness(hexColor=this.xi16_6) {
        // Убираем символ #, если он есть
        hexColor = hexColor.replace(/^#/, '');

        // Преобразуем HEX в RGB
        let r = parseInt(hexColor.substring(0, 2), 16);
        let g = parseInt(hexColor.substring(2, 4), 16);
        let b = parseInt(hexColor.substring(4, 6), 16);

        // Рассчитываем яркость
        return (r * 299 + g * 587 + b * 114) / 1000;
    }

    getContrastColor(hexColor=this.xi16_6) {
        // Рассчитываем яркость фона
        let brightness = this.getBrightness(hexColor);

        // Определяем цвет текста в зависимости от яркости фона
        return brightness > 128 ? "#000000" : "#FFFFFF";
    }

    hexToHSL(hexColor) {
        hexColor = hexColor.replace(/^#/, '');

        // Преобразуем HEX в RGB
        let r = parseInt(hexColor.substring(0, 2), 16) / 255;
        let g = parseInt(hexColor.substring(2, 4), 16) / 255;
        let b = parseInt(hexColor.substring(4, 6), 16) / 255;

        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let delta = max - min;
        let h = 0, s = 0, l = (max + min) / 2;

        if (delta !== 0) {
            s = delta / (1 - Math.abs(2 * l - 1));
            if (max === r) {
                h = (g - b) / delta + (g < b ? 6 : 0);
            } else if (max === g) {
                h = (b - r) / delta + 2;
            } else {
                h = (r - g) / delta + 4;
            }
            h *= 60; // Перевод в градусы
        }

        return [ Math.round(h), Math.round(s * 100), Math.round(l * 100) ];
    }
}


//module.exports = mynumber;