/** EditorJS-React Renderer
  *
  * A small library that provides functions to parse and render data saved by
  * EditorJS into react components
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert functions to React component
  *                             - Add CodeBoxOutput
  *                             - Adombang Munang Mbomndih
  * @version 1.0.2 - 2020.05.21 - Add key to list items - Adombang Munang Mbomndih
  * @version 1.0.3 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter - Adombang Munang Mbomndih
  *
  */

//#region imports
import React from 'react';
import HeaderOutput from './renderers/header/index.jsx';
import ParagraphOutput from './renderers/paragraph/index.jsx';
import ImageOutput from './renderers/image/index.jsx';
import VideoOutput from './renderers/video/index.jsx';
import EmbedOutput from './renderers/embed/index.jsx';
import ListOutput from './renderers/list/index.jsx';
import QuoteOutput from './renderers/quote/index.jsx';
import ChecklistOutput from './renderers/checklist/index.jsx';
import WarningOutput from './renderers/warning/index.jsx';
import TableOutput from './renderers/table/index.jsx';
import DelimiterOutput from './renderers/delimiter/index.jsx';
import CodeBoxOutput from './renderers/codeBox/index.jsx';
//#endregion

const Output = ({ data, style, classNames, config, renderers }) => {
  if (!data || typeof data !== 'object') return '';
  if (!style || typeof style !== 'object') style = {};
  if (!classNames || typeof classNames !== 'object') classNames = {};
  if (!config || typeof config !== 'object') config = {};
  if (!renderers || typeof renderers !== 'object') renderers = {};

  return data.blocks.map((block, i) => {
    let Renderer = null;

    switch (block.type.toLowerCase()) {
      case 'codebox':
        Renderer = renderers.codeBox || CodeBoxOutput;
        return <Renderer key={ i } data={ block.data } style={ style.codeBox || {}} config={ config.codeBox || {}} classNames={ classNames.codeBox || {}} />;
      case 'header':
        Renderer = renderers.header || HeaderOutput;
        return <Renderer key={ i } data={ block.data } style={ style.header || {}} config={ config.header || {}} classNames={ classNames.header || {}} />;
      case 'paragraph':
        Renderer = renderers.paragraph || ParagraphOutput;
        return <Renderer key={ i } data={ block.data } style={ style.paragraph || {}} config={ config.paragraph || {}}
          classNames={ classNames.paragraph || {}} />;
      case 'image':
        Renderer = renderers.image || ImageOutput;
        return <Renderer key={ i } data={ block.data } style={ style.image || {}} config={ config.image || {}} classNames={ classNames.image || {}} />;
      case 'video':
        Renderer = renderers.video || VideoOutput;
        return <Renderer key={ i } data={ block.data } style={ style.video || {}} config={ config.video || {}} classNames={ classNames.video || {}} />;
      case 'embed':
        Renderer = renderers.embed || EmbedOutput;
        return <Renderer key={ i } data={ block.data } style={ style.embed || {}} config={ config.embed || {}} classNames={ classNames.embed || {}} />;
      case 'table':
        Renderer = renderers.table || TableOutput;
        return <Renderer key={ i } data={ block.data } style={ style.table || {}} config={ config.table || {}} classNames={ classNames.table || {}} />;
      case 'list':
        Renderer = renderers.list || ListOutput;
        return <Renderer key={ i } data={ block.data } style={ style.list || {}} config={ config.list || {}} classNames={ classNames.list || {}} />;
      case 'checklist':
        Renderer = renderers.checklist || ChecklistOutput;
        return <Renderer key={ i } data={ block.data } style={ style.checklist || {}} config={ config.checklist || {}}
          classNames={ classNames.checklist || {}} />;
      case 'quote':
        Renderer = renderers.quote || QuoteOutput;
        return <Renderer key={ i } data={ block.data } style={ style.quote || {}} config={ config.quote || {}} classNames={ classNames.quote || {}} />;
      case 'warning':
        Renderer = renderers.warning || WarningOutput;
        return <Renderer key={ i } data={ block.data } style={ style.warning || {}} config={ config.warning || {}}
          classNames={ classNames.warning || {}} />;
      case 'delimiter':
        Renderer = renderers.delimiter || DelimiterOutput;
        return <Renderer key={ i } style={ style.delimiter || {}} config={ config.delimiter || {}} classNames={ classNames.delimiter || {}} />;

      default:
        if (!renderers[block.type.toLowerCase()]) {
          return '';
        }
        Renderer = renderers[block.type.toLowerCase()];
        return <Renderer key={ i } style={ style[block.type.toLowerCase()] || {}} config={ config[block.type.toLowerCase()] || {}} classNames={ classNames[block.type.toLowerCase()] || {}} />;
    }
  });
};

export {
  HeaderOutput, ParagraphOutput, ImageOutput, VideoOutput, EmbedOutput, TableOutput, CodeBoxOutput, ListOutput, QuoteOutput,
  ChecklistOutput, WarningOutput, DelimiterOutput, Output as default
};
