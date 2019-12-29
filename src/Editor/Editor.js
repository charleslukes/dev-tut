import React, { useEffect } from "react";
import MediumEditor from "medium-editor";
import "../../node_modules/medium-editor/dist/css/medium-editor.min.css";
import "../../node_modules/medium-editor/dist/css/themes/beagle.css";
import "./Editor.css";

const Editor = () => {
  useEffect(() => {
    let editor = new MediumEditor(".medium-editable", {
      autoLink: true,
      delay: 1000,
      targetBlank: true,
      toolbar: {
        buttons: [
          "bold",
          "italic",
          "quote",
          "underline",
          "anchor",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "justifyCenter",
          "strikethrough",
          "image"
        ],
        diffLeft: 25,
        diffTop: 10
      },
      anchor: {
        placeholderText: "Type a link",
        customClassOption: "btn",
        customClassOptionText: "Create Button"
      },
      paste: {
        cleanPastedHTML: true,
        cleanAttrs: ["style", "dir"],
        cleanTags: ["label", "meta"],
        unwrapTags: ["sub", "sup"]
      },
      anchorPreview: {
        hideDelay: 300
      },
      placeholder: {
        text: "Tell your story..."
      }
    });

    editor.subscribe("editableInput", function(event, editable) {
      // Do some work
      // this grabs the content of the editlor.
      console.log(editor.getContent(0));
    });
  });
  return (
    <div className="medium-container">
      <textarea id="medium-editable" className="medium-editable"></textarea>
    </div>
  );
};

export default Editor;
