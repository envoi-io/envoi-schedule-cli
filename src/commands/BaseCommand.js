const { Command }  = require('commander');

class BaseCommand extends Command {
    static name = ''
    static description = ''
    subcommands= {}
    action
    params = []

    constructor(name) {
            console.debug('[BaseCommand.constructor]', { name })
            super(name)
            if (!name) this.name(this.constructor.name)
            this.description(this.constructor.description)
    }
    static createCommand(name = this.constructor.name) {
        console.debug('[BaseCommand.createCommand]', { name })
        const cmd = new this(name)
        cmd.createSubcommands()
        return cmd
    }

    // createCommand(name  = this.name()) {
    //     // const cmd = new Command(name)
    //     console.debug(this)
    //     this.static description(this.static description)
    //     this.createSubcommands()
    //     return this
    // }

    createSubcommands(subcommands = this.subcommands) {
        console.debug('[BaseCommand.createSubcommands]', { subcommands })
        for (const [name, subcommand] of Object.entries(subcommands)) {
            console.debug('[BaseCommand.createSubcommands]', { name, subcommand })
            if (!subcommand) continue
            const cmd = subcommand.createCommand(name)
            this.addCommand(cmd)
        }
    }
}

module.exports = { BaseCommand }