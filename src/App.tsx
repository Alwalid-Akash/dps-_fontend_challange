import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Myfooter from './components/Myfooter';
import 'bootstrap/dist/css/bootstrap.css';
import NameFilter from './components/ NameFilter';
import DataDisplay from './components/DataDisplay';
import CityFilter from './components/CityFilter';
import './App.css';



interface User {
	id: number;
	firstName: string;
	lastName: string;
	age: number;
	email: string;
	image: string;
	highlight?: boolean;
	address: {
		address: string;
		city: string;
		state: string;
		stateCode: string;
		postalCode: string;
		coordinates: {
			lat: number;
			lng: number;
		};
	};
}

const App: React.FC = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
	const [nameFilter, setNameFilter] = useState<string>('');
	const [cityFilter, setCityFilter] = useState<string>('');
	const [highlightOldest, setHighlightOldest] = useState<boolean>(false);


	useEffect(() => {
		axios
			.get<{ users: User[] }>('https://dummyjson.com/users')
			.then((response) => {
				const fetchedUsers = response.data.users ?? [];
				setUsers(fetchedUsers);
				setFilteredUsers(fetchedUsers);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	// Apply filters and highlight logic
	useEffect(() => {
		let result: User[] = users;


		if (nameFilter) {
			result = result.filter(
				(user) =>
					user.firstName.toLowerCase().includes(nameFilter.toLowerCase()) ||
					user.lastName.toLowerCase().includes(nameFilter.toLowerCase())
			);
		}


		if (cityFilter) {
			result = result.filter((user) => user.address.city === cityFilter);
		}


		if (highlightOldest) {
			const cityGroups = result.reduce<{ [key: string]: User[] }>((acc, user) => {
				acc[user.address.city] = acc[user.address.city] || [];
				acc[user.address.city].push(user);
				return acc;
			}, {});

			result = Object.values(cityGroups).flatMap((cityUsers: User[]) => {
				const oldestUser = cityUsers.reduce((oldest, user) =>
					user.age > oldest.age ? user : oldest
				);

				return cityUsers.map((user) =>
					user.id === oldestUser.id ? { ...user, highlight: true } : user
				);
			});
		}

		setFilteredUsers(result);
	}, [nameFilter, cityFilter, highlightOldest, users]);


	const cities = Array.from(new Set(users.map((user) => user.address.city)));

	return (
		<>
			<Header />

			<div className="app">

				<h1>User List</h1>
				<NameFilter onChange={(value: string) => setNameFilter(value)} />


				<CityFilter cities={cities} onChange={(value: string) => setCityFilter(value)} />

				<div className="highlight-checkbox">
					<label>
						<input
							type="checkbox"
							checked={highlightOldest}
							onChange={(e) => setHighlightOldest(e.target.checked)}
						/>
						Highlight oldest user in each city
					</label>
				</div>


				{/* Display filtered users */}
				{filteredUsers.length === 0 ? (
					<p>No users found</p>
				) : (
					<DataDisplay users={filteredUsers} />
				)}
			</div>
			<Myfooter />
		</>
	);

};

export default App;
