import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
	const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
	const validatedItems = storedItems.filter(
		(item) => item && typeof item.prix === 'number',
	);
	const storedNotificationCount =
		JSON.parse(localStorage.getItem('notificationCount')) || 0;

	const storedCartQuantities =
		JSON.parse(localStorage.getItem('cartQuantities')) || {};
	const [cartQuantities, setCartQuantities] = useState(storedCartQuantities);
	const [items, setItems] = useState(validatedItems);
	const [notificationCount, setNotificationCount] = useState(
		storedNotificationCount,
	);

	useEffect(() => {
		// Sauvegarde des articles du panier dans localStorage à chaque changement
		localStorage.setItem('cartItems', JSON.stringify(items));
		localStorage.setItem(
			'notificationCount',
			JSON.stringify(notificationCount),
		);
		localStorage.setItem('cartQuantities', JSON.stringify(cartQuantities));
	}, [items, notificationCount, cartQuantities]);

	const [deliveryOption, setDeliveryOption] = useState('');
	const deliveryCosts = {
		1: 1000,
		2: 1500,
		3: 2000,
		4: 2500,
		5: 4000,
	};

	const [totalItems, setTotalItems] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const updateQuantity = (id, newQuantity) => {
		setCartQuantities((prevQuantities) => ({
			...prevQuantities,
			[id]: Math.max(newQuantity, 0),
		}));

		const updatedItems = items.map((item) =>
			item._id === id ? { ...item, quantity: Math.max(newQuantity, 0) } : item,
		);
		setItems(updatedItems);
	};

	useEffect(() => {
		const totalItemsCount = items.reduce(
			(total, item) => total + (cartQuantities[item._id] || 1),
			0,
		);
		setTotalItems(totalItemsCount);
		setNotificationCount(totalItemsCount);

		const newTotalPrice = items.reduce((total, item) => {
			const itemPrice = item && typeof item.prix === 'number' ? item.prix : 0;
			const quantity = cartQuantities[item._id] || 1;
			return total + itemPrice * quantity;
		}, 0);
		setTotalPrice(newTotalPrice);
	}, [items, cartQuantities]);

	const addToCart = (newItem) => {
		if (!newItem || typeof newItem.prix !== 'number') {
			console.error("L'article ajouté est invalide ou manque un prix.");
			return;
		}

		setItems((prevItems) => {
			const existingItem = prevItems.find((item) => item._id === newItem._id);

			if (existingItem) {
				setCartQuantities((prevQuantities) => ({
					...prevQuantities,
					[newItem._id]: (prevQuantities[newItem._id] || 0) + 1,
				}));
				return prevItems.map((item) =>
					item._id === newItem._id
						? { ...item, quantity: (item.quantity || 0) + 1 }
						: item,
				);
			} else {
				setCartQuantities({ ...cartQuantities, [newItem._id]: 1 });
				return [...prevItems, { ...newItem, quantity: 1 }];
			}
		});
		setNotificationCount((prevCount) => prevCount + 1);
		toast.success('Produit ajouté au panier', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
	};

	const viderPanier = () => {
		setItems([]);
		setCartQuantities({});
		setNotificationCount(0);
		setDeliveryOption('');
		localStorage.removeItem('cartItems');
		localStorage.removeItem('notificationCount');
	};

	const removeItem = (id) => {
		const updatedItems = items.filter((item) => item._id !== id);
		setItems(updatedItems);
		localStorage.setItem('cartItems', JSON.stringify(updatedItems));
		setNotificationCount(updatedItems.length);
	};

	const value = {
		items,
		setItems,
		deliveryOption,
		setDeliveryOption,
		totalItems,
		totalPrice,
		removeItem,
		updateQuantity,
		deliveryCosts,
		addToCart,
		notificationCount,
		setNotificationCount,
		cartQuantities,
		viderPanier,
		toast,
		ToastContainer,
	};

	return (
		<PanierContext.Provider value={value}>{children}</PanierContext.Provider>
	);
};

export const usePanier = () => {
	return useContext(PanierContext);
};
