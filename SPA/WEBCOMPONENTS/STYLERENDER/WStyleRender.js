class WStyleRender extends HTMLElement {
    constructor(){
        super();  
    }
    attributeChangedCallBack(){
        this.innerHTML = "";
        this.DrawStyle();
    }
    connectedCallback(){
        this.DrawStyle();        
    }
    DrawStyle(){
        let Style = document.createElement("style");
        let bodyStyle = "";        
        this.ClassList.forEach(Class => {
            let bodyClass = "";
            for (const prop in Class.CSSProps) {
                bodyClass = bodyClass + `${prop}: ${Class.CSSProps[prop]};`;               
            }
            bodyClass = `${Class.Name} {${bodyClass}}`;
            bodyStyle = bodyStyle + bodyClass;             
        });
        Style.innerHTML = bodyStyle;
        this.append(Style);
    }
}
class CSSProps  {
    "align-content" = null;
    "align-items" = null;
    "align-self" = null;
    "all" = null;
    "animation" = null;
    "animation-delay" = null;
    "animation-direction" = null;
    "animation-duration" = null;
    "animation-fill-mode" = null;
    "animation-iteration-count" = null;
    "animation-name" = null;
    "animation-play-state" = null;
    "animation-timing-function" = null;
    "caption-side" = null;
    "caret-color" = null;
    //"@charset" = null;
    "clear" = null;
    "clip" = null;
    "color" = null;
    "column-count" = null;
    "column-fill" = null;
    "column-gap" = null;
    "column-rule" = null;
    "column-rule-color" = null;
    "column-rule-style" = null;
    "column-rule-width" = null;
    "column-span" = null;
    "column-width" = null;
    "columns" = null;
    "content" = null;
    "counter-increment" = null;
    "counter-reset" = null;
    "cursor" = null;
    "direction" = null;
    "display" = null;
    "empty-cells" = null;
    "filter" = null;
    "flex" = null;
    "flex-basis" = null;
    "flex-direction" = null;
    "flex-flow" = null;
    "flex-grow" = null;
    "flex-shrink" = null;
    "flex-wrap" = null;
    "float" = "left" || "right" || "commit";
    "font" = typeof "string";
    //"@font-face" = null;
    "font-family" = null;
    "font-feature-settings" = null;
    //"@font-feature-values" = null;
    "font-kerning" = null;
    "font-language-override" = null;
    "font-size" = null;
    "font-size-adjust" = null;
    "font-stretch" = null;
    "font-style" = null;
    "font-synthesis" = null;
    "font-variant" = null;
    "font-variant-alternates" = null;
    "font-variant-caps" = null;
    "font-variant-east-asian" = null;
    "font-variant-ligatures" = null;
    "font-variant-numeric" = null;
    "font-variant-position" = null;
    "font-weight" = null;
    "grid" = null;
    "grid-area" = null;
    "grid-auto-columns" = null;
    "grid-auto-flow" = null;
    "grid-auto-rows" = null;
    "grid-column" = null;
    "grid-column-end" = null;
    "grid-column-gap" = null;
    "grid-column-start" = null;
    "grid-gap" = null;
    "grid-row" = null;
    "grid-row-end" = null;
    "grid-row-gap" = null;
    "grid-row-start" = null;
    "grid-template" = null;
    "grid-template-areas" = null;
    "grid-template-columns" = null;
    "grid-template-rows" = null;
    "hanging-punctuation" = null;
    "height" = null;
    "hyphens" = null;
    "image-rendering" = null;
    //"@import" = null;
    "isolation" = null;
    "justify-content" = null;
    //"@keyframes" = null;
    "left" = null;
    "letter-spacing" = null;
    "line-break" = null;
    "line-height" = null;
    "list-style" = null;
    "list-style-image" = null;
    "list-style-position" = null;
    "list-style-type" = null;
    "margin" = null;
    "margin-bottom" = null;
    "margin-left" = null;
    "margin-right" = null;
    "margin-top" = null;
    "max-height" = null;
    "max-width" = null;
    //"@media" = null;
    "min-height" = null;
    "min-width" = null;
    "mix-blend-mode" = null;
    "object-fit" = null;
    "object-position" = null;
    "opacity" = null;
    "order" = null;
    "orphans" = null;
    "outline" = null;
    "outline-color" = null;
    "outline-offset" = null;
    "outline-style" = null;
    "outline-width" = null;
    "overflow" = null;
    "overflow-wrap" = null;
    "overflow-x" = null;
    "overflow-y" = null;
    "padding" = null;
    "padding-bottom" = null;
    "padding-left" = null;
    "padding-right" = null;
    "padding-top" = null;
    "page-break-after" = null;
    "page-break-before" = null;
    "page-break-inside" = null;
    "perspective" = null;
    "perspective-origin" = null;
    "pointer-events" = null;
    "position" = null;
    "quotes" = null;
    "resize" = null;
    "right" = null;
    "scroll-behavior" = null;
    "tab-size" = null;
    "table-layout" = null;
    "text-align" = null;
    "text-align-last" = null;
    "text-combine-upright" = null;
    "text-decoration" = null;
    "text-decoration-color" = null;
    "text-decoration-line" = null;
    "text-decoration-style" = null;
    "text-indent" = null;
    "text-justify" = null;
    "text-orientation" = null;
    "text-overflow" = null;
    "text-shadow" = null;
    "text-transform" = null;
    "text-underline-position" = null;
    "top" = null;
    "transform" = null;
    "transform-origin" = null;
    "transform-style" = null;
    "transition" = null;
    "transition-delay" = null;
    "transition-duration" = null;
    "transition-property" = null;
    "transition-timing-function" = null;
    "unicode-bidi" = null;
    "user-select" = null;
    "vertical-align" = null;
    "visibility" = null;
    "white-space" = null;
    "widows" = null;
    "width" = null;
    "word-break" = null;
    "word-spacing" = null;
    "word-wrap" = null;
    "writing-mode" = null;
    "z-index" = null;
}   

class WCssClass { 
    constructor(ClassName, PropList = (new CSSProps())){
        this.Name = ClassName;
        this.CSSProps = PropList;
    }
}


customElements.define("w-style", WStyleRender);
