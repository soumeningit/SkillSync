// import React from "react";
// import data from "@emoji-mart/data";
// import Picker from "@emoji-mart/react";

// function EmojiList({ setNewMessage, showEmojiPicker, setShowEmojiPicker }) {
//   return (
//     <>
//       <Picker
//         data={data}
//         onClickOutside={() => {

//         }}
//         onEmojiSelect={(emoji) => {
//           console.log("Selected emoji:", emoji);
//           setNewMessage((prev) => prev + emoji.native);
//         }}
//       />
//     </>
//   );
// }

// export default EmojiList;

import React from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

function EmojiList({ setNewMessage, setShowEmojiPicker }) {
  return (
    <Picker
      data={data}
      theme="dark"
      onEmojiSelect={(emoji) => {
        setNewMessage((prev) => prev + emoji.native);
      }}
    />
  );
}

export default EmojiList;
