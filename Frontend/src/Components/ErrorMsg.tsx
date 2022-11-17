import { useSelector } from "react-redux/es/exports";
import { RootState } from "..";

export default function Error() {
	const showError = useSelector((state: RootState) => state.error);
	return (
		<div className="error">
			<div className="errorMessage" id={showError ? "on" : "off"}>
				There was an error
			</div>
		</div>
	);
}
