import { WCssClass } from "../WDevCore/WModules/WStyleRender.js";
class Page2 {
    constructor(Articles = []){
        this.type = "div";
        this.props = { class: "ArticleList"}; 
        this.children = [this.Style];
        Articles.forEach(element => {
            this.children.push({
                type: "article", props: { 
                    class:"Article", innerHTML:element.contain
                }
            })
        }); 
    }
    Style = {
        type: "w-style",
        props: {
            ClassList: [
                new WCssClass(".ArticleList", {
                    display: "flex",
                    padding: "10px",
                    width: "100%",
                    "flex-direction": "column"
                }), new WCssClass(".Article", {
                    margin: "10px",
                    padding: "10px",
                    "box-shadow": "0 2px 2px 0 rgba(0, 0, 0, 0.5)"
                }),
            ]
        }
    };
}
export { Page2 }