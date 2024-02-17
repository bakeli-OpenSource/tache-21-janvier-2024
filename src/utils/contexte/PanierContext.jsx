import React, { createContext, useContext, useEffect, useState } from 'react';

export const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
	const [items, setItems] = useState([
		{
			id: 1,
			name: 'Cotton T-shirt',
			categorie: 'T-shirt',
			price: 5000,
			quantity: 1,
			image:
				'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
		},
		{
			id: 2,
			name: 'Cotton T-shirt',
			categorie: 'T-shirt',
			price: 10000,
			quantity: 1,
			image:
				'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp',
		},
		{
			id: 3,
			name: 'Cotton T-shirt',
			categorie: 'T-shirt',
			price: 15000,
			quantity: 1,
			image:
				'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp',
		},
	]);

	const [deliveryOption, setDeliveryOption] = useState('1');
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

	const removeItem = (id) => {
		const updatedItems = items.filter((item) => item.id !== id);
		setItems(updatedItems);
	};

	const updateQuantity = (id, newQuantity) => {
		const updatedQuantity = Math.max(newQuantity, 1);

		const updatedItems = items.map((item) =>
			item.id === id ? { ...item, quantity: updatedQuantity } : item,
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
		const newTotalItems = items.reduce(
			(total, item) => total + item.quantity,
			0,
		);
		setTotalItems(newTotalItems);

		const newTotalPrice = items.reduce(
			(total, item) => total + item.price * item.quantity,
			0,
		);
		setTotalPrice(newTotalPrice);
	}, [items]);

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
	};

	return (
		<PanierContext.Provider value={value}>{children}</PanierContext.Provider>
	);
};

export const usePanier = () => {
	return useContext(PanierContext);
};
