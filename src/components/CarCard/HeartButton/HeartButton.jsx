import sprite from '../../../assets/sprite.svg';
import { HeartButtonStyle } from './HeartButton.styled';

const HeartButton = props => {
  return (
    <HeartButtonStyle {...props}>
      <svg width={18} height={18}>
        <use href={sprite + '#like'} stroke="currentColor"></use>
      </svg>
    </HeartButtonStyle>
  );
};
export default HeartButton;
