import {Args, Command, Flags} from '@oclif/core'

export default class Ask extends Command {
  static override args = {
    file: Args.string({description: 'file to read'}),
  }

  static override description = 'Use AI to help answer your questions';

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static override flags = {
    // flag with a value (-q, --name=QUESTION, --name=QUESTION)
    name: Flags.string({char: 'q', description: 'The question you want to ask'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Ask)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} Welcome to brainlink!`);
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
