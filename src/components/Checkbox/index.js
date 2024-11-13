import { FlatList } from 'react-native';
import SelectMultiple from "react-native-select-multiple";

export default function Checkbox({ options, selectedValues, onChange }) {
	const optionsFormatado = options.map(option => ({
		label: option.nome,
		value: option.id
	}));
	
	return (
		<FlatList
			data={optionsFormatado}
			keyExtractor={(item) => item.value.toString()}
			renderItem={({ item }) => (
				<SelectMultiple
					items={[item]}
					selectedItems={selectedValues.map(id => ({ label: '', value: id }))}
					onSelectionsChange={(selections) => {
						const selectedIds = selections.map(item => item.value);
						onChange(selectedIds);
					}}
				/>
			)}
			style={{ maxHeight: 150, marginBottom: 10 }}
		/>
	);
}
