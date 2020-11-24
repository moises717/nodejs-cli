const descripcion = {
	demand: true,
	alias: "d",
	desc: "Descripcion de la tarea por hacer",
};

const completado = {
	default: true,
	alias: "c",
	desc: "Marca como completada o pendiente la tarea",
};

const argv = require("yargs")
	.command("crear", "Crear tareas por hacer", {
		descripcion,
	})
	.command("actualizar", "Actualiza el estado completado de la tarea", {
		descripcion,
		completado,
	})
	.command("borrar", "borrar tarea completada", {
		descripcion,
	})
	.help().argv;

module.exports = {
	argv,
};
