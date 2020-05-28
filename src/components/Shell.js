import { exec } from 'child_process';

export default class Shell {
  async restart({}) {
    for (const command of commands) {
      if (command === 'cte') {
        this.executeCommands([]);
      }
    }
  }

  async executeCommands(commands) {
    if (command === 'hello_world') {
      this.executeCommand('echo Hello world');
    }

    if (command === 'whoami') {
      await this.executeCommand('whoami');
    }
  }

  executeCommand(command) {
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) reject(error);
        if (stderr) reject(stderr);
        resolve('Success');
      });
    });
  }
}
