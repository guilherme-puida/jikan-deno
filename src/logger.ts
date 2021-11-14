import { log } from '../dep.ts';

await log.setup({
    handlers: {
        console: new log.handlers.ConsoleHandler('INFO', {
            formatter: '{levelName} {msg} @ {datetime}',
        }),
        file: new log.handlers.FileHandler('INFO', {
            formatter: '{levelName} {msg} @ {datetime}',
            filename: 'log.txt',
        }),
    },
    loggers: {
        default: {
            level: 'INFO',
            handlers: ['console', 'file'],
        },
        consoleOnly: {
            level: 'INFO',
            handlers: ['console'],
        },
        fileOnly: {
            level: 'INFO',
            handlers: ['file'],
        },
    },
});

let logger = log.getLogger();

function setLogger(loggerType: 'default' | 'consoleOnly' | 'fileOnly' = 'default') {
    if (loggerType === 'default') {
        logger = log.getLogger();
    } else {
        logger = log.getLogger(loggerType);
    }
}

export { logger, setLogger };
