import { getCache } from '@/utils/cache';
import { TOKEN_KEY } from '@/enums/storageEnum';

export const TOKEN = () => getCache<string>(TOKEN_KEY) || undefined;
