import React, { createContext, useContext, useEffect, useState } from 'react';

export const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
	const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
	const storedNotificationCount =
		JSON.parse(localStorage.getItem('notificationCount')) || 0;

	const [quantity, setQuantity] = useState(1);
	const [items, setItems] = useState(storedItems);
	const [notificationCount, setNotificationCount] = useState(
		storedNotificationCount,
	);

	useEffect(() => {
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
	const [promoCode, setPromoCode] = useState('');
	const [isPromoCodeApplied, setIsPromoCodeApplied] = useState(false);

	const promoCodes = {
		PROMO01: 0.9,
		PROMO02: 0.8,
		PROMO03: 0.3,
	};

	const addToCart = (newItem) => {
		// You might want to check if the item is already in the cart and update the quantity
		setItems((prevItems) => [...prevItems, newItem]);
		setNotificationCount((prevCount) => prevCount + 1);
	};

	const removeItem = (id) => {
		const updatedItems = items.filter((item) => item._id !== id);
		setItems(updatedItems);
		localStorage.setItem('cartItems', JSON.stringify(updatedItems));
		setNotificationCount((prevCount) => Math.max(prevCount - 1, 0));
	};

	const updateQuantity = (id, newQuantity) => {
		const updatedQuantity = Math.max(newQuantity, 1);

		const updatedItems = items.map((item) =>
			item._id === id ? { ...item, quantity: updatedQuantity } : item,
		);

		setItems(updatedItems);
	};

	const applyPromoCode = (total, promoCode) => {
		const uppercasePromoCode = promoCode.toUpperCase();

		if (promoCodes.hasOwnProperty(uppercasePromoCode)) {
			return total * promoCodes[uppercasePromoCode];
		}
		if (promoCode === '') {
			alert('Entrez le Code Promo');
		} else {
			alert('Invalid Promo Code');
		}

		return total;
	};

	const handleApplyPromoCode = () => {
		setTotalPrice(applyPromoCode(totalPrice, promoCode));
		setIsPromoCodeApplied(true);
	};

	useEffect(() => {
		const newTotalItems = items.reduce((total) => total + quantity, 0);
		setTotalItems(newTotalItems);

		const newTotalPrice = items.reduce(
			(total, item) => total + item.prix * quantity,
			0,
		);
		setTotalPrice(newTotalPrice);
	}, [items, quantity]);

	const value = {
		items,
		setItems,
		deliveryOption,
		setDeliveryOption,
		totalItems,
		totalPrice,
		promoCode,
		setPromoCode,
		isPromoCodeApplied,
		setIsPromoCodeApplied,
		removeItem,
		updateQuantity,
		handleApplyPromoCode,
		deliveryCosts,
		addToCart,
		notificationCount,
		setNotificationCount,
		quantity,
		setQuantity,
	};

	return (
		<PanierContext.Provider value={value}>{children}</PanierContext.Provider>
	);
};

export const usePanier = () => {
	return useContext(PanierContext);
};
