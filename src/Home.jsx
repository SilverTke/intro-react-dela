import Header from "./Header";
import napolitana from "./assets/napolitana.jpg";
import española from "./assets/española.jpg";
import pepperoni from "./assets/pepperoni.jpg";
import CardPizza from "./components/CardPizza";

const Home = () => (
	<section id="home" className="w-full flex flex-col gap-4 pb-4">
		<Header />
		<div className="flex gap-4">
			<CardPizza
				name="Napolitana"
				price={5950}
				ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
				img={napolitana}
			/>
			<CardPizza
				name="Española"
				price={6950}
				ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
				img={española}
			/>
			<CardPizza
				name="Pepperoni"
				price={6950}
				ingredients={["mozzarella", "pepperoni", "orégano"]}
				img={pepperoni}
			/>
		</div>
	</section>
);

export default Home;
