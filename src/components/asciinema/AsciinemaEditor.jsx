import Editor from "@react-page/editor";

import React from "react";
import { baseCellPlugins } from "../../plugins/cellPlugins";
import PropTypes from 'prop-types'

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
 import '../../styles/_react_page_plugin.scss';

const AsciinemaEditor = ({mode, initialValue , onChange}) => {
  const [value, setValue] = React.useState(initialValue || null);
  return (
      <div className="react-page-editor-container">
        <Editor
          cellPlugins={baseCellPlugins}
          value={initialValue||value}
          onChange={onChange||setValue}
          readOnly={mode}
        />
      </div>
  );
};

AsciinemaEditor.prototype = {
  mode : PropTypes.string,
  initialValue: PropTypes.object,
  onChange: PropTypes.func,
}

export default AsciinemaEditor;

