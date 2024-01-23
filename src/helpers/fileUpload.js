export const fileUpload = async (file) => {
	const cloudUrl = 'https://api.cloudinary.com/v1_1/dv145hiwk/upload';

	const formData = new FormData();

	if (!file) throw new Error('No existe archivos a subir');
	formData.append('upload_preset', 'react-journal');
	formData.append('file', file);

	try {
		const resp = await fetch(cloudUrl, {
			method: 'POST',
			body: formData,
		});

		console.log(resp);

		if (!resp.ok) throw new Error('No se logro subir la imagen');

		const cloudResp = await resp.json();
		console.log({ cloudResp });
		return cloudResp.secure_url;
	} catch (error) {
		console.log(error);
		throw new Error(error.message);
	}
};
