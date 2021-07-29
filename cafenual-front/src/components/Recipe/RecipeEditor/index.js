import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "./style.css";
const RecipeEditor = () => {
  return (
    <>
      <div className="editor-container">
        <form>
          <select name="select-border" id="select">
            <option value="1">커피</option>
            <option value="2">라떼</option>
            <option value="3">쥬스</option>
            <option value="4">티</option>
          </select>
          <input type="text" placeholder="글제목" id="tit" />
          <div className="write-form">
            <CKEditor
              onReady={(editor) => {
                console.log("Editor is ready to use!", editor);

                // Insert the toolbar before the editable area.
                editor.ui
                  .getEditableElement()
                  .parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                  );
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log(data);
              }}
              editor={DecoupledEditor}
              data=""
            />
          </div>
          <button type="submit" className="submit">레시피 제출하기</button>
        </form>
      </div>
    </>
  );
};

export default RecipeEditor;
