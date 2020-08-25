import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Axios from "axios";

function AddJourney() {
  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
  });

  const changeForm = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleCKeditor = (event, editor) => {
    const data = editor.getData();
    setDataForm({ ...dataForm, content: data });
  };

  const createPost = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    console.log(dataForm);

    Axios({
      method: "post",
      url: `http://localhost:5000/api/v1/journey`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {...dataForm},
    })
      .then((response) => {
        // console.log(response);
        // setDataForm({
        //   title: "",
        //   content: "",
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            value={dataForm.title}
            onChange={(e) => changeForm(e)}
            aria-describedby="helpId"
            placeholder="Title here ..."
          />
        </div>

        <CKEditor
          editor={ClassicEditor}
          value={dataForm.content}
          onInit={(editor) => {
            // You can store the "editor" and use when it is needed.
            //   console.log("Editor is ready to use!", editor);
          }}
          onChange={handleCKeditor}
          config={{
            ckfinder: {
              uploadUrl: "http://localhost:5000/upload-ck-editor",
            },
          }}
        />

        <button
          type="submit"
          className="btn btn-primary text-white float-right mt-3"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default AddJourney;
