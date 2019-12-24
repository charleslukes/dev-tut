import React, { useEffect } from "react";
import MediumEditor from "medium-editor";

const Editor = () => {
  useEffect(() => {
    new MediumEditor(/*dom, */ ".medium-editable", {
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
          "strikethrough",
          "subscript",
          "superscript",
          "pre",
          "image",
          "html",
          "justifyCenter"
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
  });
  return (
    <div>
      <textarea id="medium-editable" className="medium-editable"></textarea>
    </div>
  );
};

export default Editor;
