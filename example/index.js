import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Loading from '../lib'

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const scope = { Loading }
const code = `
  // You can live-editing the size, dash and
  // color property
  // <Loading size={36} dash={4} color="red" />
  <Loading />
`
const _LiveProvider = styled(LiveProvider)`
  display: flex;
  width: 900px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);

  > pre, > div {
    flex: 1;
    padding: 9px;
  }
`

ReactDOM.render(
  <_LiveProvider code={code} scope={scope}>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </_LiveProvider>,
  document.getElementById('root')
)
