import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import { SafeArea } from '../../../components/utility/SafeAreaComponent';
import RestaurantInfoCard from '../components/RestaurantInfoCard';

export const RestaurantDetailScreen = ({ route }) => {
	const [breakfastExpanded, setBreakfastExpanded] = useState(false);
	const [lunchExpanded, setLunchExpanded] = useState(false);
	const [dinnerExpanded, setDinnerExpanded] = useState(false);
	const [drinksExpanded, setDrinksExpanded] = useState(false);

	const { restaurant } = route.params;

	return (
		<SafeArea>
			<RestaurantInfoCard restaurant={restaurant} />
			<ScrollView>
				<List.Accordion
					title='Breakfast'
					left={(props) => <List.Icon {...props} icon='bread-slice' />}
					expanded={breakfastExpanded}
					onPress={() => setBreakfastExpanded(!breakfastExpanded)}
				>
					<List.Item title='Eggs Benedict' />
					<List.Item title='Classic Breakfast' />
					<List.Item title='French Toast' />
				</List.Accordion>

				<List.Accordion
					title='Lunch'
					left={(props) => <List.Icon {...props} icon='hamburger' />}
					expanded={lunchExpanded}
					onPress={() => setLunchExpanded(!lunchExpanded)}
				>
					<List.Item title='Classic Cheeseburger' />
					<List.Item title='Fish and Chips' />
					<List.Item title='Meatlovers Pizza' />
				</List.Accordion>

				<List.Accordion
					title='Dinner'
					left={(props) => <List.Icon {...props} icon='food-variant' />}
					expanded={dinnerExpanded}
					onPress={() => setDinnerExpanded(!dinnerExpanded)}
				>
					<List.Item title='Pork Belly' />
					<List.Item title='Sirloin Steak' />
					<List.Item title='Butter Chicken' />
				</List.Accordion>

				<List.Accordion
					title='Drinks'
					left={(props) => <List.Icon {...props} icon='cup' />}
					expanded={drinksExpanded}
					onPress={() => setDrinksExpanded(!drinksExpanded)}
				>
					<List.Item title='Beer' />
					<List.Item title='Wine' />
					<List.Item title='Juice' />
				</List.Accordion>
			</ScrollView>
		</SafeArea>
	);
};
