import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "./style.scss";
import useInput from "hooks/common/useInput";
import client from "api/client";
import { useSelector } from "react-redux";

const TransitionCreate = () => {
  const user = useSelector((state) => state.user);
  console.log(user)
  const [form, setform] = useState({
    title: "",
    content: "",
  });

  const { title, content } = form;

  const onchange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setform(nextForm);
    console.log(form);
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    const body = {
      title,
      content,
      writer: user._id,
    };
    try {
      const response = await client.post(`/transition/createTransition`, body);
      console.log(response);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <>
      <div id="transition-editor-container">
        <div className="title">인수인계 작성</div>
        <form onSubmit={onsubmit}>
          <input
            type="text"
            placeholder="글제목"
            className="edite-tit"
            name="title"
            value={title}
            onChange={onchange}
          />
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
                const nextForm = {
                  ...form,
                  content: data,
                };
                setform(nextForm);
              }}
              editor={DecoupledEditor}
              data=""
            />
          </div>
          <button type="submit" className="submit">
            인수인계 제출하기
          </button>
        </form>
      </div>
    </>
  );
};

export default TransitionCreate;
