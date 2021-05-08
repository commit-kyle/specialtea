import classes from './AvailableTeas.module.css';

import Card from '../../UI/Card/Card';

const DUMMY_TEAS = [
	{
		id: 't1',
		name: 'Darjeeling',
		type: 'Black tea',
		description:
			'Darjeeling is the top Indian tea. It has a light, nutty flavor as compared to the bold and robust taste of other black teas.',
		price: 22.99,
	},
	{
		id: 't2',
		name: 'English Breakfast',
		type: 'Black tea',
		description:
			'Perhaps unsurprisingly, English Breakfast is the most popular tea in England. Much of this is a blend of Assam, Ceylon and Kenyan black tea',
		price: 16.5,
	},
	{
		id: 't3',
		name: 'Matcha',
		type: 'Green tea',
		description:
			'Green tea has been found to have a high concentration of antioxidants and polyphenols. Harvested, withered and dried immediately to prevent oxidation and retain its natural green color and nutrients.',
		price: 12.99,
	},
	{
		id: 't4',
		name: 'Chai',
		type: 'Black',
		description:
			'This milky, sugary, spiced beverage is drunk all day long in India. Loaded with spices like ginger, cinnamon, cardamom, and cloves; and sweetened with honey.',
		price: 18.99,
	},
];

const AvailableTeas = () => {
	const teaList = DUMMY_TEAS.map(tea => {
		return <li>{tea.name}</li>;
	});

	return (
		<section className={classes.teas}>
			<Card>
				<ul>{teaList}</ul>
			</Card>
		</section>
	);
};

export default AvailableTeas;
