<?php
    header("Access-Control-Allow-Origin: *");
    $Cards = json_decode(
        '[
            { "id": "Card-01", "descripcion": "My Descripcion", 
                "caracteristicas": [
                    {"id": "n1", "descripcion": "primera caracteristica"},                    
                    {"id": "n2", "descripcion": "segunda caracteristica"}
                ]
            },
            { "id": "Card-02", "descripcion": "My Descripcion", 
                "caracteristicas": [
                    {"id": "n1", "descripcion": "primera caracteristica"},                    
                    {"id": "n2", "descripcion": "segunda caracteristica"}
                ]
            },
            { "id": "Card-03", "descripcion": "My Descripcion", 
                "caracteristicas": [
                    {"id": "n1", "descripcion": "primera caracteristica"},                    
                    {"id": "n2", "descripcion": "segunda caracteristica"}
                ]
            },
            { "id": "Card-04", "descripcion": "My Descripcion", 
                "caracteristicas": [
                    {"id": "n1", "descripcion": "primera caracteristica"},                    
                    {"id": "n2", "descripcion": "segunda caracteristica"}
                ]
            },
            { "id": "Card-05", "descripcion": "My Descripcion", 
                "caracteristicas": [
                    {"id": "n1", "descripcion": "primera caracteristica"},                    
                    {"id": "n2", "descripcion": "segunda caracteristica"}
                ]
            }
        ]'
    );
    echo json_encode(array('Cards'=> $Cards));
?>