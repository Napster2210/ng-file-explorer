import { NodeModel } from './node.model';
import { Component, OnInit } from '@angular/core';
import { DEFAULT_DATA } from './mock-data';

@Component({
  selector: 'app-file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.css'],
})
export class FileTreeComponent implements OnInit {
  constructor() {}

  jsonData: string = '';
  generatedData: NodeModel[] = [];

  rootFolderName: string = '';
  showRootFolderInput: boolean = false;
  showTypeOption: boolean = false;
  showChildInput: boolean = false;
  childNodeName: string = '';
  selectedNodeType: 'file' | 'folder' = 'folder';
  selectedNodeId: string = '';

  /**
   * To initialize method of Angular
   *
   * @memberof FileTreeComponent
   */
  ngOnInit(): void {
    // this.jsonData = JSON.stringify(DEFAULT_DATA, undefined, 4);
    // this.generatedData = DEFAULT_DATA;
  }

  loadTree() {
    this.generatedData = DEFAULT_DATA;
    this.jsonData = JSON.stringify(DEFAULT_DATA, undefined, 4);
  }

  clearTree() {
    this.generatedData = [];
    this.jsonData = '';
  }

  /**
   * To add folder to root with entered name
   *
   * @memberof FileTreeComponent
   */
  addRootFolder() {
    if (!this.rootFolderName.trim()) {
      alert('Folder name can not be blank!');
      return;
    }
    const tempFolder: NodeModel = {
      id: (this.generatedData.length + 1).toString(),
      type: 'folder',
      name: this.rootFolderName,
      isActive: false,
      children: [],
    };
    this.generatedData.push(tempFolder);
    this.jsonData = JSON.stringify(this.generatedData, undefined, 4);
    this.cancelFolderInput();
  }

  /**
   * To cancel/hide folder input field
   *
   * @memberof FileTreeComponent
   */
  cancelFolderInput() {
    this.rootFolderName = '';
    this.showRootFolderInput = false;
  }

  /**
   * Enable/Disable file type button
   *
   * @param {string} id
   * @memberof FileTreeComponent
   */
  toggleTypeOptions(id: string) {
    this.selectedNodeId = id;
    this.showTypeOption = !this.showTypeOption;
  }

  /**
   * Node type click event
   *
   * @param {('file' | 'folder')} type Node Type
   * @memberof FileTreeComponent
   */
  onNodeTypeClick(type: 'file' | 'folder') {
    this.selectedNodeType = type;
    this.showChildInput = true;
  }

  /**
   * To cancel Child Input field
   *
   * @memberof FileTreeComponent
   */
  cancelChildInput() {
    this.childNodeName = '';
    this.showChildInput = false;
  }

  /**
   * To add new node to tree
   *
   * @param {NodeModel} node Current Node
   * @return {*}
   * @memberof FileTreeComponent
   */
  addNode(node: NodeModel) {
    if (!this.childNodeName.trim()) {
      alert(
        `${
          this.selectedNodeType === 'file' ? 'File' : 'Folder'
        } name can not be blank!`
      );
      return;
    }
    const tempId = node.children && node.children?.length + 1;
    const tempNode: NodeModel = {
      id: `${node.id}-${tempId}`,
      type: this.selectedNodeType,
      name: this.childNodeName,
      isActive: false,
      children: [],
    };
    node.children?.push(tempNode);
    this.jsonData = JSON.stringify(this.generatedData, undefined, 4);
    this.selectedNodeType = 'folder';
    this.showTypeOption = false;
    this.cancelChildInput();
  }

  /**
   * To delete specific node from tree
   *
   * @param {NodeModel} node Current node
   * @param {NodeModel} parent Parent Node
   * @memberof FileTreeComponent
   */
  deleteNode(node: NodeModel, parent: NodeModel) {
    const childIndex: any = parent?.children?.findIndex(
      (x) => x.id === node.id
    );
    if (childIndex > -1) {
      parent.children?.splice(childIndex, 1);
    }
    this.jsonData = JSON.stringify(this.generatedData, undefined, 4);
  }
}
