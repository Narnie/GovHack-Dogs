import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import PointsRepository from './PointsRepository';
import MapPoint from "./MapPoint";

const gmapsApiKey = "AIzaSyAFVS3VoZHTceJd3snrMVWb1NtihK8XsVk";

class MapsView extends Component {
  render() {
    return (
      <div style={{width:"100vw", height:"100vh"}} >
        <GoogleMap
          bootstrapURLKeys={{key: gmapsApiKey}}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          { MapsView.GetPoints() }
        </GoogleMap>
      </div>
    );
  }

  static GetPoints() {
    let points = PointsRepository.GetPointsExample();
    return points.map((point) =>
      <MapPoint
        lat={point.lat}
        lng={point.lng}
        text={point.txt}
      />
    );
  }
}

MapsView.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  greatPlaceCoords: PropTypes.any
};

MapsView.defaultProps = {
  center: [-34.9285, 138.6007],
  zoom: 9,
  greatPlaceCoords: {lat: -34.6, lng: 138.80121}
};

export default MapsView;