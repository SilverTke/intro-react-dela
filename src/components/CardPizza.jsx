import "./CardPizza.css";

/**
 *
 * @param {{img: string, name: string, ingredients: string[], price: number}} props
 * @returns
 */
const CardPizza = (props) => (
	<article className="card-pizza">
		<img src={props.img} />
		<div>
			<h2 className="font-bold">Pizza {props.name}</h2>
			<p>Ingredientes: {props.ingredients.join(", ")}</p>
		</div>
		<p className="font-bold text-green-700">
			${props.price.toLocaleString("es-CL")}
		</p>
		<div className="flex gap-4">
			<button className="border-black border-2 rounded-md px-4">Ver más</button>
			<button className="bg-black text-white rounded-md px-4">Añadir</button>
		</div>
	</article>
);

export default CardPizza;
