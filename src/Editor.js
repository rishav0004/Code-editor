import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
// import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
// import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';

import { Controlled as ControlledEditor} from 'react-codemirror2';

const Editor = ({displayName,language,value,onChange}) => {

    function handleChange(editor,data,value){
        onChange(value)
    }
    
    const [open,setOpen] = useState(true)

    return (
      <>
          <div className={`editor-container ${open ? '' : 'collapsed'}`}>
              <div className="editor-title">
                  {displayName}
                  <button onClick={()=> setOpen(prevOpen => !prevOpen)}>
                    -+
                  </button>
              </div>
              <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-wrapper'
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme:'material',
                    lineNumbers: true
                }}
              />
          </div>
      </>
  )
};

export default Editor;
