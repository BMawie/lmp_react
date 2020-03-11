import React, {useState} from 'react';
import {
  Link
} from "react-router-dom";


function ProductItem(props) {
    let columns=[];
    props.products.forEach((item,idx) => {
        if (item.name != null) {
            columns.push(
                <div className="col-sm py-3" key={item.id.toString()}>
                    <Link to={{ pathname: `product/${item.id}`, state: { item, isAdmin: true } }} key={item.id.toString()}>
                        <img src={item.image} alt={item.name} width="300" height="300"/>
                        <h3>{ item.name }</h3>
                        <span className="price">
                            <span className="amount del">{item.price}<span>€</span></span>
                            &nbsp;
                            <span className="amount ins">{item.sale}<span>€</span></span>
                        </span>
                    </Link>
                </div>
            )

            if ((idx)%3===2) {columns.push(<div className="w-100" key={idx}></div>)}
        }
        else {
            columns.push(
                <div className="col-sm py-3" key={item.id.toString()}>
                </div>
            )
        }
    })
    return columns;
}

const ProductList = ({ website }) => {
    const [products, setProducts] = useState([
        {   name: "Longchamp Amazone Besace xs bordeaux",
            price: "490",
            id: "hvIqkdUB564C",
            sale: "245",
            brand: "Longchamp",
            image: "https://lamalleposte-alencon.fr/wp-content/uploads/2018/11/amazone_python-600x655.jpg",
            details: "Sac à rabat porté épaule XS – Longchamp\nCorps : Cuir de veau brillant façon python",
            delivery: "Frais de livraison: 10€ en suivi\nVeuillez appeler la boutique si vous souhaitez vous faire livrer.",
            description: "Ce sac à rabat séduit par son mini format, idéal pour avoir le nécessaire auprès de vous. Muni d’une chaîne délicate et coulissante, il peut se porter en toutes situations, de jour comme de nuit.",
            description2: "Long à l’épaule pour une allure sophistiquée, court ou bien en travers pour un style plus décontracté. Une beauté troublante de naturel, une allure racée et moderne, la nouvelle Amazone chez Longchamp vit sa vie comme une conquérante. Cultivant son côté rebelle, c’est un modèle de féminité forte, libre et courageuse, assumant ses choix avec confiance. Voyageuse urbaine, nomade, elle parcourt les capitales de la planète. Authentique et engagée, elle suit son instinct et ses idées en s’affranchissant des diktats. Le raffinement s’invite dans cette ligne à l’allure farouche à travers une chaine métallique, permettant de jouer sur les portés. Avec AMAZONE, place aux codes bohèmes : la boucle étrier fait écho à l’esprit équestre, la signature est marquée discrètement à chaud dans le cuir, enfin le jonc tressé, véritable touche de féminité, épouse avec délicatesse les lignes des modèles. Un cuir de veau brillant est embossé façon python pour une allure sophistiquée. Les écailles sont peintes de motifs luxuriants qui offrent du caractère et un esprit sauvage pleinement assumé.\n\nDimensions : 20*14*5"
        },
        {   name: "Mademoiselle Longchamp grenat",
            price: "890",
            id: "zHg2DwAAQBAJ",
            sale: "623",
            brand: "Longchamp",
            image: "https://lamalleposte-alencon.fr/wp-content/uploads/2019/09/MADEMOISELLE-LONGCHAMP-grenat-600x600.png",
            details: "Sac porté épaule\nCorps : Cuir de veau brillant façon python",
            delivery: "Frais de livraison: 10€ en suivi\nVeuillez appeler la boutique si vous souhaitez vous faire livrer.",
            description: "Enrichie de détails raffinés, sa large anse vous permet un porté épaule court et confortable. Optez pour un porté épaule long ou en travers avec la bandoulière amovible. Mademoiselle Longchamp, le chic conjugué à une allure française décomplexée.\n\nCuir de veau et Cuir de vachette. Doublure en polyester – Jacquard, panthère.",
            description2: "Structurée et graphique, cette besace allie élégance et décontraction. Mademoiselle Longchamp est la quintessence de l’esprit Longchamp : un esprit français, libre, décomplexé, impertinent et léger. Insaisissable, voyageuse dans l’âme, son chic la porte au bout du monde comme au bout de la rue. Elle a l’audace d’inventer sa vie, de créer ses propres codes. Mademoiselle Longchamp incarne ce « french spirit » qui la porte souvent là où on ne l’attend pas, y compris dans son style. La signature : un fermoir emblématique, les détails de la bandoulière et le sceau en cire émaillée affirment le caractère de la ligne. Un cuir de veau d’exception joue le contraste entre la sensualité de la matière et la dynamique de la perforation pour un esprit décontracté et épuré.\n\nDimensions : 26*16*10\n\nCouleur : Grenat"
        },
        {   name: "Longchamp sac seau Paris Rock Velours",
            price: "360",
            id: "rHogvgEACAAJ",
            sale: "180",
            brand: "Longchamp",
            image: "https://lamalleposte-alencon.fr/wp-content/uploads/2019/09/paris_rock_velours_seau-600x655.jpg",
            details: "Sac à rabat porté épaule XS – Longchamp\nCorps : Cuir de veau brillant façon python",
            delivery: "Frais de livraison: 10€ en suivi\nVeuillez appeler la boutique si vous souhaitez vous faire livrer.",
            description: "Ce sac à rabat séduit par son mini format, idéal pour avoir le nécessaire auprès de vous. Muni d’une chaîne délicate et coulissante, il peut se porter en toutes situations, de jour comme de nuit.",
            description2: "Long à l’épaule pour une allure sophistiquée, court ou bien en travers pour un style plus décontracté. Une beauté troublante de naturel, une allure racée et moderne, la nouvelle Amazone chez Longchamp vit sa vie comme une conquérante. Cultivant son côté rebelle, c’est un modèle de féminité forte, libre et courageuse, assumant ses choix avec confiance. Voyageuse urbaine, nomade, elle parcourt les capitales de la planète. Authentique et engagée, elle suit son instinct et ses idées en s’affranchissant des diktats. Le raffinement s’invite dans cette ligne à l’allure farouche à travers une chaine métallique, permettant de jouer sur les portés. Avec AMAZONE, place aux codes bohèmes : la boucle étrier fait écho à l’esprit équestre, la signature est marquée discrètement à chaud dans le cuir, enfin le jonc tressé, véritable touche de féminité, épouse avec délicatesse les lignes des modèles. Un cuir de veau brillant est embossé façon python pour une allure sophistiquée. Les écailles sont peintes de motifs luxuriants qui offrent du caractère et un esprit sauvage pleinement assumé.\n\nDimensions : 20*14*5"
        },
        {   name: "Mademoiselle Longchamp besace pilote",
            price: "445",
            id: "YG0oDwAAQBAJ",
            sale: "890",
            brand: "Longchamp",
            image: "https://lamalleposte-alencon.fr/wp-content/uploads/2018/11/mademoiselle_pilote-600x655.jpg",
            details: "Sac à rabat porté épaule XS – Longchamp\nCorps : Cuir de veau brillant façon python",
            delivery: "Frais de livraison: 10€ en suivi\nVeuillez appeler la boutique si vous souhaitez vous faire livrer.",
            description: "Ce sac à rabat séduit par son mini format, idéal pour avoir le nécessaire auprès de vous. Muni d’une chaîne délicate et coulissante, il peut se porter en toutes situations, de jour comme de nuit.",
            description2: "Long à l’épaule pour une allure sophistiquée, court ou bien en travers pour un style plus décontracté. Une beauté troublante de naturel, une allure racée et moderne, la nouvelle Amazone chez Longchamp vit sa vie comme une conquérante. Cultivant son côté rebelle, c’est un modèle de féminité forte, libre et courageuse, assumant ses choix avec confiance. Voyageuse urbaine, nomade, elle parcourt les capitales de la planète. Authentique et engagée, elle suit son instinct et ses idées en s’affranchissant des diktats. Le raffinement s’invite dans cette ligne à l’allure farouche à travers une chaine métallique, permettant de jouer sur les portés. Avec AMAZONE, place aux codes bohèmes : la boucle étrier fait écho à l’esprit équestre, la signature est marquée discrètement à chaud dans le cuir, enfin le jonc tressé, véritable touche de féminité, épouse avec délicatesse les lignes des modèles. Un cuir de veau brillant est embossé façon python pour une allure sophistiquée. Les écailles sont peintes de motifs luxuriants qui offrent du caractère et un esprit sauvage pleinement assumé.\n\nDimensions : 20*14*5"
        },
    ]);

    while (products.length % 3 !== 0) {
        products.push({ id : products.length, name: null });
    }

    return (
        <div className="container products">
            <div className="row">
                <ProductItem products={products} ></ProductItem>
            </div>
        </div>
    )
  
}

export default ProductList;