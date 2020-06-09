export interface Environment {
  production: boolean;
  baseUrl: string;
  sectionPath: Path;
};

export interface Path {
  banner: string;
  services: string;
  offer: string;
  coaches: string;
};