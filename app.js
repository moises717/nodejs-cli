const { argv } = require("./config/yargs");
const colors = require("colors");
const porHacer = require("./por-hacer/por-hacer");

const porHcaer = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
	case "crear":
		let tarea = porHcaer.crear(argv.descripcion);
		console.log(tarea);
		break;
	case "listar":
		let listado = porHacer.getListado();
		console.log("########### POR HACER #########".green);
		for (let tarea of listado) {
			console.log(tarea.descripcion);
			console.log("Estado:", tarea.completado);
		}
		console.log("########### POR HACER #########".green);
		break;
	case "actualizar":
		let actualizado = porHcaer.actualizar(argv.descripcion, argv.completado);
		console.log(actualizado);

		break;

	case "borrar":
		let borrado = porHcaer.borrar(argv.descripcion);
		console.log(borrado);
		break;

	default:
		console.log("Comando no reconocido");
}
