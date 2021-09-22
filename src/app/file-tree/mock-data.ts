import { NodeModel } from './node.model';
export const DEFAULT_DATA: NodeModel[] = [
  {
    id: '1',
    type: 'folder',
    name: 'my_first_folder',
    isActive: false,
    children: [
      {
        id: '1-1',
        type: 'file',
        name: 'first_doc.html',
        isActive: false,
      },
      {
        id: '1-2',
        type: 'file',
        name: 'second_doc.jpeg',
        isActive: false,
      },
      {
        id: '1-3',
        type: 'folder',
        name: 'my_second_folder',
        isActive: false,
        children: [
          {
            id: '1-3-1',
            type: 'file',
            name: 'file_in_second_folder.txt',
            isActive: false,
          },
          {
            id: '1-3-2',
            type: 'folder',
            name: 'another_folder',
            isActive: false,
            children: [
              {
                id: '1-3-2-1',
                type: 'file',
                name: 'random.txt',
                isActive: false,
              },
              {
                id: '1-3-2-2',
                type: 'file',
                name: 'another_file.png',
                isActive: false,
              },
              {
                id: '1-3-2-3',
                type: 'file',
                name: 'helloworld.html',
                isActive: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    type: 'folder',
    name: 'my_second_folder',
    children: [],
  },
];
