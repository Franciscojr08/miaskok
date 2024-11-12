import SelectMultiple from "react-native-select-multiple";
import {View} from "react-native";


export default function Checkbox({ options, selectedValues, onChange }) {
	const optionsFormatado = options.map(option => ({
		label: option.nome,
		value: option.id
	}));
	
	return (
		<View>
			<SelectMultiple
				items={optionsFormatado}
				selectedItems={selectedValues.map(id => ({ label: '', value: id }))}
				onSelectionsChange={selections => {
					const selectedIds = selections.map(item => item.value);
					onChange(selectedIds);
				}}
			/>
		</View>
	)
}