import { LoggerService } from "../services/logger.service";

export function createLogger() {
  return new LoggerService();
}
