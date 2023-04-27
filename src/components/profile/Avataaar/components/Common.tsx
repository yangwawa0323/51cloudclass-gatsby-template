/** @format */

import { allOptions, Option } from 'avataaars';

export function filterOptions(filterArray: Option[]) {
	let filtered = allOptions.filter(
		(option: Option) =>
			filterArray.filter(
				(filterOption: Option) => option.key === filterOption.key
			).length === 0 // ***IMPORTANT***
	);
	return filtered;
}

function changeI18nOptionsLabel(options: Option[]): Option[] {
	let i18nOptions = options.map((option) => {
		switch (option.label) {
			case 'Top':
				return new Option({ key: option.key, label: '发型' });
			case '↳ 👓 Accessories':
				return new Option({ key: option.key, label: '眼镜' });
			case '🎨 HatColor':
				return new Option({ key: option.key, label: '帽子颜色' });
			case '↳ 💈 Hair Color':
				return new Option({ key: option.key, label: '发色' });
			case '👔 Clothes':
				return new Option({ key: option.key, label: '衣服' });
			case '↳ Color Fabric':
				return new Option({ key: option.key, label: '衣服颜色' });
			case '↳ Graphic':
				return new Option({ key: option.key, label: '涂装' });
			case '👁 Eyes':
				return new Option({ key: option.key, label: '眼睛' });
			case '✏️ Eyebrow':
				return new Option({ key: option.key, label: '眉毛' });
			case '👄 Mouth':
				return new Option({ key: option.key, label: '嘴巴' });
			case '🎨 Skin':
				return new Option({ key: option.key, label: '肤色' });
			default:
				return option;
		}
	});
	return i18nOptions;
}

// const clotheTypeOption = new Option({
//   key: 'clotheType',
//   label: '👔 Clothes',
// })

// const clotheColorOption = new Option({
//   key: 'clotheColor',
//   label: '↳ Color Fabric',
// })

const facialHairTypeOption = new Option({
	key: 'facialHairType',
	label: 'Facial Hair',
});

const facialHairColorOption = new Option({
	key: 'facialHairColor',
	label: '↳ ✂️ Facial Hair Color',
});

const uselessOptions: Option[] = [facialHairTypeOption, facialHairColorOption];
export const filteredOptions = changeI18nOptionsLabel(
	filterOptions(uselessOptions)
);
