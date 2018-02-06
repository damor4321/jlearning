import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card'; // eslint-disable-line no-unused-vars
import Question from './Question';
import UserControls from './Response';
import { selectLearning } from './selectors';

const style = {
  width: '90%',
  margin: '32px auto',
  padding: '16px',
  toggle: {
    marginBottom: 16,
    marginLeft: 16,
  },
};

export const Learning = ({ learning }) => {
  const summary = `Correct: ${learning.get('correctResponses')}  Incorrect: ${learning.get('incorrectResponses')}`;
  return (
    <div style={style} >
      <Card>
        <CardMedia>
          <img src="images/wave222.jpg" alt="" />
        </CardMedia>
        <CardTitle title="Summary:" subtitle={summary} />
        <CardText>
          <Question learning={learning} />
        </CardText>
        <br />
        <CardActions>
          <UserControls learning={learning} />
        </CardActions>
        <br />
      </Card>
    </div>
  );
};

Learning.propTypes = {
  learning: PropTypes.object.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  learning: selectLearning(),
});

export default connect(mapStateToProps)(Learning);
