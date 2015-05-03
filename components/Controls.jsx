
var React = require('react');
var Progress = require('./Progress.jsx');
var Icon = require('react-geomicons');
var hhmmss = require('hhmmss');


var Controls = React.createClass({

  playPause: function(e) {
    this.props.playPause();
  },

  render: function() {
    var title = this.props.tracks[this.props.currentIndex].title;
    var progress = (this.props.duration * this.props.currentTime / this.props.duration) || 0;

    var styles = {
      playIcon: {
        position: 'relative',
        left: this.props.playing ? '' : '.0625em',
      },
      playButton: {
        width: '4rem',
        height: '4rem',
        padding: 0,
      },
      previousNextButtons: {
        width: '3rem',
        height: '3rem',
        padding: 0,
      },
    };

    return (
      <div className="center py3">
        <h1 className="h2 mt0">{title}</h1>
        <div className="inline-block mb1">
          <div className="flex flex-center mx-auto">
            <button className="h2 button button-transparent button-scale circle"
              title="Play Previous Track"
              style={styles.previousNextButtons}
              onClick={this.props.previous}>
                <Icon name="previous" />
            </button>
            <button className="h1 button button-transparent button-scale circle"
              title={this.props.playing ? 'Pause' : 'Play'}
              style={styles.playButton}
              onClick={this.playPause}>
              <Icon name={this.props.playing ? 'pause' : 'play' }
                style={styles.playIcon}/>
            </button>
            <button className="h2 button button-transparent button-scale circle"
              title="Play Next Track"
              style={styles.previousNextButtons}
              onClick={this.props.next}>
                <Icon name="next" />
            </button>
          </div>
        </div>
        <div>
          <Progress className="progress"
            onClick={this.props.seek}
            value={progress}
            min={this.props.currentTime}
            max={this.props.duration} />
          <div className="flex h6">
            <div>{hhmmss(this.props.currentTime)}</div>
            <div className="flex-auto" />
            <div>{hhmmss(this.props.duration)}</div>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Controls;

