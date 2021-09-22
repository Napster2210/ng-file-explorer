export class NodeModel {
  type: 'folder' | 'file' | 'unset' | null = 'folder';
  name?: string;
  children?: NodeModel[];
  id!: string;
  isActive?: boolean;
}
