function validarTitulo() {
	const titulo = document.querySelector('title');
	return titulo !== null && titulo.textContent.trim().length > 0;
}
