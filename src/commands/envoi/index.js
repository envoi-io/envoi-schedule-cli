const {BaseCommand} = require("../BaseCommand");

class EnvoiCommand extends BaseCommand {
    static name = 'envoi';
    subcommands= {
        "channel": EnvoiChannelCommand,
        "schedule": EnvoiScheduleCommand
    }
}

class EnvoiChannelCommand extends BaseCommand {
    static name = 'channel';
    subcommands= {
        "to": EnvoiChannelToCommand
    }
}

class EnvoiChannelToCommand extends BaseCommand {
    static name = 'to';
    subcommands= {
        "media-tailor": EnvoiChannelToMediaTailorCommand
    }
}

class EnvoiChannelToMediaTailorCommand extends BaseCommand {
    static name = 'media-tailor';
    subcommands= {
        "channel": EnvoiChannelToMediaTailorChannelCommand,
        "schedule": EnvoiChannelToMediaTailorScheduleCommand
    }
}

class EnvoiScheduleCommand extends BaseCommand {
    static name = 'schedule';
    subcommands= {
        "to": EnvoiScheduleToCommand
    }
}

class EnvoiScheduleToCommand extends BaseCommand {
    static name = 'to';
    subcommands= {
        "media-tailor": EnvoiScheduleToMediaTailorScheduleCommand
    }
}

class EnvoiChannelToMediaTailorChannelCommand extends BaseCommand {
    static name = 'channel';
    static description = 'Converts an Envoi channel to a MediaTailor channel.';
}

class EnvoiChannelToMediaTailorScheduleCommand extends BaseCommand {
    static name = 'schedule';
    static description = 'Converts an Envoi schedule to a MediaTailor schedule.';
}

class EnvoiScheduleToMediaTailorScheduleCommand extends BaseCommand {
    static name = 'schedule';
    static description = 'Converts an Envoi schedule to a MediaTailor schedule.';
}

module.exports = { EnvoiCommand }