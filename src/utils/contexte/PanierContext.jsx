import React, { createContext, useContext, useEffect, useState } from 'react';

export const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
	const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
	const storedNotificationCount =
		JSON.parse(localStorage.getItem('notificationCount')) || 0;

	const [cartQuantities, setCartQuantities] = useState({});

	const [items, setItems] = useState(storedItems);
	const [notificationCount, setNotificationCount] = useState(
		storedNotificationCount,
	);

	useEffect(() => {
		// Save the cart items to localStorage whenever it changes
		localStorage.setItem('cartItems', JSON.stringify(items));
		localStorage.setItem(
			'notificationCount',
			JSON.stringify(notificationCount),
		);
	}, [items, notificationCount]);

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
	// const [promoCode, setPromoCode] = useState('');
	// const [isPromoCodeApplied, setIsPromoCodeApplied] = useState(false);

	// const promoCodes = {
	// 	PROMO01: 0.9,
	// 	PROMO02: 0.8,
	// 	PROMO03: 0.3,
	// };

	const addToCart = (newItem) => {
		setItems((prevItems) => {
			const existingItem = prevItems.find((item) => item._id === newItem._id);

			if (existingItem) {
				// Mettre à jour l'état des quantités aussi
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
				// Initialiser la quantité à 1 pour le nouvel article
				setCartQuantities((prevQuantities) => ({
					...prevQuantities,
					[newItem._id]: 1,
				}));
				return [...prevItems, { ...newItem, quantity: 1 }];
			}
		});

		setNotificationCount((prevCount) => prevCount + 1);
	};

	const updateQuantity = (id, newQuantity) => {
		// Mettre à jour l'état des quantités
		setCartQuantities((prevQuantities) => ({
			...prevQuantities,
			[id]: Math.max(newQuantity, 0),
		}));

		// Mettre à jour la liste des articles avec la nouvelle quantité
		const updatedItems = items.map((item) =>
			item._id === id ? { ...item, quantity: Math.max(newQuantity, 0) } : item,
		);
		setItems(updatedItems);
	};

	// ...

	useEffect(() => {
		// Calculer les totaux en utilisant l'état des quantités maintenant
		const newTotalItems = Object.values(cartQuantities).reduce(
			(total, qty) => total + qty,
			0,
		);
		setTotalItems(newTotalItems);

		const newTotalPrice = items.reduce(
			(total, item) => total + item.prix * (cartQuantities[item._id] || 1),
			0,
		);
		setTotalPrice(newTotalPrice);
	}, [items, cartQuantities]);

	const removeItem = (id) => {
		const updatedItems = items.filter((item) => item._id !== id);
		setItems(updatedItems);
		localStorage.setItem('cartItems', JSON.stringify(updatedItems));
		setNotificationCount((prevCount) => Math.max(prevCount - 1, 0));
	};

	// const applyPromoCode = (total, promoCode) => {
	// 	const uppercasePromoCode = promoCode.toUpperCase();

	// 	if (promoCodes.hasOwnProperty(uppercasePromoCode)) {
	// 		return total * promoCodes[uppercasePromoCode];
	// 	}
	// 	if (promoCode === '') {
	// 		alert('Entrez le Code Promo');
	// 	} else {
	// 		alert('Invalid Promo Code');
	// 	}

	// 	return total;
	// };

	// const handleApplyPromoCode = () => {
	// 	setTotalPrice(applyPromoCode(totalPrice, promoCode));
	// 	setIsPromoCodeApplied(true);
	// };

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
	};

	return (
		<PanierContext.Provider value={value}>{children}</PanierContext.Provider>
	);
};

export const usePanier = () => {
	return useContext(PanierContext);
};
