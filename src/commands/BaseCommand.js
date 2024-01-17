const { Command }  = require('commander');

class BaseCommand extends Command {
    static name = ''
    static description = ''
    subcommands= {}
    action
    params = []

    constructor(name) {
        super(name)
        if (!name) this.name(this.constructor.name)
        this.description(this.constructor.description)
    }
    static createCommand(name = this.constructor.name) {
        const cmd = new this(name)
        cmd.createSubcommands()
        return cmd
    }

    createSubcommands(subcommands = this.subcommands) {
        for (const [name, subcommand] of Object.entries(subcommands)) {
            if (!subcommand) continue
            const cmd = subcommand.createCommand(name)
            this.addCommand(cmd)
        }
    }
}

module.exports = { BaseCommand }
