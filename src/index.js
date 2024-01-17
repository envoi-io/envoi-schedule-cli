#!/usr/bin/env node
const { BaseCommand } = require('./commands/BaseCommand');
const { EnvoiCommand } = require('./commands/envoi');
const { MediaTailorCommand } = require('./commands/media-tailor');

class MainCommand extends BaseCommand {
    static name = 'envoi-schedule'
    static subcommands = {
        "envoi": EnvoiCommand,
        "media-tailor": MediaTailorCommand
    }
    subcommands = this.constructor.subcommands

    static run(args = process.argv) {
        const program = this.createCommand()
        program.parse(args)
    }
}

if (require.main === module) {
    MainCommand.run()
}

module.exports = {
    MainCommand
}
