export const randomIntegerInRange = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const randomHexColorCode = (): string => {
	let n = (Math.random() * 0xfffff * 1000000).toString(16);
	const colorCode = "#" + n.slice(0, 6);
	if (colorCode.startsWith("#00")) {
		return randomHexColorCode();
	}
	return colorCode;
};
