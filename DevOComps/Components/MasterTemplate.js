import { WCssClass } from "../WDevCore/WModules/WStyleRender.js"
import { ComponentsManager } from "../WDevCore/WModules/WComponentsTools.js";
import { WFormJs } from "../Views/FormJs.js";
const CompM = new ComponentsManager();

class MainTemplate {
    type = "div";
    props = { class: "MainTemplate" }
    MainStyle = {
        type: "w-style",
        props: {
            ClassList: [
                new WCssClass(".MainTemplate", {
                    display: "grid",
                    "grid-template-columns": "200px calc(100% - 200px)",
                    "grid-template-rows": "60px calc(100vh - 60px)",
                    "font-family": "arial",
                    margin: "auto",
                    width: "1440px",
                    "box-shadow": "0 2px 2px 0 rgba(0, 0, 0, 0.5)"
                }), new WCssClass(".MainTemplate header", {
                    "grid-column": "1/3",
                    display: "flex",
                    "justify-content": "center",
                    "align-items": "center",
                    "border-bottom": "10px solid #4be"
                }), new WCssClass(".MainTemplate nav", {
                    display: "flex",
                    "flex-direction": "column",
                    padding: "10px",
                    background: "#999999"
                }), new WCssClass(".MainTemplate nav a", {
                    "text-decoration": "none",
                    color: "#fff",
                    margin: "5px",
                    "font-weight": "bold",
                    cursor: "pointer"
                }), new WCssClass(".MainTemplate main", {
                    padding: "10px"
                }),
            ], MediaQuery: [
                {
                    condicion: "(max-width: 1440px)",
                    ClassList: [
                        new WCssClass(".MainTemplate", {
                            width: "100%"
                        })
                    ]
                }, {
                    condicion: "(max-width: 800px)",
                    ClassList: [
                        new WCssClass(".MainTemplate", {
                            width: "100%",
                            "grid-template-columns": "100%",
                            "grid-template-rows": "60px 60px calc(100vh - 120px)",
                        }), new WCssClass(".MainTemplate header", {
                            "grid-column": "1/2",
                        }),
                        new WCssClass(".MainTemplate nav", {
                            "flex-direction": "row",
                            "justify-content": "center",
                            "align-items": "center",
                        }), new WCssClass(".MainTemplate nav a", {
                            margin: "5px",
                            "margin-left": "10px",
                            "margin-right": "10px"
                        }),
                    ]
                }
            ]
        }
    };
    children = [
        this.MainStyle,
        new header(),
        new Navigator(),
        new Main(),
    ];
}
class Navigator {
    type = "nav";
    children = [
        {
            type: "a", props: {
                innerText: "Page 1", href: "#", onclick: async () => {
                    const { PageContainer } = await import("../Views/Page1.js");
                    CompM.NavigateFunction("page1", PageContainer, "MainApp");
                }
            }
        },
        {
            type: "a", props: {
                innerText: "Page 2", href: "#", onclick: async () => {
                    const ArticlesA = [{ contain: "Article A1" },
                    { contain: "Article A2" },
                    { contain: "Article A1" },
                    { contain: "Article A3" }];
                    const { Page2 } = await import("../Views/Page2.js");
                    CompM.NavigateFunction("page2", new Page2(ArticlesA), "MainApp");
                }
            }
        },
        {
            type: "a", props: {
                innerText: "Page 3", href: "#", onclick: async () => {
                    const ArticlesB = [{ contain: "Article B1" }, { contain: "Article B2" }, { contain: "Article B1" }, { contain: "Article B3" }];
                    const { Page2 } = await import("../Views/Page2.js");
                    CompM.NavigateFunction("page3", new Page2(ArticlesB), "MainApp");

                }
            }
        },
        {
            type: "a", props: {
                innerText: "Formulario 1", href: "#", onclick: async () => {
                    const ModelObject = {
                        id_y: 1,
                        // descripcion: "",
                        // Nombres: "",
                        // Apellidos: "",
                        // Direccion: ""
                    }
                    const Save = async (Objeto)=>{
                        const url = 'http://localhost:3020/API_PHP/FormAPI.php';
                        const Data = await  fetch(url, {
                            method: "POST",
                            body: JSON.stringify(Objeto),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        const JData = await Data.json();
                        console.log(JData);
                        alert(JData.mensaje);
                    }
                    CompM.NavigateFunction("WFormJs", new WFormJs(ModelObject, Save), "MainApp");
                }
            }
        }
    ];
}
class header {
    type = "header";
    children = [{ type: "h1", props: { innerText: "My App" } }];
}
class Main {
    type = "Main";
    props = { id: "MainApp" }
    children = [];
}
export { MainTemplate }