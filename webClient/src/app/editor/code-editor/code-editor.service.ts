
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/
import { Injectable } from '@angular/core';
import { EditorControlService } from '../../shared/editor-control/editor-control.service';
import { ProjectContext } from '../../shared/model/project-context';

@Injectable()
export class CodeEditorService {

  constructor(private editorControl: EditorControlService) { }

  closeFile(fileContext: ProjectContext) {
    this.editorControl.closeFileHandler(fileContext);
    this.editorControl.closeFile.next(fileContext);
  }

  selectFile(fileContext: ProjectContext, broadcast: boolean) {
    this.editorControl.selectFileHandler(fileContext);
    if (broadcast) { this.editorControl.selectFile.next(fileContext); }
  }
}

/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/
