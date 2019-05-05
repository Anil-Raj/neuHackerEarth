    export default class Colorize {
        constructor() {
            this.highLightedWord = [];
            this.stylableWordClassList = [
                {
                    className: "ace_keyword",
                    list: [" abstrac","argument","await*","boolean",
                    "break","byt","cas","catch",
                    "cha","class*",	"const","continue",
                    "debugge","defaul","delet","do",
                    "doubl","els","enum*","eval",
                    "export*	extends*	false","final",
                    "finally","float","for","function",
                    "got","implement","import*",
                    "if","instanceof","int","interface",
                    "let*",	"long","native","new",
                    "null","packag","private","protected",
                    "public","return","short","statict",
                    "super*",	"switch","synchronize","this",
                    "throw","throw","transien","true",
                    "try","typeof","var","void",
                    "volatile","while","with","yield"],
                },
                {
                    className: "ace_comment",
                    list: ["anil"]
                },
                {
                    className: "ace_identifier",
                    list: []
                }
            ];

            this.highLightedWord = this.stylableWordClassList.map(obj => obj.list.join("|")).join("|").slice(0, -1)
            this.regexFromMyArray = new RegExp(this.highLightedWord, 'ig');
            console.log(this.highLightedWord,this.regexFromMyArray);
            
        }

        getRegex = () => {
            return this.regexFromMyArray;
        };
        getColorizedContent = (str) => {
            console.log(str);
            return '<span class="' + this.stylableWordClassList.find(obj => obj).className + '">' + str + '</span>'
        }
    }