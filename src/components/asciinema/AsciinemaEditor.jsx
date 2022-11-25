import Editor from "@react-page/editor";

import React from "react";
import { baseCellPlugins } from "../../plugins/cellPlugins";

/**
 * IMPORTANT! IMPORTANT! IMPORTANT!
 *  Anywhere to use the AsciinemaEditor component must wrapper the @emotion/cache at top level
 * 
 * For example:
 * import EmotionCacheWrapper from "../../utils/Cache";
 * import { CssBaseline } from "@mui/material";
 * import "@react-page/editor/lib/index.css";
 * 
 * return (
 * <EmotionCacheWrapper >
 *   <CssBaseline />
 * </EmotionCacheWrapper />
 * )
 * 
*/ 
const AsciinemaEditor = ({mode}) => {
  const [value, setValue] = React.useState(null);
  return (
      <div className="react-page-editor-container">
        <Editor
          cellPlugins={baseCellPlugins}
          value={value}
          onChange={setValue}
          readOnly={mode}
        />
      </div>
  );
};

export default AsciinemaEditor;
