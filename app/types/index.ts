export interface ProjectType {
  id: number;
  name: string;
  gitLink?: string | null;
  imageLink: string;
  liveLink?: string | null;
  tags: string[];
}
