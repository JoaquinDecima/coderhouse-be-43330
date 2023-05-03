import fs, { stat } from 'fs';

export default class LoggerManager {
	constructor(path) {
		this.path = path;
		// Si no existe this.path
		if (!fs.existsSync(this.path)) {
			// escribo el archivo de forma sincronica con un array vacio
			fs.writeFileSync(this.path, JSON.stringify([]));
		}
	}

	async getLogs() {
		const logs = await fs.promises.readFile(this.path, 'utf-8');
		return JSON.parse(logs);
	}

	async getLog(id) {
		const logs = await this.getLogs();
		const log = logs.find((logItem) => `${logItem.id}` === id);
		return log;
	}

	async addLog(log) {
		const logs = await this.getLogs();

		log.date = new Date();
		log.id = logs.length + 1;

		if (log.type === 'ERROR') {
			log.fixed = false;
		}
		this.saveHistoricalLog(log);
		logs.push(log);
		await this.#save(logs);

		return log;
	}

	async setFixStatusLog(id, status) {
		const logs = await this.getLogs();
		let modify = false;

		let logsFixed = logs.map((log) => {
			if (`${log.id}` === id) {
				if (log.type !== 'ERROR') {
					throw new Error(
						`El log con id ${id}, es de tipo ${log.type} y no de ERROR`
					);
				}
				log.fixed = status;
				modify = true;
			}
			return log;
		});

		if (!modify) {
			throw new Error(`No existe log con id ${id}`);
		}

		await this.#save(logsFixed);
	}

	async #save(data) {
		const dataString = JSON.stringify(data);
		await fs.promises.writeFile(this.path, dataString);
	}

	async saveHistoricalLog(log) {
		const path = `./${log.date.getYear()}-historico.vsk.log`;
		if (!fs.existsSync(path)) {
			// escribo el archivo de forma sincronica con un array vacio
			fs.writeFileSync(path, '');
		}
		let file = await fs.promises.readFile(path, 'utf-8');
		file =
			file +
			`${log.date} - ${log.type} - ${log.service} - ${log.info}  \n`;

		fs.writeFileSync(path, file);
	}
}
