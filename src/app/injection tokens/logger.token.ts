import { InjectionToken } from "@angular/core";
import { LoggerService } from "../services/logger.service";

export const loggerToken = new InjectionToken<LoggerService>('LOGGER_TOKEN');
