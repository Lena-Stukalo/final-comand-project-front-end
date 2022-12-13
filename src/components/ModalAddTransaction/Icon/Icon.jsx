import PropTypes from 'prop-types';
import sprite from '../../../transactionsComponentIcons/sprite.svg';

const Icon = ({ iconName, width, height, fill, stroke, ...props }) => {
  return (
    <svg width={width} height={height} fill={fill} stroke={stroke}>
      <use xlinkHref={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Icon;

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  props: PropTypes.any,
};
