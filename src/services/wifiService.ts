import { TWifi, InsertWifi } from "../types/wifiTypes";
import * as wifiRepository from "../repositories/wifiRepository";
import * as errorHandlingUtils from "../utils/errorHandlingUtils";
import * as securityUtils from "../utils/securityUtils";

function decryptWifiPasswords(wifi: TWifi[]) {
	const newWifi: TWifi[] = wifi.map((el) => ({
		...el,
		password: securityUtils.decryptField(el.password),
	}));

	return newWifi;
}

async function validateWifiId(wifiId: number, userId: number) {
	if (!wifiId) return null;

	const wifi: TWifi | null = await wifiRepository.findById(wifiId);

	if (!wifi) {
		throw errorHandlingUtils.notFound("Wi-fi not found!");
	}

	if (wifi.userId !== userId) {
		throw errorHandlingUtils.unauthorized("Invalid wi-fi id!");
	}

	return wifi;
}

async function getAllUserWifi(userId: number) {
	const wifi: TWifi[] = await wifiRepository.findAll(userId);
	return decryptWifiPasswords(wifi);
}

export async function create(wifiData: InsertWifi) {
	const encryptedPassword: string = securityUtils.encryptField(wifiData.password);

	const wifi: TWifi = await wifiRepository.insert({
		...wifiData,
		password: encryptedPassword,
	});

	wifi.password = wifiData.password;

	return wifi;
}

export async function getAll(wifiId: number, userId: number) {
	const wifi: TWifi | null = await validateWifiId(wifiId, userId);

	if (!wifi) {
		const wifis: TWifi[] = await getAllUserWifi(userId);
		return wifis;
	}

	wifi.password = securityUtils.decryptField(wifi.password);

	return wifi;
}

export async function deleteWifi(cardId: number, userId: number) {
	const card: TWifi | null = await validateWifiId(cardId, userId);

	if (!card) {
		throw errorHandlingUtils.badRequest("Card id was not sent!");
	}

	await wifiRepository.deleteById(card.id);
}
