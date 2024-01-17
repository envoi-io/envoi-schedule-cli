const { BaseCommand } = require("../BaseCommand");

class MediaTailorCommand extends BaseCommand {
    static name = 'media-tailor';
    subcommands= {
        "schedule": MediaTailorScheduleCommand,
        "channel": MediaTailorChannelCommand
    }
}

class MediaTailorChannelCommand extends BaseCommand {
    static name = 'channel';
    subcommands= {
        "to": MediaTailorChannelToCommand
    }
}

class MediaTailorScheduleCommand extends BaseCommand {
    static name = 'schedule';
    subcommands= {
        "to": MediaTailorScheduleToCommand
    }

}

class MediaTailorScheduleToCommand extends BaseCommand {
    static name = 'to';
    subcommands= {
        "envoi": MediaTailorScheduleToEnvoiCommand,
        "xmltv": MediaTailorScheduleToXmltvCommand
    }

}

class MediaTailorScheduleToEnvoiCommand extends BaseCommand {
    static name = 'envoi';
    static description = 'Converts a MediaTailor schedule to an Envoi resource.';
    subcommands= {
        "schedule": MediaTailorScheduleToEnvoiScheduleCommand
    }

}

class MediaTailorScheduleToEnvoiScheduleCommand extends BaseCommand {
    static name = 'schedule';
    static description = 'Converts a MediaTailor schedule to an Envoi schedule.';
}

class MediaTailorChannelToCommand extends BaseCommand {
    static name = 'to';
    static description = 'Converts a MediaTailor channel.';
    subcommands= {
        "envoi": MediaTailorChannelToEnvoiCommand,
        "xmltv": MediaTailorChannelToXmltvCommand
    }
}

class MediaTailorChannelToEnvoiCommand extends BaseCommand {
    static name = 'envoi';
    static description = 'Converts a MediaTailor channel to an Envoi resource.';
    subcommands= {
        "channel": MediaTailorChannelToEnvoiChannelCommand,
        "schedule": MediaTailorChannelToEnvoiScheduleCommand
    }
}

class MediaTailorChannelToEnvoiChannelCommand extends BaseCommand {
    static name = 'channel';
    static description = 'Converts a MediaTailor channel to an Envoi channel.';
}

class MediaTailorChannelToEnvoiScheduleCommand extends BaseCommand {
    static name = 'schedule';
    static description = 'Converts a MediaTailor channel to an Envoi schedule.';

}

class MediaTailorChannelToXmltvCommand extends BaseCommand {
    static name = 'xmltv';
    static description = 'Outputs a MediaTailor channel to XMLTV.';

}

class MediaTailorScheduleToXmltvCommand extends BaseCommand {
    static name = 'xmltv';
    static description = 'Outputs a MediaTailor schedule to XMLTV.';

}

module.exports = { MediaTailorCommand }