import * as fs from 'fs';

import { resolve } from 'path';

import Alert from './Alert';

const sessionPath = resolve(__dirname, '..', 'config', 'session.json');

export default class Session {
  static save(session) {
    fs.writeFile(
      sessionPath,
      JSON.stringify(session),
      async (error) =>
        error && Alert.showAlert('[BOT] Angelo Medeiros', error.message)
    );
  }

  static get() {
    if (fs.existsSync(sessionPath)) {
      return require(sessionPath);
    }

    return undefined;
  }
}
