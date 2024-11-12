import {Picker} from "@react-native-picker/picker";

export default function Select({options, placeholder, selectedValue, onValueChange}) {
	return (
		<Picker
			selectedValue={selectedValue}
			onValueChange={(itemValue) => onValueChange(itemValue)}
			mode="dropdown"
		>
			<Picker.Item label={placeholder} value=""/>
			{options.map((option, index) => (
				<Picker.Item key={index} label={option.nome} value={option.id}/>
			))}
		</Picker>
	);
}