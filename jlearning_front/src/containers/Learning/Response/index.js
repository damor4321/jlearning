import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RecorderIcon from 'components/RecorderIcon';
import ResultIcon from 'components/ResultIcon';
import AnotherIcon from 'components/AnotherIcon';
import ToggleButton from 'components/ToggleButton';
import CircularProgress from 'material-ui/CircularProgress';
import { grey800, blue300, blue700, lightGreen800 } from 'material-ui/styles/colors';
import { recordResponse, checkResponse } from './actions';
import { loadQuestion, toggleTarget } from '../actions'; // eslint-disable-line no-unused-vars

const style = {
  display: 'flex',
  justifyContent: 'space-around',
};

/* eslint no-unused-vars: 0 */
export const Controls = ({ handleRecord, handleCheck, handleToggleTarget,
  handleAnother, learning }) => {
  let nodes;
  if (learning.get('recording')) {
    nodes = (
      <div
        style={style}
      >
        <table>
          <tr>
            <td style={{ width: '80px' }}>
              <ToggleButton
                onToggle={handleToggleTarget}
                toggled={learning.get('toggleTarget')}
              />
            </td>
            <td style={{ width: '100px' }}>
              <AnotherIcon
                onClick={handleAnother}
              />
            </td>
            <td style={{ width: '100px' }}>
              <RecorderIcon
                color={lightGreen800}
                hooverColor={lightGreen800}
                onClick={handleCheck}
              />
            </td>
          </tr>
        </table>
      </div>
    );
  } else if (learning.get('checking')) {
    nodes = (
      <div
        style={style}
      >
        <table>
          <tr>
            <td style={{ width: '80px' }}>
              <ToggleButton
                onToggle={handleToggleTarget}
                toggled={learning.get('toggleTarget')}
              />
            </td>
            <td style={{ width: '100px' }}>
              <AnotherIcon
                onClick={handleAnother}
              />
            </td>
            <td style={{ width: '100px' }}>
              <CircularProgress
                size={70}
                thickness={8}
                color={lightGreen800}
              />
            </td>
          </tr>
        </table>
      </div>
    );
  } else if (learning.get('result') === 'OK') {
    nodes = (
      <div
        style={style}
      >
        <table>
          <tr>
            <td style={{ width: '80px' }}>
              <ToggleButton
                onToggle={handleToggleTarget}
                toggled={learning.get('toggleTarget')}
              />
            </td>
            <td style={{ width: '100px' }}>
              <AnotherIcon
                onClick={handleAnother}
              />
            </td>
            <td style={{ width: '100px' }}>
              <ResultIcon
                correct={'true'}
              />
            </td>
          </tr>
        </table>
      </div>
    );
  } else if (learning.get('result') === 'KO') {
    nodes = (
      <div
        style={style}
      >
        <table>
          <tr>
            <td style={{ width: '80px' }}>
              <ToggleButton
                onToggle={handleToggleTarget}
                toggled={learning.get('toggleTarget')}
              />
            </td>
            <td style={{ width: '100px' }}>
              <AnotherIcon
                onClick={handleAnother}
              />
            </td>
            <td style={{ width: '100px' }}>
              <ResultIcon
                correct={'false'}
              />
            </td>
          </tr>
        </table>
      </div>
    );
  } else {
    nodes = (
      <div
        style={style}
      >
        <table>
          <tr>
            <td style={{ width: '80px' }}>
              <ToggleButton
                onToggle={handleToggleTarget}
                toggled={learning.get('toggleTarget')}
              />
            </td>
            <td style={{ width: '100px' }}>
              <AnotherIcon
                onClick={handleAnother}
              />
            </td>
            <td style={{ width: '100px' }}>
              <RecorderIcon
                color={blue300}
                hooverColor={blue700}
                onClick={handleRecord}
              />
            </td>
          </tr>
        </table>
      </div>
    );
  }
  return nodes;
};

Controls.propTypes = {
  handleRecord: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleToggleTarget: PropTypes.func.isRequired,
  handleAnother: PropTypes.func.isRequired,
  learning: PropTypes.object.isRequired,
};

export const mapDispatchToProps = (dispatch, props) => ({
  handleRecord: () => dispatch(recordResponse(props.learning)),
  handleCheck: () => dispatch(checkResponse(props.learning)),
  handleToggleTarget: () => dispatch(toggleTarget(true)),
  handleAnother: () => dispatch(loadQuestion(props.learning)),
});

export default connect(null, mapDispatchToProps)(Controls);
