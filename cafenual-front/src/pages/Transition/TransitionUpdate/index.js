import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "./style.scss";
import useInput from "hooks/common/useInput";
import client from "api/client";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SetTransition } from "modules/transition";

const TransitionUpdate = () => {
  const params = useParams();
  const route = params.transId;
  const dispatch = useDispatch();
  const transition = useSelector((state) => state.transition);

  useEffect(() => {
    const getData = async () => {
      const response = await client.get(
        `/transition/readTransitionDetail/${route}`
      );
      dispatch(SetTransition(response.data.transition));
    };
    getData();
  }, []);

  const user = useSelector((state) => state.user);
  const [form, setform] = useState({
    title: transition.title,
    content: "",
  });
  console.log(form);

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
    };
    try {
      const response = await client.patch(
        `/transition/updateTransition/${route}`,
        body
      );
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
              data={transition.content}
            />
          </div>
          <button type="submit" className="submit">
            인수인계 수정하기
          </button>
        </form>
      </div>
    </>
  );
};

export default TransitionUpdate;
