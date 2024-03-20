import { debugLog } from '51cloudclass-utilities/src/utils';
import { compactDecrypt } from 'jose';
import { Buffer } from 'buffer';

// Shared symmetric key (secret key)
const sharedKey = process.env.GATSBY_SHARED_KEY;

/*****************************************************
 * decrypt JWE message
 */
export async function decryptJWE2JSON(encrypted) {
	try {
		const { plaintext } = await compactDecrypt(
			encrypted,
			new Uint8Array(Buffer.from(sharedKey ?? '')),
			{
				contentEncryptionAlgorithms: ['A128GCM'],
				keyManagementAlgorithms: ['dir'],
			}
		);
		return JSON.parse(new TextDecoder().decode(plaintext));
	} catch (error) {
		debugLog(error);
	}
}

export async function decryptJWE2String(encrypted) {
	try {
		const { plaintext } = await compactDecrypt(
			encrypted,
			new Uint8Array(Buffer.from(sharedKey ?? '')),
			{
				contentEncryptionAlgorithms: ['A128GCM'],
				keyManagementAlgorithms: ['dir'],
			}
		);

		return new TextDecoder().decode(plaintext);
	} catch (error) {
		debugLog(error);
	}
}
