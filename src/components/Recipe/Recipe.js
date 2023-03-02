import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar, HiTrash, HiZoomIn } from 'react-icons/hi';
import {
  Container,
  RecipeInfo,
  InfoItem,
  Image,
  Meta,
  RecipeDifficulty,
  BadgeListy,
  Badge,
  Actions,
} from './Recipe.staled';
import { Component } from 'react';
import { Modal } from 'components/Modal';

export class Recipe extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });

  closeModal = () => this.setState({ isOpen: false });

  render() {
    const {
      item: { id, name, image, time, servings, calories, difficulty },
      onDelete,
    } = this.props;

    return (
      <Container>
        <Image src={image} alt={name} />
        <Meta>
          <h2>{name}</h2>
          <RecipeInfo>
            <InfoItem>
              <BsAlarm />
              {time} min
            </InfoItem>
            <InfoItem>
              <AiOutlinePieChart />
              {servings} servings
            </InfoItem>
            <InfoItem>
              <HiOutlineChartBar />
              {calories} calories
            </InfoItem>
          </RecipeInfo>

          <RecipeDifficulty>
            <h3>Difficulty</h3>
            <BadgeListy>
              <Badge isActive={difficulty === 'easy'} value={difficulty}>
                Easy
              </Badge>
              <Badge isActive={difficulty === 'medium'} value={difficulty}>
                Medium
              </Badge>
              <Badge isActive={difficulty === 'hard'} value={difficulty}>
                Hard
              </Badge>
            </BadgeListy>
          </RecipeDifficulty>
          <Actions>
            <button onClick={() => onDelete(id)} aria-label="Delete">
              <HiTrash />
            </button>
            <button onClick={this.openModal} aria-label="Zoom">
              <HiZoomIn />
            </button>
          </Actions>
        </Meta>

        {this.state.isOpen &&
          <Modal image={image}
            IsOpen={this.state.isOpen}
            onClose={this.closeModal} />}
      </Container>
    );
  }
}

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
