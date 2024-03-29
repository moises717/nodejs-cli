const fs = require("fs");
const colors = require("colors");

let listadoPorHacer = [];

const guardarDB = () => {
	let data = JSON.stringify(listadoPorHacer);

	fs.writeFile("db/data.json", data, (err) => {
		if (err) return console.log(err);
		console.log("Tarea creada correctamente.".green);
	});
};

const cargarDB = () => {
	try {
		listadoPorHacer = require("../db/data.json");
	} catch (error) {
		listadoPorHacer = [];
	}
};

const crear = (descripcion) => {
	cargarDB();

	let porHacer = {
		descripcion,
		completado: false,
	};

	listadoPorHacer.push(porHacer);

	guardarDB();

	return porHacer;
};

const getListado = () => {
	cargarDB();
	return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
	cargarDB();
	let index = listadoPorHacer.findIndex(
		(tarea) => tarea.descripcion === descripcion
	);

	if (index >= 0) {
		listadoPorHacer[index].completado = completado;
		guardarDB();
		return true;
	} else {
		return false;
	}
};

const borrar = (descripcion) => {
	cargarDB();

	let nuevoListado = listadoPorHacer.filter((tarea) => {
		return tarea.descripcion !== descripcion;
	});

	if (nuevoListado.length === listadoPorHacer.length) return false;
	else listadoPorHacer = nuevoListado;
	guardarDB();
	return true;
};

module.exports = {
	crear,
	getListado,
	actualizar,
	borrar,
};
