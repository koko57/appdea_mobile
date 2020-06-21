import { Platform } from 'react-native';

export const config = {
    server: Platform.select({
        ios: '127.0.0.1',
        android: '10.0.2.2',
    }),
};


export const BASE_URL = `http://${config.server}:5000`