import BuyCall from "./Components/BuyCall";
import BuyPut from "./Components/BuyPut";
import Call from "./Components/CallComp";
import Error from "./Components/ErrorMsg";
import Navbar from "./Components/Navbar";
import Put from "./Components/PutComp";

export default function App() {
	return (
		<div>
			<Error />
			<Navbar />
			<Call />
			<BuyCall />
			<Put />
			<BuyPut />
		</div>
	);
}
