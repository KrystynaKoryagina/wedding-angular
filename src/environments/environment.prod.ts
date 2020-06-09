import { Environment } from './interface';

export const environment: Environment = {
  production: false,
  baseUrl: 'https://blog-angular-e7fc3.firebaseio.com',
  sectionPath: {
    banner: 'info',
    services: 'service',
    offer: 'offer',
    coaches: 'coach'
  }
};
